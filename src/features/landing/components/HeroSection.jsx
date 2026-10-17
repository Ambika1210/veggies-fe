import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Clock, Award, CheckCircle2 } from 'lucide-react';
import Button from '../../../components/common/Button';
import Badge from '../../../components/common/Badge';

const HeroSection = ({ onExploreClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-emerald-50/60 via-stone-50 to-white">
      {/* Decorative background blur blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill tag */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300/80 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span>100% Certified Organic • Harvested at 5:00 AM Today</span>
            </div>

            {/* Main Catchy Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight font-display leading-[1.12]">
              Eat Fresh, Live Pure.{' '}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-800">
                Direct Farm to Kitchen
              </span>
              in Just 15 Minutes.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Skip the stale supermarket veggies. Taste crunchy bell peppers, tender spinach, and crisp herbs hand-harvested this morning by verified local organic farmers.
            </p>

            {/* Key Value checklist */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-1 text-xs sm:text-sm font-semibold text-stone-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Pesticides</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Cold-Chain Transit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Fair Price to Farmers</span>
              </div>
            </div>

            {/* CTA action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <Button
                size="lg"
                onClick={onExploreClick}
                className="w-full sm:w-auto text-base font-bold shadow-emerald-600/30 group"
              >
                <span>Shop Today's Harvest</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Trust stats row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-200/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-stone-900 font-display">100+</p>
                <p className="text-xs text-stone-500 font-medium">Farm Veggies</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-stone-900 font-display">15 Min</p>
                <p className="text-xs text-stone-500 font-medium">Average Delivery</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-stone-900 font-display">4.9/5</p>
                <p className="text-xs text-stone-500 font-medium">From 18k+ Families</p>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with floating organic cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main vegetable image frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-emerald-950">
                <img
                  src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&auto=format&fit=crop&q=80"
                  alt="Fresh farm organic vegetables basket"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                      Live Harvest Feed
                    </span>
                  </div>
                  <p className="text-lg font-bold">Today's Batch from Nashik Organic Valley</p>
                  <p className="text-xs text-stone-200">Inspected by agronomists • 0% Chemical Reside</p>
                </div>
              </div>

              {/* Floating Badge 1: 15-Minute Guaranteed */}
              <div className="absolute -top-5 -left-5 bg-white rounded-2xl p-3.5 shadow-xl border border-stone-100 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-900">15-Min Delivery</p>
                  <p className="text-[11px] text-stone-500">Chilled doorstep delivery</p>
                </div>
              </div>

              {/* Floating Badge 2: Organic Certified */}
              <div className="absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-emerald-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-xs font-bold text-stone-900">Purity Certified</p>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 rounded">Lab tested</span>
                  </div>
                  <p className="text-[11px] text-stone-500">100% Residue Free</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
