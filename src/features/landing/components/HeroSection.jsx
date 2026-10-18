import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Button from '../../../components/common/Button';

const HeroSection = ({ onExploreClick }) => {
  return (
    <section className="relative overflow-hidden py-5 sm:py-6 lg:py-8 bg-gradient-to-b from-emerald-50/50 via-stone-50/40 to-white border-b border-stone-200/50">
      {/* Decorative background blur blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-amber-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">

          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 space-y-3.5 text-center lg:text-left">

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-900 tracking-tight font-display leading-tight">
              Eat Fresh, Live Pure.{' '}
              <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800">
                Direct Farm to Kitchen
              </span>
              {' '}in 15 Mins.
            </h1>

            {/* Concise Description */}
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Skip stale supermarket veggies. Taste crunchy bell peppers, tender spinach, and herbs hand-harvested this morning by verified local organic farmers.
            </p>

            {/* Value checklist & CTA Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <Button
                size="sm"
                onClick={onExploreClick}
                className="text-xs sm:text-sm font-bold shadow-emerald-600/20 group py-2 px-4.5"
              >
                <span>Shop Today's Harvest</span>
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex items-center gap-3 text-xs font-semibold text-stone-700">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Zero Pesticides
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  15-Min Delivery
                </span>
                <span className="hidden sm:flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Fair Prices
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Compact Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-emerald-950">
                <img
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&auto=format&fit=crop&q=80"
                  alt="Fresh farm organic vegetables basket"
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
