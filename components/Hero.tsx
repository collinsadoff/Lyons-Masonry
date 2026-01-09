import React from 'react';
import { Icon } from '@iconify/react';
import Button from './Button';
import Reveal from './Reveal';

interface HeroProps {
  onQuoteClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onQuoteClick }) => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-cream">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590059393043-4e365e777651?q=80&w=2000&auto=format&fit=crop" 
          alt="Premium Knoxville Masonry Work" 
          className="w-full h-full object-cover opacity-30"
        />
        {/* Subtle Cream Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-cream via-brand-cream/80 to-transparent"></div>
        
        {/* Decorative Grid */}
        <div 
            className="absolute inset-0 opacity-[0.1] pointer-events-none"
            style={{
                backgroundImage: `linear-gradient(#052b4f 1px, transparent 1px), linear-gradient(90deg, #052b4f 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
            }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-brand-silver/30 bg-white/50 backdrop-blur-sm mb-6 shadow-sm">
                    <Icon icon="solar:medal-star-linear" className="text-brand-silver" width="14" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">East Tennessee's Masonry Experts</span>
                </div>
            </Reveal>

            <Reveal delay={100}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-brand-navy leading-[0.9] mb-8 uppercase">
                    BUILT FOR <span className="text-brand-silver">LIFETIMES.</span><br />
                    CRAFTED WITH <span className="text-brand-navy/60">PRIDE.</span>
                </h1>
            </Reveal>

            <Reveal delay={200}>
                <p className="text-xl md:text-2xl text-brand-navy/70 mb-10 font-light leading-relaxed max-w-xl border-l-2 border-brand-silver pl-6">
                    Professional brickwork, stone veneer, and architectural hardscapes. LyonsMasonry: Where quality meets Knoxville heritage.
                </p>
            </Reveal>

            <Reveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      onClick={onQuoteClick} 
                      size="lg" 
                      variant="primary"
                      className="shadow-xl shadow-brand-navy/10"
                      icon={<Icon icon="solar:arrow-right-linear" width="20" />}
                    >
                      Get Free Estimate
                    </Button>
                    <Button 
                      onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} 
                      size="lg" 
                      variant="outline"
                      className="!border-brand-silver text-brand-navy hover:!bg-brand-silver/10"
                    >
                      View Services
                    </Button>
                </div>
            </Reveal>
            
            <Reveal delay={400}>
                <div className="mt-16 flex flex-wrap items-center gap-4 text-brand-navy/50 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/40 border border-brand-silver/20 backdrop-blur-md">
                        <Icon icon="solar:shield-check-linear" width="16" className="text-brand-silver" />
                        Licensed & Insured
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/40 border border-brand-silver/20 backdrop-blur-md">
                        <Icon icon="solar:verified-check-linear" width="16" className="text-brand-silver" />
                        Knoxville's Best Guarantee
                    </div>
                </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;