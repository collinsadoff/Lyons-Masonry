import React from 'react';
import Button from './Button';
import Reveal from './Reveal';
import { Icon } from '@iconify/react';

interface CTAProps {
  onQuoteClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onQuoteClick }) => {
  return (
    <section className="py-12 bg-brand-cream px-4">
      <div className="max-w-7xl mx-auto relative rounded-xl overflow-hidden bg-brand-navy shadow-2xl">
         {/* Background Decoration */}
        <div className="absolute inset-0 z-0">
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-silver/20 rounded-full blur-[100px] opacity-30"></div>
             <img src="https://picsum.photos/id/235/1920/1080" className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale" alt="texture" />
        </div>

        <div className="relative z-10 px-6 py-20 md:py-32 text-center">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-brand-silver/30 bg-white/10 backdrop-blur-sm mb-8">
                    <Icon icon="solar:bolt-linear" className="text-brand-silver" width="14" />
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-cream">Fast Response</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-cream mb-6 leading-tight uppercase">
                    Ready to Upgrade <br/> Your Property?
                </h2>
                <p className="text-brand-cream/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                    Get a free, detailed estimate for your next masonry project. Quality craftsmanship is just a click away.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button 
                        onClick={onQuoteClick} 
                        variant="secondary" 
                        size="lg"
                        className="!bg-brand-cream !text-brand-navy !border-brand-cream hover:!bg-white min-w-[240px]"
                        icon={<Icon icon="solar:arrow-right-linear" width="20" />}
                    >
                        Get Your Free Quote
                    </Button>
                </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;