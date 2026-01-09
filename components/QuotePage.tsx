import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Button from './Button';
import Reveal from './Reveal';
import CustomSelect from './CustomSelect';
import GoogleReviews from './GoogleReviews';
import FAQ from './FAQ';

interface QuotePageProps {
  onBack: () => void;
}

const QuotePage: React.FC<QuotePageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: 'Brick Masonry',
    timeline: 'Within 1 Month',
    budget: 'Not Sure',
    details: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-brand-navy flex items-center justify-center p-4 pt-32">
        <Reveal>
          <div className="max-w-md w-full text-center bg-white/5 p-12 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-0 inset-x-0 h-1 bg-brand-silver"></div>
            <div className="w-24 h-24 bg-brand-silver/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Icon icon="solar:check-circle-bold" className="text-brand-silver" width="48" />
            </div>
            <h2 className="text-4xl font-display font-bold text-brand-cream mb-4 uppercase tracking-tight">Request Received!</h2>
            <p className="text-brand-cream/60 mb-8 leading-relaxed">
              We will review your project specs and contact you via email within 24 business hours.
            </p>
            <Button onClick={onBack} fullWidth size="lg" className="!bg-brand-cream !text-brand-navy">Return to Home</Button>
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="bg-brand-navy flex flex-col pt-[72px]">
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-72px)]">
        
        {/* Left Side: Brand Context */}
        <div className="lg:w-2/5 bg-white/5 p-8 lg:p-20 border-r border-white/5 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-silver/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-brand-silver/20 bg-brand-silver/10 mb-10">
              <div className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-silver opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-silver"></span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-silver">Accepting 2025 Projects</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-display font-bold text-brand-cream mb-8 leading-[0.9] tracking-tight uppercase">
              The <span className="text-brand-silver">Standard</span> <br />
              of Quality.
            </h1>
            
            <p className="text-brand-cream/60 text-xl mb-12 leading-relaxed max-w-md border-l-2 border-brand-silver/30 pl-8 font-light">
              Secure your place with East Tennessee's master craftsmen. Our estimates provide absolute clarity on timeline, materials, and durability.
            </p>

            <div className="space-y-8 mb-16">
              {[
                { icon: "solar:shield-star-bold", title: "Master Craftsmanship", text: "Detail-oriented masonry using premium local stone." },
                { icon: "solar:ranking-bold", title: "Transparent Quoting", text: "Fixed pricing for structural and decorative work." },
                { icon: "solar:history-bold", title: "Heritage Built", text: "Restoring the beauty of historic Knoxville properties." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-lg bg-brand-navy border border-white/10 flex items-center justify-center text-brand-silver group-hover:scale-110 transition-transform duration-300">
                    <Icon icon={item.icon} width="24" />
                  </div>
                  <div>
                    <h4 className="text-brand-cream font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-xs text-brand-cream/40 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right Side: Quote Form */}
        <div className="lg:w-3/5 p-8 lg:p-24 bg-brand-navy relative flex flex-col justify-center">
           <div className="max-w-3xl mx-auto w-full relative z-10">
              <Reveal delay={200}>
                <div className="mb-12">
                   <h3 className="text-sm font-bold text-brand-silver/40 uppercase tracking-[0.3em] mb-2">Estimate Request</h3>
                   <div className="flex items-center gap-4">
                      <div className="h-1.5 w-32 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-brand-silver"></div>
                      </div>
                      <span className="text-[10px] font-bold text-brand-cream uppercase tracking-widest">Specifications Form</span>
                   </div>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                   <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 p-8 rounded-xl border border-white/5 shadow-inner">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-silver uppercase tracking-[0.2em] ml-1">First Name</label>
                        <input 
                          type="text" name="firstName" required 
                          onChange={handleInputChange}
                          className="w-full bg-brand-navy border border-white/10 rounded-md px-6 py-4 text-white focus:border-brand-silver outline-none transition-all placeholder:text-white/10"
                          placeholder="Alexander"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-brand-silver uppercase tracking-[0.2em] ml-1">Last Name</label>
                        <input 
                          type="text" name="lastName" required 
                          onChange={handleInputChange}
                          className="w-full bg-brand-navy border border-white/10 rounded-md px-6 py-4 text-white focus:border-brand-silver outline-none transition-all placeholder:text-white/10"
                          placeholder="Hamilton"
                        />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-[10px] font-bold text-brand-silver uppercase tracking-[0.2em] ml-1">Email Address</label>
                        <input 
                          type="email" name="email" required 
                          onChange={handleInputChange}
                          className="w-full bg-brand-navy border border-white/10 rounded-md px-6 py-4 text-white focus:border-brand-silver outline-none transition-all placeholder:text-white/10"
                          placeholder="alex@example.com"
                        />
                      </div>
                   </div>

                   <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                      <CustomSelect 
                        label="Primary Service" name="projectType" darkVariant={true}
                        value={formData.projectType}
                        onChange={(val) => handleSelectChange('projectType', val)}
                        options={['Brick Masonry', 'Stone Hardscape', 'Retaining Wall', 'Restoration', 'Outdoor Living']}
                      />
                      <CustomSelect 
                        label="Priority Timeline" name="timeline" darkVariant={true}
                        value={formData.timeline}
                        onChange={(val) => handleSelectChange('timeline', val)}
                        options={['Immediately', 'Within 1 Month', '1-3 Months', 'Planning Phase']}
                      />
                      <CustomSelect 
                        label="Budget Range" name="budget" darkVariant={true}
                        value={formData.budget}
                        onChange={(val) => handleSelectChange('budget', val)}
                        options={['Under $5k', '$5k - $15k', '$15k - $50k', '$50k+', 'Not Sure']}
                      />
                   </div>

                   <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-bold text-brand-silver uppercase tracking-[0.2em] ml-1">Detailed Project Brief</label>
                      <textarea 
                        name="details" rows={5} onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-8 py-6 text-white focus:border-brand-silver outline-none transition-all resize-none placeholder:text-white/10"
                        placeholder="Project dimensions and material preferences..."
                      ></textarea>
                   </div>

                   <div className="md:col-span-2 flex flex-col items-center gap-6 mt-4">
                      <Button type="submit" fullWidth size="lg" className="h-[72px] !bg-brand-cream !text-brand-navy hover:!bg-white">
                        Submit Estimate Request
                      </Button>
                      <div className="flex items-center gap-3 text-brand-silver/30">
                        <Icon icon="solar:lock-bold" width="14" />
                        <span className="text-[10px] uppercase tracking-[0.3em]">Secure Data Transmission</span>
                      </div>
                   </div>
                </form>
              </Reveal>
           </div>
        </div>
      </div>

      <GoogleReviews />
      <FAQ />
    </div>
  );
};

export default QuotePage;