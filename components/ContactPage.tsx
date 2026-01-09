import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Reveal from './Reveal';
import Button from './Button';
import CustomSelect from './CustomSelect';

const ContactPage: React.FC<{ onQuoteClick: () => void }> = ({ onQuoteClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', service: 'General Inquiry', message: '' });
    }, 1500);
  };

  return (
    <div className="bg-brand-navy pt-24 min-h-screen text-brand-cream">
      <section className="py-24 relative overflow-hidden">
        {/* Background Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
              backgroundImage: `linear-gradient(#e3dad1 1px, transparent 1px), linear-gradient(90deg, #e3dad1 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div>
              <Reveal>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-brand-silver/30 bg-white/10 backdrop-blur-sm mb-6 shadow-sm">
                      <Icon icon="solar:chat-round-dots-linear" className="text-brand-silver" width="14" />
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-cream">Contact Us</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-brand-cream mb-6 uppercase tracking-tight leading-tight">Let's Build in <br/><span className="text-brand-silver">Knoxville.</span></h2>
                  <p className="text-brand-cream/60 text-lg mb-12 max-w-lg leading-relaxed">
                      Ready to start your project? We serve Knox, Blount, Anderson, and Sevier counties with dedicated craftsmanship. Our team typically responds via email within 24 business hours.
                  </p>

                  <div className="space-y-8">
                      <div className="flex items-start space-x-6 group">
                          <div className="bg-white/5 p-4 rounded-lg border border-white/10 group-hover:border-brand-silver transition-colors">
                              <Icon icon="solar:letter-bold" width="24" className="text-brand-silver" />
                          </div>
                          <div>
                              <h4 className="font-bold text-brand-cream text-lg mb-1 uppercase tracking-tight">Email Estimates</h4>
                              <p className="text-brand-silver text-lg">estimates@lyonsmasonry.com</p>
                              <p className="text-xs text-brand-cream/40 uppercase tracking-widest mt-1">Direct inquiries & project briefs</p>
                          </div>
                      </div>
                       <div className="flex items-start space-x-6 group">
                          <div className="bg-white/5 p-4 rounded-lg border border-white/10 group-hover:border-brand-silver transition-colors">
                              <Icon icon="solar:map-point-bold" width="24" className="text-brand-silver" />
                          </div>
                          <div>
                              <h4 className="font-bold text-brand-cream text-lg mb-1 uppercase tracking-tight">Service Area</h4>
                              <p className="text-brand-silver text-lg">Greater Knoxville, Farragut, Maryville & Oak Ridge</p>
                          </div>
                      </div>
                  </div>

                  <div className="mt-16 p-8 bg-brand-cream/5 rounded-xl border border-brand-silver/20">
                    <h4 className="text-brand-cream font-bold mb-4 flex items-center gap-2 uppercase tracking-tight">
                        <Icon icon="solar:star-bold" className="text-brand-silver" />
                        Need a formal quote?
                    </h4>
                    <p className="text-brand-cream/60 text-sm mb-6 leading-relaxed">
                        Our specialized estimate portal is designed for projects needing specific material counts and timeline forecasting.
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={onQuoteClick}
                      className="!border-brand-silver text-brand-silver"
                    >
                        Go to Quote Portal
                    </Button>
                  </div>
              </Reveal>
            </div>

            {/* Form */}
            <div className="bg-white/5 p-8 md:p-12 rounded-xl border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-md">
               <Reveal delay={200}>
                  {status === 'success' ? (
                      <div className="text-center py-20">
                          <div className="w-20 h-20 bg-brand-silver/10 rounded-full flex items-center justify-center mx-auto mb-6">
                              <Icon icon="solar:check-circle-bold" width="40" className="text-brand-silver" />
                          </div>
                          <h3 className="text-3xl font-display font-bold text-brand-cream mb-4 uppercase">Message Sent!</h3>
                          <p className="text-brand-cream/60 text-lg mb-8 leading-relaxed">We'll review your inquiry and email you within 24 business hours.</p>
                          <Button 
                              onClick={() => setStatus('idle')}
                              variant="outline"
                              className="!border-brand-silver text-brand-silver"
                          >
                              Send another message
                          </Button>
                      </div>
                  ) : (
                      <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                          <div>
                              <label className="block text-[10px] font-bold text-brand-silver mb-2 uppercase tracking-widest ml-1">Full Name</label>
                              <input 
                                  type="text" 
                                  name="name"
                                  required
                                  value={formData.name}
                                  onChange={handleChange}
                                  className="w-full px-5 py-4 bg-brand-navy border border-white/10 rounded-md text-white focus:border-brand-silver outline-none transition-all placeholder:text-white/10"
                                  placeholder="John Doe"
                              />
                          </div>

                          <div>
                              <label className="block text-[10px] font-bold text-brand-silver mb-2 uppercase tracking-widest ml-1">Email Address</label>
                              <input 
                                  type="email" 
                                  name="email"
                                  required
                                  value={formData.email}
                                  onChange={handleChange}
                                  className="w-full px-5 py-4 bg-brand-navy border border-white/10 rounded-md text-white focus:border-brand-silver outline-none transition-all placeholder:text-white/10"
                                  placeholder="john@example.com"
                              />
                          </div>

                          <CustomSelect 
                              label="Service Needed"
                              name="service"
                              darkVariant={true}
                              value={formData.service}
                              onChange={handleSelectChange}
                              options={['General Inquiry', 'Brick Masonry', 'Stone Work', 'Concrete / Pavers', 'Chimney Repair', 'Retaining Wall', 'Other']}
                          />

                          <div>
                              <label className="block text-[10px] font-bold text-brand-silver mb-2 uppercase tracking-widest ml-1">Message Details</label>
                              <textarea 
                                  name="message"
                                  rows={4}
                                  required
                                  value={formData.message}
                                  onChange={handleChange}
                                  className="w-full px-5 py-4 bg-brand-navy border border-white/10 rounded-md text-white focus:border-brand-silver outline-none transition-all placeholder:text-white/10 resize-none"
                                  placeholder="How can we help you?"
                              ></textarea>
                          </div>

                          <Button 
                              type="submit" 
                              fullWidth 
                              size="lg" 
                              disabled={status === 'submitting'}
                              className="!bg-brand-cream !text-brand-navy"
                          >
                              {status === 'submitting' ? 'Sending...' : 'Send Message'}
                          </Button>
                          <p className="text-[10px] text-center text-brand-cream/30 mt-4 uppercase tracking-[0.3em]">
                              Your information is secure and private.
                          </p>
                      </form>
                  )}
               </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;