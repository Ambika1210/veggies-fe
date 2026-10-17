import callApi, { handleApiError } from '../../../api/callApi';

/**
 * Fetch paginated list of products with optional search query.
 * @param {Object} params
 * @param {number} params.page - Current page number
 * @param {number} params.limit - Items per page
 * @param {string} params.search - Search keyword
 */
export const getAllProducts = async ({ page = 1, limit = 8, search = '' } = {}) => {
  try {
    const query = new URLSearchParams({ page: String(page), limit: String(limit) });
    if (search && search.trim() !== '') {
      query.append('search', search.trim());
    }

    const response = await callApi({
      endpoint: `products/get-all-products?${query.toString()}`,
      method: 'GET',
    });

    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to fetch products');
  }
};

/**
 * Fetch a single product by ID.
 * @param {number|string} id
 */
export const getProductById = async (id) => {
  try {
    const response = await callApi({
      endpoint: `products/${id}/get-product-detail`,
      method: 'GET',
    });

    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to fetch product details');
  }
};

/**
 * Create a new product (Admin / SuperAdmin only).
 * @param {Object} payload - { name, price, image, is_available }
 */
export const createProduct = async (payload) => {
  try {
    const response = await callApi({
      endpoint: 'products/create-product',
      method: 'POST',
      body: payload,
    });

    return response.data;
  } catch (error) {
    handleApiError(error, 'Failed to create product');
  }
};

export const productService = {
  getAllProducts,
  getProductById,
  createProduct,
};

export default productService;
