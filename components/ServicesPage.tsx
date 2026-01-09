import React from 'react';
import { Icon } from '@iconify/react';
import Reveal from './Reveal';
import Button from './Button';

interface ServiceDetail {
  id: string;
  title: string;
  desc: string;
  image: string;
  points: string[];
}

const services: ServiceDetail[] = [
  {
    id: "brick",
    title: "Heritage Brick Masonry",
    desc: "Knoxville's most reliable brickwork. We handle new builds, historical repairs, and intricate custom patterns.",
    image: "https://images.unsplash.com/photo-1590059393043-4e365e777651?w=1200&h=750&fit=crop",
    points: ["Historical color matching", "Tuckpointing & repair", "Custom entryways", "Structural brickwork"]
  },
  {
    id: "stone",
    title: "Tennessee Fieldstone",
    desc: "Custom stone solutions using local Tennessee fieldstone and flagstone for an authentic regional look.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=750&fit=crop",
    points: ["Natural stone patios", "Stacked stone walls", "Flagstone walkways", "Stone veneer siding"]
    },
  {
    id: "structural",
    title: "Structural Masonry",
    desc: "Foundation-grade blockwork and retaining walls engineered for Knoxville's rolling terrain and clay soils.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&h=750&fit=crop",
    points: ["Engineered retaining walls", "CMU block foundations", "Basement waterproof masonry", "Site preparation"]
  },
  {
    id: "fire",
    title: "Fireplaces & Chimneys",
    desc: "Professional chimney restoration and custom outdoor fire feature design for East Tennessee homes.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=750&fit=crop",
    points: ["Chimney rebuilds", "Outdoor fire pits", "Indoor stone hearths", "Flue & liner repairs"]
  }
];

const ServicesPage: React.FC<{ onQuoteClick: () => void }> = ({ onQuoteClick }) => {

  return (
    <div className="bg-brand-navy pt-24 min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-cream mb-6 uppercase">
                Masonry <span className="text-brand-silver">Services</span>
              </h1>
              <p className="text-brand-cream/60 text-xl max-w-2xl mx-auto leading-relaxed font-light">
                From historic brick restoration to modern luxury hardscapes, we provide Knoxville's most trusted masonry craftsmanship.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-24">
            {services.map((s, idx) => (
              <Reveal key={s.id} direction={idx % 2 === 0 ? 'left' : 'right'}>
                <div className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 w-full aspect-[16/10] bg-white/5 rounded-xl overflow-hidden border border-white/10 relative shadow-2xl">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="lg:w-1/2">
                    <h2 className="text-4xl font-display font-bold text-brand-cream mb-6 uppercase">{s.title}</h2>
                    <p className="text-brand-cream/60 text-lg mb-8 leading-relaxed">{s.desc}</p>
                    <ul className="grid grid-cols-2 gap-4 mb-10">
                      {s.points.map(p => (
                        <li key={p} className="flex items-center gap-2 text-brand-cream/80 text-sm font-medium">
                          <Icon icon="solar:check-circle-bold" className="text-brand-silver" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={onQuoteClick} 
                      icon={<Icon icon="solar:arrow-right-linear" />}
                      className="!bg-brand-cream !text-brand-navy"
                    >
                      Estimate for {s.title}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;