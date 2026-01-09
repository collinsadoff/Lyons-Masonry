import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import Features from './components/Features';
import Process from './components/Process';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import GoogleReviews from './components/GoogleReviews';
import FAQ from './components/FAQ';
import QuotePage from './components/QuotePage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ServiceAreaPage from './components/ServiceAreaPage';
import ContactPage from './components/ContactPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import { Icon } from '@iconify/react';

export type View = 'home' | 'services' | 'about' | 'area' | 'contact' | 'quote' | 'privacy' | 'terms';

const App: React.FC = () => {
  const [showStickyMobile, setShowStickyMobile] = useState(false);
  const [currentView, setCurrentView] = useState<View>('home');

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyMobile(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero onQuoteClick={() => navigateTo('quote')} />
            <SocialProof />
            <Services />
            <GoogleReviews />
            <Features />
            <Process />
            <Gallery />
            <CTA onQuoteClick={() => navigateTo('quote')} />
            <FAQ />
            <ContactForm />
          </>
        );
      case 'services':
        return <ServicesPage onQuoteClick={() => navigateTo('quote')} />;
      case 'about':
        return <AboutPage onQuoteClick={() => navigateTo('quote')} />;
      case 'area':
        return <ServiceAreaPage onQuoteClick={() => navigateTo('quote')} />;
      case 'contact':
        return <ContactPage onQuoteClick={() => navigateTo('quote')} />;
      case 'quote':
        return <QuotePage onBack={() => navigateTo('home')} />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return null;
    }
  };

  return (
    <main className="w-full relative">
      <Navbar 
        onNavLinkClick={navigateTo}
        activeView={currentView}
      />
      
      {renderView()}

      <Footer 
        onQuoteClick={() => navigateTo('quote')} 
        onNavLinkClick={navigateTo} 
      />

      {/* Sticky Mobile CTA - Show on Home and Content pages, hide on Quote page */}
      {currentView !== 'quote' && (
        <div 
          className={`fixed bottom-0 left-0 right-0 z-50 bg-brand-navy border-t border-brand-silver/20 p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.5)] md:hidden transition-transform duration-300 transform ${
            showStickyMobile ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <button 
            onClick={() => navigateTo('quote')}
            className="w-full bg-brand-cream text-brand-navy font-bold py-4 px-4 rounded-lg flex items-center justify-center text-sm uppercase tracking-[0.1em] shadow-lg active:scale-95 transition-all"
          >
            Get Free Estimate
            <Icon icon="solar:arrow-right-linear" width="18" className="ml-2" />
          </button>
        </div>
      )}
    </main>
  );
};

export default App;