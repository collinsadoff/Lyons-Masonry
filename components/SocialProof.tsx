import React from 'react';
import Reveal from './Reveal';

const stats = [
  { label: 'Years in Business', value: '25+' },
  { label: 'Projects Completed', value: '1,200+' },
  { label: '5-Star Reviews', value: '500+' },
  { label: 'Satisfaction Guaranteed', value: '100%' },
];

const SocialProof: React.FC = () => {
  return (
    <section className="bg-brand-cream py-16 border-y border-brand-silver/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-stretch">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 100} className="h-full flex">
                <div className="text-center group p-8 rounded-xl bg-white/40 border border-brand-silver/20 hover:border-brand-navy transition-all duration-500 w-full h-full flex flex-col justify-center min-h-[160px] shadow-sm hover:shadow-md">
                    <div className="text-3xl md:text-5xl font-display font-bold text-brand-silver group-hover:text-brand-navy transition-colors duration-500">
                        {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs font-bold text-brand-navy uppercase tracking-[0.2em] mt-3 group-hover:text-brand-silver transition-colors leading-tight">
                        {stat.label}
                    </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;