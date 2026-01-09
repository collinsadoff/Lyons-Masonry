import React from 'react';
import Reveal from './Reveal';

const TermsPage: React.FC = () => {
  return (
    <div className="bg-brand-navy pt-32 pb-24 min-h-screen px-4 text-brand-cream">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 md:p-16 rounded-xl shadow-2xl backdrop-blur-md">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-cream mb-8 uppercase">Terms of Service</h1>
          <p className="text-brand-silver text-sm mb-12 uppercase tracking-widest font-bold">Last Updated: May 2024</p>
          
          <div className="space-y-8 text-brand-cream/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-brand-cream mb-4 uppercase tracking-tight">1. Acceptance of Terms</h2>
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-cream mb-4 uppercase tracking-tight">2. Estimates & Quotes</h2>
              <p>Estimates provided through this website are preliminary and subject to change based on on-site evaluation, material price fluctuations, and final project specifications. A signed contract is required to lock in pricing and scheduling.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-cream mb-4 uppercase tracking-tight">3. Licensing & Insurance</h2>
              <p>LyonsMasonry is a licensed and insured contractor in the State of Tennessee. We comply with all local building codes and safety regulations.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-cream mb-4 uppercase tracking-tight">4. Intellectual Property</h2>
              <p>All content on this website, including project photos, text, and logos, is the property of LyonsMasonry and may not be reproduced without explicit written permission.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-cream mb-4 uppercase tracking-tight">5. Limitation of Liability</h2>
              <p>LyonsMasonry shall not be liable for any indirect, incidental, or consequential damages resulting from the use of this website or any information provided herein.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-cream mb-4 uppercase tracking-tight">6. Governing Law</h2>
              <p>This agreement shall be governed by the laws of the State of Tennessee.</p>
            </section>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default TermsPage;