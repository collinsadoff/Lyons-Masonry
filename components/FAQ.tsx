import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Reveal from './Reveal';

const faqs = [
  {
    question: "Do you offer free estimates in Knoxville?",
    answer: "Yes, we provide free, no-obligation on-site estimates for all residential and commercial projects across Knoxville and surrounding areas. We'll assess your needs, discuss materials, and provide a detailed quote."
  },
  {
    question: "Are you licensed and insured for Tennessee?",
    answer: "Absolutely. LyonsMasonry is fully licensed in the state of Tennessee and carries comprehensive liability and worker's compensation insurance. We prioritize safety and professionalism on every Knoxville job site."
  },
  {
    question: "What specific areas do you serve?",
    answer: "We serve Knoxville, Farragut, Maryville, Oak Ridge, Sevierville, and surrounding counties. We cover a roughly 50-mile radius from Downtown Knoxville."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-brand-navy border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
             <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-brand-silver/30 bg-white/10 backdrop-blur-sm mb-6 shadow-sm">
                    <Icon icon="solar:question-circle-linear" className="text-brand-silver" width="14" />
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-silver">Q & A</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-cream uppercase tracking-tight">Knoxville Masonry FAQ</h2>
            </div>
        </Reveal>

        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <Reveal key={index} delay={index * 100}>
                    <div className={`bg-white/5 rounded-lg border transition-all duration-300 backdrop-blur-sm ${openIndex === index ? 'border-brand-silver shadow-xl' : 'border-white/10'}`}>
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                            <span className={`font-bold text-lg pr-8 transition-colors ${openIndex === index ? 'text-brand-cream' : 'text-brand-cream/60'}`}>
                                {faq.question}
                            </span>
                            <span className={`transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-brand-silver' : 'text-brand-cream/30'}`}>
                                <Icon icon="solar:alt-arrow-down-linear" width="24" />
                            </span>
                        </button>
                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="px-6 pb-6 text-brand-cream/60 leading-relaxed border-t border-white/10 pt-4 mt-2">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;