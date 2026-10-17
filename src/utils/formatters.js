/**
 * Formats a numeric value or string as Indian Rupee (INR) currency.
 * @param {number|string} amount
 * @returns {string} e.g. "₹45.00"
 */
export const formatCurrency = (amount) => {
  const numeric = typeof amount === 'number' ? amount : parseFloat(amount) || 0;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(numeric);
};

/**
 * Truncate long text with ellipsis.
 */
export const truncateText = (text, maxLength = 60) => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};
