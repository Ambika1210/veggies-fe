import axios from "axios";
import { routePaths } from "../routes/routePaths";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:7173/v1";

/**
 * Base API service function using axios
 * Handles authentication, error handling, and token management
 * 
 * @param {Object} options - API call options
 * @param {string} options.endpoint - API endpoint (without base URL)
 * @param {string} options.method - HTTP method (GET, POST, PUT, PATCH, DELETE)
 * @param {Object|FormData} options.body - Request body
 * @param {Object} options.headers - Additional headers
 * @param {number} options.timeout - Request timeout in milliseconds
 * @returns {Promise} Axios response
 */
export default async function apiCall({
  endpoint,
  method = "GET",
  body = null,
  headers = {},
  timeout = 10000,
}) {
  try {
    const token = localStorage.getItem("token");

    // Set default headers
    const defaultHeaders = {};
    if (!(body instanceof FormData)) {
      defaultHeaders["Content-Type"] = "application/json";
    }
    
    // Add authorization token if available
    if (token) {
      defaultHeaders.Authorization = `Bearer ${token}`;
    }

    // Merge with custom headers
    const finalHeaders = { ...defaultHeaders, ...headers };

    // Format endpoint URL safely
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;

    const response = await axios({
      url: `${BASE_URL}/${cleanEndpoint}`,
      method: method.toUpperCase(),
      data: body,
      headers: finalHeaders,
      timeout,
    });

    return response;
  } catch (error) {
    // Handle 401 Unauthorized - token expired or invalid
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("userType");
      if (typeof window !== "undefined") {
        window.location.href = routePaths.home;
      }
    }

    // Re-throw with better error message
    throw error instanceof Error
      ? error
      : new Error(error?.response?.data?.message || "API call failed");
  }
}

/**
 * Helper function to handle API errors consistently
 * @param {Error} error - Error object
 * @param {string} defaultMessage - Default error message
 * @throws {Error} Formatted error
 */
export const handleApiError = (error, defaultMessage) => {
  const message = error.response?.data?.message || error.message || defaultMessage;
  throw new Error(message);
};
