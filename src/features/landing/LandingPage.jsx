import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedProducts from './components/FeaturedProducts';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { useProducts } from '../products/hooks/useProducts';

const LandingPage = () => {
  const {
    products,
    pagination,
    loading,
    error,
    page,
    nextPage,
    prevPage,
    handleSearch,
    refetch,
  } = useProducts({ initialLimit: 8 });

  const handleScrollToProducts = () => {
    const el = document.getElementById('featured-products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8]">
      {/* Slide-over cart drawer */}
      <CartDrawer />

      {/* Top Navbar */}
      <Navbar onSearch={handleSearch} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onExploreClick={handleScrollToProducts} />

        {/* Live Products Grid connected to API */}
        <FeaturedProducts
          products={products}
          loading={loading}
          error={error}
          pagination={pagination}
          page={page}
          nextPage={nextPage}
          prevPage={prevPage}
          refetch={refetch}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
