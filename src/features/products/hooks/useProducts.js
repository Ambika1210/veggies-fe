import { useState, useEffect, useCallback } from 'react';
import { productService } from '../services/productService';

/**
 * Custom hook to fetch and manage product list state with pagination and search.
 * @param {Object} initialParams
 * @param {number} initialParams.page
 * @param {number} initialParams.limit
 * @param {string} initialParams.search
 */
export const useProducts = ({ initialPage = 1, initialLimit = 8, initialSearch = '' } = {}) => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: initialPage,
    limit: initialLimit,
    totalPages: 1,
    hasNextPage: false,
    hasPrevPage: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState(initialSearch);
  const [page, setPage] = useState(initialPage);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await productService.getAllProducts({
        page,
        limit: initialLimit,
        search,
      });

      if (response && response.success) {
        setProducts(response.data || []);
        if (response.pagination) {
          setPagination(response.pagination);
        }
      } else {
        setProducts(response?.data || []);
      }
    } catch (err) {
      console.error('Failed to load products:', err);
      setError(err?.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  }, [page, initialLimit, search]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
    setPage(1); // reset to page 1 on search
  };

  const nextPage = () => {
    if (pagination.hasNextPage) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (pagination.hasPrevPage) {
      setPage((prev) => Math.max(1, prev - 1));
    }
  };

  return {
    products,
    pagination,
    loading,
    error,
    search,
    page,
    setPage,
    handleSearch,
    nextPage,
    prevPage,
    refetch: fetchProducts,
  };
};
