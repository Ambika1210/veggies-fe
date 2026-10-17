import React, { useState } from 'react';
import { ShoppingBag, Search, Sparkles, MapPin, Zap, User, Menu, X } from 'lucide-react';
import { useCart } from '../../cart/hooks/useCart';
import { formatCurrency } from '../../../utils/formatters';

const Navbar = ({ onSearch, onCategorySelect }) => {
  const { totalItemsCount, subtotal, setIsCartOpen } = useCart();
  const [searchInput, setSearchInput] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchInput);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-stone-200/70 transition-all duration-200">
      {/* Top micro-announcement banner */}
      <div className="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
              Morning Harvest
            </span>
            <span className="hidden sm:inline text-emerald-50">
              Fresh veggies picked today at 5:00 AM • 100% Pesticide-Free Guarantee!
            </span>
            <span className="sm:hidden text-emerald-50">
              Fresh 5:00 AM Harvest Delivered in 15 Mins
            </span>
          </div>
          <div className="flex items-center gap-4 text-emerald-100 text-xs">
            <span className="hidden md:flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              15-Min Fast Delivery
            </span>
            <span className="text-white font-medium cursor-pointer hover:underline">
              Call Support: 1800-VEG-FRESH
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo & Location */}
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30 group-hover:scale-105 transition-transform">
                <span className="text-2xl select-none">🥦</span>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-stone-900 font-display flex items-center gap-1">
                  Veggies<span className="text-emerald-600">.</span>
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-emerald-600 uppercase block -mt-1">
                  Farm to Table
                </span>
              </div>
            </a>

            {/* Hyperlocal location pill */}
            <div className="hidden lg:flex items-center gap-2 bg-stone-100/80 hover:bg-stone-100 px-3.5 py-1.5 rounded-full border border-stone-200/80 text-xs text-stone-700 cursor-pointer transition">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <div>
                <span className="font-bold text-stone-900 block leading-tight">Deliver in 15 Mins</span>
                <span className="text-stone-500 text-[11px] truncate max-w-[140px] block">Indirapuram, Sector 4...</span>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-lg hidden md:block">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search 'organic spinach', 'avocado', 'fresh basil'..."
                className="w-full pl-11 pr-24 py-2.5 bg-stone-100/90 hover:bg-stone-100 focus:bg-white text-stone-900 text-sm rounded-full border border-stone-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition shadow-sm"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right actions: Login & Cart */}
          <div className="flex items-center gap-3">
            {/* Sign in button */}
            <button
              onClick={() => alert('Authentication slice is scheduled in plan.md! SuperAdmin and User login views will be active shortly.')}
              className="hidden sm:flex items-center gap-2 text-stone-700 hover:text-emerald-700 px-3.5 py-2 text-sm font-semibold rounded-xl hover:bg-stone-100 transition"
            >
              <User className="w-4 h-4" />
              Sign In
            </button>

            {/* Cart trigger button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-3 bg-stone-900 hover:bg-stone-800 active:scale-95 text-white px-4 py-2.5 rounded-xl shadow-md transition group"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                {totalItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-emerald-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-stone-900 animate-pulse">
                    {totalItemsCount}
                  </span>
                )}
              </div>
              <div className="text-left hidden sm:block">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-semibold leading-none">
                  Cart
                </span>
                <span className="text-xs font-bold text-emerald-400 leading-tight">
                  {totalItemsCount > 0 ? formatCurrency(subtotal) : '0 items'}
                </span>
              </div>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-stone-600 hover:bg-stone-100 md:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="pb-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search 100+ fresh vegetables..."
              className="w-full pl-10 pr-20 py-2 bg-stone-100 text-stone-900 text-sm rounded-xl border border-stone-200 focus:border-emerald-500 outline-none"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-lg"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
