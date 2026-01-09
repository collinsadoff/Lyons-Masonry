import React from 'react';
import { Icon } from '@iconify/react';
import Reveal from './Reveal';
import Button from './Button';

const areas = [
  {
    county: "Knox County",
    cities: ["Knoxville", "Farragut", "Sequoyah Hills", "Bearden", "Halls Crossroads"],
    desc: "Our primary hub. Specialists in Knoxville's architectural heritage styles."
  },
  {
    county: "Blount County",
    cities: ["Maryville", "Alcoa", "Walland", "Friendsville"],
    desc: "Crafting TN flagstone hardscapes that blend into the foothills landscape."
  },
  {
    county: "Anderson County",
    cities: ["Oak Ridge", "Clinton", "Norris"],
    desc: "Expert structural masonry and commercial-grade retaining solutions."
  },
  {
    county: "Sevier County",
    cities: ["Sevierville", "Pigeon Forge", "Seymour"],
    desc: "Premium outdoor living spaces at the Gateway of the Smokies."
  }
];

const ServiceAreaPage: React.FC<{ onQuoteClick: () => void }> = ({ onQuoteClick }) => {
  return (
    <div className="bg-brand-navy pt-24 min-h-screen text-brand-cream">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-24">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-cream mb-6 uppercase">
                Service <span className="text-brand-silver">Area</span>
              </h1>
              <p className="text-brand-cream/60 text-xl max-w-2xl mx-auto leading-relaxed font-light">
                Providing master masonry across the Greater Knoxville region and East Tennessee's most vibrant counties.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {areas.map((a, i) => (
              <Reveal key={a.county} delay={i * 100}>
                <div className="bg-white/5 backdrop-blur-sm p-10 rounded-xl border border-white/10 hover:border-brand-silver transition-all group h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-brand-navy flex items-center justify-center border border-white/10 text-brand-silver group-hover:scale-110 transition-transform">
                      <Icon icon="solar:map-point-bold" width="24" />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-brand-cream uppercase">{a.county}</h2>
                  </div>
                  <p className="text-brand-cream/60 mb-8 leading-relaxed italic">"{a.desc}"</p>
                  <div className="flex flex-wrap gap-2">
                    {a.cities.map(city => (
                      <span key={city} className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-brand-silver/50 group-hover:text-brand-cream transition-colors">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="bg-brand-silver/10 rounded-xl p-12 md:p-20 text-center relative overflow-hidden border border-brand-silver/20 backdrop-blur-md">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
               <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-cream mb-6 uppercase">Beyond These Counties?</h2>
               <p className="text-brand-cream/60 text-lg mb-10 max-w-xl mx-auto font-light leading-relaxed">
                 We frequently take on unique high-end projects across East Tennessee. Contact us to see if your property is within our extended service range.
               </p>
               <Button onClick={onQuoteClick} className="!bg-brand-cream !text-brand-navy hover:!bg-white" size="lg">
                 Inquire Today
               </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ServiceAreaPage;