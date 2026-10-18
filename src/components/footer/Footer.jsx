import React from 'react';
import { Heart, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 flex items-center justify-center text-white text-xl">
                🥦
              </div>
              <span className="text-2xl font-black text-white tracking-tight font-display">
                Veggies<span className="text-emerald-500">.</span>
              </span>
            </div>
            
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              India's premier 15-minute farm-to-doorstep grocery delivery. Empowering regional organic farmers while delivering unadulterated greens to your family.
            </p>

            <div className="flex items-center gap-4 text-xs text-stone-400 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                FSSAI Certified
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                NPOP Organic
              </span>
            </div>
          </div>

          {/* Column 1: Fresh Produce */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-display">
              Harvest Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><a href="#featured-products" className="hover:text-emerald-400 transition">Leafy Greens & Palak</a></li>
              <li><a href="#featured-products" className="hover:text-emerald-400 transition">Exotic Herbs & Microgreens</a></li>
              <li><a href="#featured-products" className="hover:text-emerald-400 transition">Roots, Onions & Potatoes</a></li>
              <li><a href="#featured-products" className="hover:text-emerald-400 transition">Crisp Bell Peppers & Chilies</a></li>
              <li><a href="#featured-products" className="hover:text-emerald-400 transition">Salad & Detox Bundles</a></li>
            </ul>
          </div>

          {/* Column 2: Farmers & Mission */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-display">
              Our Movement
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><span className="text-stone-400">The 5:00 AM Harvest Cycle</span></li>
              <li><span className="text-stone-400">Meet Our 40+ Organic Farmers</span></li>
              <li><span className="text-stone-400">Lab Residue Test Reports</span></li>
              <li><span className="text-stone-400">Zero-Waste Cold-Chain</span></li>
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-display">
              Support & Delivery
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>1800-VEG-FRESH</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>support@veggies.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Delhi, Noida, Gurgaon, Ghaziabad</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Veggies Technologies Pvt Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for healthy households.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
