import React from 'react';
import { Icon } from '@iconify/react';
import Reveal from './Reveal';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-cream relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-brand-silver/30 bg-white/60 backdrop-blur-sm mb-6">
                    <Icon icon="solar:star-fall-minimalistic-linear" className="text-brand-silver" width="14" />
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-navy">The Lyons Standard</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight text-brand-navy">
                    Uncompromising <span className="text-brand-silver">Quality.</span>
                </h2>
                <p className="text-brand-navy/70 text-lg mb-10 leading-relaxed">
                    We don't just build walls; we build legacies. Our team is dedicated to the highest standards of safety, durability, and aesthetic perfection.
                </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                    { icon: "solar:shield-check-linear", title: "Licensed & Insured", desc: "Full coverage for peace of mind." },
                    { icon: "solar:medal-star-linear", title: "Master Craftsmanship", desc: "Detail-oriented skilled artisans." },
                    { icon: "solar:clock-circle-linear", title: "On-Time Completion", desc: "We respect your schedule." },
                    { icon: "solar:crown-linear", title: "Premium Materials", desc: "Sourced for longevity." }
                ].map((item, idx) => (
                    <Reveal key={idx} delay={idx * 100}>
                        <div className="flex flex-col items-start p-6 rounded-xl bg-white/50 border border-brand-silver/20 hover:border-brand-navy transition-all duration-300 h-full group">
                            <div className="w-12 h-12 rounded-lg bg-brand-cream border border-brand-silver/20 flex items-center justify-center mb-4 text-brand-silver group-hover:bg-brand-navy group-hover:text-brand-cream transition-all">
                                <Icon icon={item.icon} width="24" />
                            </div>
                            <h4 className="text-lg font-bold font-display mb-2 text-brand-navy">{item.title}</h4>
                            <p className="text-brand-navy/60 text-sm">{item.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <Reveal direction="left" delay={200}>
                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-brand-silver/20 bg-white">
                    <img 
                        src="https://picsum.photos/id/1029/800/1000" 
                        alt="Mason working on stone wall" 
                        className="w-full h-auto object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                    />
                    {/* Floating Badge */}
                    <div className="absolute bottom-8 left-8 right-8 bg-brand-navy/95 backdrop-blur-xl p-6 rounded-lg border border-white/10 flex items-center gap-6">
                        <div className="text-brand-silver">
                             <Icon icon="solar:verified-check-bold" width="48" />
                        </div>
                        <div>
                            <p className="text-3xl font-display font-bold text-white">100%</p>
                            <p className="text-xs uppercase tracking-widest font-bold text-brand-silver">Satisfaction Guarantee</p>
                        </div>
                    </div>
                </div>
             </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;