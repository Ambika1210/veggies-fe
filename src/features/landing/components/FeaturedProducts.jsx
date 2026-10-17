import React from 'react';
import { Plus, Minus, AlertCircle, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import { formatCurrency } from '../../../utils/formatters';
import { useCart } from '../../cart/hooks/useCart';
import { ProductCardSkeleton } from '../../../components/common/Skeleton';

const FeaturedProducts = ({
  products,
  loading,
  error,
  pagination,
  page,
  nextPage,
  prevPage,
  refetch,
}) => {
  const { cartItems, addToCart, updateQuantity } = useCart();

  const getItemQuantity = (productId) => {
    const item = cartItems.find((i) => i.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <section id="featured-products" className="py-10 bg-stone-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h2 className="text-2xl font-black text-stone-900 font-display tracking-tight">
              Products
            </h2>
            {pagination && pagination.total > 0 && (
              <p className="text-xs text-stone-500 mt-0.5">
                Total {pagination.total} items available
              </p>
            )}
          </div>

          {/* Pagination Controls */}
          {pagination && pagination.total > 0 && (
            <div className="flex items-center gap-3">
              <span className="text-xs text-stone-500 font-medium hidden sm:inline">
                Page <span className="font-bold text-stone-800">{page}</span> of {pagination.totalPages}
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={prevPage}
                  disabled={!pagination.hasPrevPage || loading}
                  className="p-2 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 hover:text-emerald-700 disabled:opacity-40 disabled:pointer-events-none transition shadow-xs"
                  title="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextPage}
                  disabled={!pagination.hasNextPage || loading}
                  className="p-2 rounded-xl bg-white border border-stone-200 hover:border-emerald-500 hover:text-emerald-700 disabled:opacity-40 disabled:pointer-events-none transition shadow-xs"
                  title="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-rose-50 border border-rose-200 text-rose-800 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-rose-600 flex-shrink-0" />
              <div>
                <p className="font-bold text-sm">Unable to connect to Veggies API server</p>
                <p className="text-xs text-rose-700/80">{error}</p>
              </div>
            </div>
            <button
              onClick={refetch}
              className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Retry Now
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          ) : products && products.length > 0 ? (
            products.map((product) => {
              const qty = getItemQuantity(product.id);
              const isAvailable = product.is_available !== false;

              return (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-stone-200 hover:border-emerald-400 p-4 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image */}
                    <div className="relative w-full h-48 rounded-xl overflow-hidden bg-stone-100 mb-3.5">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {!isAvailable && (
                        <div className="absolute inset-0 bg-stone-900/60 flex items-center justify-center">
                          <span className="text-white text-xs font-bold px-2.5 py-1 bg-stone-800 rounded-md">
                            Out of stock
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Product Name */}
                    <h3 className="font-bold text-stone-900 text-base line-clamp-2">
                      {product.name}
                    </h3>
                  </div>

                  {/* Price & Cart Actions footer */}
                  <div className="mt-4 pt-3.5 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-400 block leading-tight font-medium">Price</span>
                      <span className="text-lg font-black text-stone-900 font-display">
                        {formatCurrency(product.price)}
                      </span>
                    </div>

                    {/* Quantity Selector / Add to Cart Button */}
                    {!isAvailable ? (
                      <span className="text-xs text-stone-400 font-semibold">Unavailable</span>
                    ) : qty === 0 ? (
                      <button
                        onClick={() => addToCart(product, 1)}
                        className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white border border-emerald-300 hover:border-emerald-600 px-3.5 py-2 rounded-xl text-xs font-bold transition shadow-xs group/btn"
                      >
                        <Plus className="w-3.5 h-3.5 group-hover/btn:rotate-90 transition-transform" />
                        <span>ADD</span>
                      </button>
                    ) : (
                      <div className="inline-flex items-center bg-emerald-700 text-white rounded-xl shadow-xs overflow-hidden">
                        <button
                          onClick={() => updateQuantity(product.id, qty - 1)}
                          className="px-2.5 py-1.5 hover:bg-emerald-800 transition"
                          title="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-black select-none">{qty}</span>
                        <button
                          onClick={() => updateQuantity(product.id, qty + 1)}
                          className="px-2.5 py-1.5 hover:bg-emerald-800 transition"
                          title="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-dashed border-stone-300">
              <span className="text-4xl">🥦</span>
              <h3 className="text-lg font-bold text-stone-900 mt-2">No products found</h3>
            </div>
          )}
        </div>

        {/* Bottom Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={prevPage}
              disabled={!pagination.hasPrevPage || loading}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-xl text-xs font-bold text-stone-700 hover:border-emerald-500 hover:text-emerald-700 disabled:opacity-40 disabled:pointer-events-none transition shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <span className="text-xs font-bold text-stone-600 px-3 py-2 bg-stone-100 rounded-xl">
              Page {page} of {pagination.totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={!pagination.hasNextPage || loading}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-xl text-xs font-bold text-stone-700 hover:border-emerald-500 hover:text-emerald-700 disabled:opacity-40 disabled:pointer-events-none transition shadow-xs"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedProducts;
