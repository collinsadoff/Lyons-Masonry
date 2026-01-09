import React from 'react';
import { Icon } from '@iconify/react';
import { View } from '../App';

interface FooterProps {
  onQuoteClick: () => void;
  onNavLinkClick: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onQuoteClick, onNavLinkClick }) => {
  return (
    <footer className="bg-brand-navy text-brand-cream/80 py-20 border-t border-brand-navy relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center mb-8">
                <button onClick={() => onNavLinkClick('home')} className="flex items-center transition-transform hover:scale-105">
                  <img 
                    src="Media/logo.png" 
                    alt="Lyons Masonry" 
                    className="h-20 w-auto object-contain" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden flex flex-col">
                    <span className="text-2xl font-bold font-display uppercase tracking-wider text-white">
                      LYONS<span className="text-brand-silver">MASONRY</span>
                    </span>
                    <span className="text-[10px] text-brand-silver font-bold uppercase tracking-widest">Built for Lifetimes</span>
                  </div>
                </button>
            </div>
            <p className="text-sm leading-relaxed mb-8 text-brand-cream/60 max-w-xs">
                Premium Knoxville craftsmanship built for durability and prestige. East Tennessee's trusted choice for heritage restoration and modern masonry architecture.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-brand-silver/20"><Icon icon="mdi:facebook" width="20" /></a>
                <a href="#" className="hover:text-white transition-colors p-3 bg-white/5 rounded-full hover:bg-brand-silver/20"><Icon icon="mdi:instagram" width="20" /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-brand-silver font-bold uppercase tracking-[0.2em] text-xs mb-8">Explore</h4>
            <ul className="space-y-4 text-sm font-medium">
                <li><button onClick={() => onNavLinkClick('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => onNavLinkClick('services')} className="hover:text-white transition-colors">Our Services</button></li>
                <li><button onClick={() => onNavLinkClick('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => onNavLinkClick('area')} className="hover:text-white transition-colors">Service Area</button></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-brand-silver font-bold uppercase tracking-[0.2em] text-xs mb-8">Specialties</h4>
            <ul className="space-y-4 text-sm font-medium">
                <li><button onClick={() => onNavLinkClick('services')} className="hover:text-white transition-colors">Heritage Brick</button></li>
                <li><button onClick={() => onNavLinkClick('services')} className="hover:text-white transition-colors">Custom Stone</button></li>
                <li><button onClick={() => onNavLinkClick('services')} className="hover:text-white transition-colors">Structural Masonry</button></li>
                <li><button onClick={() => onNavLinkClick('services')} className="hover:text-white transition-colors">Outdoor Fireplaces</button></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
             <h4 className="text-brand-silver font-bold uppercase tracking-[0.2em] text-xs mb-8">Contact</h4>
             <address className="not-italic space-y-4 text-sm font-medium">
                <p>Greater Knoxville Area<br />Tennessee, United States</p>
                <p><a href="mailto:estimates@lyonsmasonry.com" className="text-brand-cream hover:text-white transition-colors font-bold underline decoration-brand-silver underline-offset-4">estimates@lyonsmasonry.com</a></p>
                <div className="pt-4">
                  <button onClick={() => onNavLinkClick('quote')} className="text-brand-silver font-bold uppercase tracking-[0.2em] text-[10px] hover:text-white transition-all flex items-center gap-2 group text-left">
                    Get Free Estimate
                    <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
             </address>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-brand-cream/40">
            <p>&copy; {new Date().getFullYear()} LyonsMasonry. Craftsmanship for Generations.</p>
            <div className="flex space-x-8 mt-6 md:mt-0 font-bold">
                <button onClick={() => onNavLinkClick('privacy')} className="hover:text-brand-cream transition-colors">Privacy</button>
                <button onClick={() => onNavLinkClick('terms')} className="hover:text-brand-cream transition-colors">Terms</button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;