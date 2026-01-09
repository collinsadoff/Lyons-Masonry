import React from 'react';
import { Icon } from '@iconify/react';
import Reveal from './Reveal';

const services = [
  {
    icon: 'solar:layers-minimalistic-linear',
    title: 'Heritage Brickwork',
    description: 'Expert bricklaying for Knoxville estates. We specialize in matching existing Tennessee brickwork for seamless additions and repairs.',
    badge: 'Core Service'
  },
  {
    icon: 'solar:wallpaper-linear',
    title: 'TN Fieldstone Hardscapes',
    description: 'Custom patios and walkways using locally sourced fieldstone and flagstone to complement the Smoky Mountain aesthetic.',
    badge: 'Popular'
  },
  {
    icon: 'solar:city-linear',
    title: 'Structural Masonry',
    description: 'Heavy-duty blockwork and foundations designed to handle East Tennessee\'s unique topography and clay soils.',
    badge: 'Structural'
  },
  {
    icon: 'solar:fire-linear',
    title: 'Chimney & Fireplaces',
    description: 'Custom outdoor fire pits and traditional chimney restoration, keeping Knoxville homes cozy and structurally sound.',
    badge: 'Specialty'
  },
  {
    icon: 'solar:magic-stick-3-linear',
    title: 'Historic Restoration',
    description: 'Specialized tuckpointing and restoration services for historic properties in Downtown Knoxville and Old North Knox.',
    badge: 'Expertise'
  },
  {
    icon: 'solar:sofa-2-linear',
    title: 'Outdoor Living',
    description: 'Luxury outdoor kitchens and seating walls designed for year-round enjoyment in the Tennessee valley.',
    badge: 'Luxury'
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
            backgroundImage: `linear-gradient(#052b4f 1px, transparent 1px), linear-gradient(90deg, #052b4f 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-brand-silver/30 bg-white/60 backdrop-blur-sm mb-6">
                        <Icon icon="solar:sledgehammer-linear" className="text-brand-silver" width="14" />
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-navy">Our Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-navy leading-tight">
                        Premium Masonry for <span className="text-brand-silver">East Tennessee</span>
                    </h2>
                </div>
                <p className="text-brand-navy/60 text-lg max-w-md text-right md:text-left leading-relaxed">
                    Quality craftsmanship built to last. We bring professional standards to every brick and stone project.
                </p>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 100}>
                <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl border border-brand-silver/20 hover:border-brand-navy transition-all duration-300 group relative overflow-hidden h-full flex flex-col shadow-sm hover:shadow-xl hover:shadow-brand-navy/5">
                    
                    <div className="flex justify-between items-start mb-8 relative z-10">
                         <div className="w-16 h-16 bg-brand-cream rounded-lg border border-brand-silver/20 flex items-center justify-center group-hover:bg-brand-navy group-hover:border-brand-navy transition-all duration-300 group-hover:scale-110">
                            <Icon icon={service.icon} width="32" className="text-brand-silver group-hover:text-brand-cream transition-colors" />
                        </div>
                        <span className="px-3 py-1 rounded-md bg-white border border-brand-silver/20 text-[10px] font-bold uppercase tracking-widest text-brand-silver group-hover:text-brand-navy transition-colors">
                            {service.badge}
                        </span>
                    </div>

                    <div className="relative z-10 flex-grow">
                        <h4 className="text-2xl font-bold text-brand-navy mb-4 font-display">{service.title}</h4>
                        <p className="text-brand-navy/70 leading-relaxed text-sm mb-8">
                            {service.description}
                        </p>
                    </div>

                    <div className="relative z-10 pt-6 border-t border-brand-silver/10 mt-auto">
                        <button 
                            className="inline-flex items-center text-brand-navy font-bold uppercase tracking-widest text-xs group/link hover:text-brand-silver transition-colors"
                        >
                            Get An Estimate
                            <Icon icon="solar:arrow-right-linear" className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                        </button>
                    </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;