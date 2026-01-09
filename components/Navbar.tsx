import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Button from './Button';
import { View } from '../App';

interface NavbarProps {
  onNavLinkClick: (view: View) => void;
  activeView: View;
}

const Navbar: React.FC<NavbarProps> = ({ onNavLinkClick, activeView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { name: string; view: View }[] = [
    { name: 'Home', view: 'home' },
    { name: 'Services', view: 'services' },
    { name: 'About', view: 'about' },
    { name: 'Service Area', view: 'area' },
    { name: 'Contact', view: 'contact' },
  ];

  const handleLinkClick = (view: View) => {
    onNavLinkClick(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] bg-brand-cream border-b border-brand-silver/30 shadow-sm py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo Container */}
          <div className="flex items-center h-full">
            <button 
              onClick={() => handleLinkClick('home')}
              className="flex items-center h-full group"
            >
              <img 
                src="Media/logo.png" 
                alt="Lyons Masonry" 
                className="h-14 md:h-18 w-auto object-contain transition-transform group-hover:scale-105 block"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.classList.remove('hidden');
                  if (fallback) fallback.classList.add('flex');
                }}
              />
              {/* Professional Text Fallback if Logo Fails */}
              <div className="hidden items-center gap-2">
                 <div className="p-2 bg-brand-navy rounded text-brand-cream">
                    <Icon icon="solar:sledgehammer-linear" width="20" />
                 </div>
                 <span className="text-xl md:text-2xl font-display font-bold text-brand-navy tracking-wider uppercase">
                   LYONS <span className="text-brand-silver">MASONRY</span>
                 </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleLinkClick(link.view)}
                className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors relative group ${
                  activeView === link.view 
                    ? 'text-brand-navy' 
                    : 'text-brand-navy/70 hover:text-brand-navy'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-silver transition-transform duration-300 ${activeView === link.view ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </button>
            ))}
            
            <Button 
                variant={activeView === 'quote' ? 'outline' : 'primary'} 
                size="sm"
                className={activeView === 'quote' ? 'opacity-50 cursor-default shadow-none' : 'shadow-md shadow-brand-navy/10'}
                onClick={() => activeView !== 'quote' && handleLinkClick('quote')}
                icon={activeView !== 'quote' ? <Icon icon="solar:arrow-right-linear" width="16" /> : undefined}
            >
              {activeView === 'quote' ? 'Estimate Portal' : 'Get Free Estimate'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-brand-navy"
            >
              {isMobileMenuOpen ? <Icon icon="solar:close-circle-linear" width="28" /> : <Icon icon="solar:hamburger-menu-linear" width="28" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-brand-cream border-t border-brand-silver/20 shadow-xl absolute w-full top-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.view)}
                className={`block w-full text-left px-3 py-4 text-base font-bold rounded-lg uppercase tracking-wide transition-colors ${
                  activeView === link.view ? 'text-brand-navy bg-brand-silver/10' : 'text-brand-navy/70 hover:text-brand-navy hover:bg-brand-silver/5'
                }`}
              >
                {link.name}
              </button>
            ))}
            <div className="pt-4 border-t border-brand-silver/20 flex flex-col space-y-3">
                <Button 
                    fullWidth 
                    onClick={() => handleLinkClick('quote')}
                    variant={activeView === 'quote' ? 'outline' : 'primary'}
                >
                    {activeView === 'quote' ? 'Project Portal' : 'Get Free Estimate'}
                </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;