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
    <section className="bg-brand-navy py-16 border-y border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 100}>
                <div className="text-center group p-6 md:p-8 rounded-xl bg-white/5 border border-white/10 hover:border-brand-silver transition-all duration-500 w-full h-full flex flex-col justify-center min-h-[140px] md:min-h-[160px] shadow-lg hover:shadow-xl backdrop-blur-sm hover:bg-white/10">
                    <div className="text-3xl md:text-5xl font-display font-bold text-brand-cream group-hover:text-brand-silver transition-colors duration-500 mb-3">
                        {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs font-bold text-brand-silver uppercase tracking-[0.2em] group-hover:text-brand-cream transition-colors leading-tight px-2">
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