import React from 'react';
import { Icon } from '@iconify/react';
import Reveal from './Reveal';
import Button from './Button';

const ownerImg = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop';

const AboutPage: React.FC<{ onQuoteClick: () => void }> = ({ onQuoteClick }) => {

  return (
    <div className="bg-brand-cream pt-24 min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <Reveal direction="left">
              <div className="relative">
                <div className="w-full aspect-[4/5] bg-white rounded-xl overflow-hidden border border-brand-silver/20 shadow-2xl">
                  <img src={ownerImg} alt="LyonsMasonry Owner" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-brand-navy p-8 rounded-lg shadow-xl border-4 border-brand-cream">
                  <p className="text-4xl font-display font-bold text-white">25+</p>
                  <p className="text-xs uppercase tracking-widest text-brand-silver font-bold">Years of Trust</p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-navy mb-8 uppercase leading-[0.9]">
                  Built on <span className="text-brand-silver">Integrity.</span>
                </h1>
                <p className="text-brand-navy/70 text-xl leading-relaxed mb-8">
                  LyonsMasonry was founded in Knoxville with a simple mission: to provide the highest quality masonry work with absolute transparency. 
                </p>
                <p className="text-brand-navy/60 text-lg leading-relaxed mb-12">
                  As a locally owned business, we understand that our work is part of the community's fabric. Whether we're restoring a historic chimney in North Knoxville or building a new terrace in Farragut, our commitment to Tennessee-grade durability remains unchanged.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-12">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/60 border border-brand-silver/20 shadow-sm">
                    <Icon icon="solar:shield-check-bold" className="text-brand-silver" width="32" />
                    <div>
                      <p className="text-brand-navy font-bold text-sm">Licensed</p>
                      <p className="text-brand-navy/50 text-[10px] uppercase font-bold">State of TN</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-white/60 border border-brand-silver/20 shadow-sm">
                    <Icon icon="solar:verified-check-bold" className="text-brand-silver" width="32" />
                    <div>
                      <p className="text-brand-navy font-bold text-sm">Insured</p>
                      <p className="text-brand-navy/50 text-[10px] uppercase font-bold">Full Coverage</p>
                    </div>
                  </div>
                </div>

                <Button onClick={onQuoteClick} size="lg" icon={<Icon icon="solar:arrow-right-linear" />}>
                  Start Your Project
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;