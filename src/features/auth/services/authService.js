import callApi, { handleApiError } from '../../../api/callApi';

/**
 * Login user with credentials (email/mobile + password)
 * @param {Object} credentials - { email or mobile_number, password }
 */
export const login = async (credentials) => {
  try {
    const response = await callApi({
      endpoint: 'auth/login',
      method: 'POST',
      body: credentials,
    });

    // Store token and user data on successful login
    if (response.data?.token) {
      localStorage.setItem('token', response.data.token);
    }
    if (response.data?.user) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('userType', response.data.user.role || 'CUSTOMER');
    }

    return response.data;
  } catch (error) {
    handleApiError(error, 'Login failed. Please check your credentials.');
  }
};

/**
 * Register a new user
 * @param {Object} userData - { name, email, mobile_number, password }
 */
export const register = async (userData) => {
  try {
    const response = await callApi({
      endpoint: 'auth/register',
      method: 'POST',
      body: userData,
    });
    return response.data;
  } catch (error) {
    handleApiError(error, 'Registration failed.');
  }
};

/**
 * Logout current user
 */
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('userType');
};
