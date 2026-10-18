import React, { useState } from 'react';
import { Search, Sparkles, MapPin, Zap, User, Menu, X } from 'lucide-react';

const Navbar = ({ onSearch, onCategorySelect }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-stone-200/70 transition-all duration-200">
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
          </div>

          {/* Right actions: Login */}
          <div className="flex items-center gap-3">
            {/* Sign in button */}
            <button
              onClick={() => alert('Authentication slice is scheduled in plan.md! SuperAdmin and User login views will be active shortly.')}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 text-sm font-semibold rounded-xl shadow-xs transition"
            >
              <User className="w-4 h-4" />
              Sign In
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
      </div>
    </header>
  );
};

export default Navbar;
