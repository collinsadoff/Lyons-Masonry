import React from 'react';
import Reveal from './Reveal';

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-brand-navy pt-32 pb-24 min-h-screen px-4 text-brand-cream">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 p-8 md:p-16 rounded-xl shadow-2xl backdrop-blur-md">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-cream mb-8 uppercase">Privacy Policy</h1>
          <p className="text-brand-silver text-sm mb-12 uppercase tracking-widest font-bold">Last Updated: May 2024</p>
          
          <div className="space-y-8 text-brand-cream/70 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-brand-cream mb-4 uppercase tracking-tight">1. Information We Collect</h2>
              <p>We collect information you provide directly to us through our estimate request form, contact form, and direct email communications. This may include your name, email address, phone number, and project details.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-cream mb-4 uppercase tracking-tight">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide, maintain, and improve our services.</li>
                <li>Process your estimate requests and respond to your comments and questions.</li>
                <li>Communicate with you about project updates and service offers.</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-cream mb-4 uppercase tracking-tight">3. Data Sharing</h2>
              <p>LyonsMasonry does not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-cream mb-4 uppercase tracking-tight">4. Security</h2>
              <p>We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-brand-cream mb-4 uppercase tracking-tight">5. Contact Us</h2>
              <p>If there are any questions regarding this privacy policy, you may contact us at estimates@lyonsmasonry.com.</p>
            </section>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default PrivacyPage;