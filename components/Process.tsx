import React from 'react';
import Reveal from './Reveal';
import { Icon } from '@iconify/react';

const steps = [
  {
    num: "01",
    title: "Request Estimate",
    desc: "Fill out our form or call us. We'll schedule a convenient time to visit your property.",
    icon: "solar:clipboard-list-linear"
  },
  {
    num: "02",
    title: "On-Site Evaluation",
    desc: "We assess the site, discuss materials, and provide a detailed, transparent quote.",
    icon: "solar:ruler-pen-linear"
  },
  {
    num: "03",
    title: "Precision Build",
    desc: "Our master masons get to work, maintaining a clean site and updating you on progress.",
    icon: "solar:layers-linear"
  },
  {
    num: "04",
    title: "Final Walkthrough",
    desc: "We inspect the work together to ensure every detail meets our rigorous standards.",
    icon: "solar:check-circle-linear"
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Decorative Grid */}
      <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
              backgroundImage: `linear-gradient(#e3dad1 1px, transparent 1px), linear-gradient(90deg, #e3dad1 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
          }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
             <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-brand-silver/30 bg-white/10 backdrop-blur-sm mb-6">
                    <Icon icon="solar:sort-from-top-to-bottom-linear" className="text-brand-silver" width="14" />
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-silver">How it Works</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-cream mb-4 uppercase">Simple & <span className="text-brand-silver">Transparent</span></h2>
            </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
                <Reveal key={idx} delay={idx * 150}>
                    <div className="relative p-8 bg-white/5 rounded-xl border border-white/10 hover:border-brand-silver transition-all duration-300 group h-full flex flex-col shadow-lg backdrop-blur-sm">
                        <div className="flex justify-between items-start mb-6">
                             <div className="text-sm font-bold text-brand-silver border border-white/10 rounded-md px-3 py-1 bg-brand-navy">
                                Step {step.num}
                            </div>
                            <Icon icon={step.icon} width="24" className="text-brand-silver/50 group-hover:text-brand-cream transition-colors" />
                        </div>
                        
                        <h4 className="text-xl font-bold text-brand-cream mb-4 font-display uppercase tracking-tight">{step.title}</h4>
                        <p className="text-brand-cream/60 text-sm leading-relaxed">{step.desc}</p>
                        
                        {idx !== steps.length - 1 && (
                            <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t-2 border-dashed border-white/10 z-10"></div>
                        )}
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;