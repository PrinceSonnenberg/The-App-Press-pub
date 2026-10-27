import React from 'react';
import { Link } from 'react-router-dom';

const Icon = ({ name, className = "", style }: { name: string, className?: string, style?: React.CSSProperties }) => (
  <span className={`material-symbols-outlined ${className}`} style={{ fontVariationSettings: "'FILL' 1", ...style }}>
    {name}
  </span>
);

export default function Pricing() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col font-sans selection:bg-primary-container selection:text-on-primary-container">
      <header className="flex justify-between items-center w-full px-6 lg:px-12 py-6 bg-surface/80 backdrop-blur-md sticky top-0 z-50 text-on-surface border-b border-surface-container-low">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold font-headline tracking-tight text-primary hover:text-primary-container transition-colors">The App Press</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-sm font-label font-medium text-on-surface-variant hover:text-primary transition-colors">Platform</Link>
          <Link to="/case-studies" className="text-sm font-label font-medium text-on-surface-variant hover:text-primary transition-colors">Case Studies</Link>
          <Link to="/pricing" className="text-sm font-label font-medium text-primary border-b-2 border-primary pb-1 hover:text-primary-container transition-colors">Pricing</Link>
          <Link to="/resources" className="text-sm font-label font-medium text-on-surface-variant hover:text-primary transition-colors">Resources</Link>
          <Link to="/partner" className="text-sm font-label font-medium text-on-surface-variant hover:text-primary transition-colors">Referrals</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/onboarding" className="text-sm font-label font-bold bg-primary text-on-primary px-6 py-2.5 rounded hover:opacity-90 transition-opacity shadow-sm">
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-surface-container-high opacity-40 blur-3xl"></div>
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary-fixed opacity-30 blur-3xl"></div>
        </div>
        <div className="max-w-7xl w-full z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl text-on-surface mb-6 tracking-tight">Choose Your Growth Plan</h1>
            <p className="font-body text-lg text-on-surface-variant">Select the plan that best fits your organizational scale.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-end">
            
            {/* Foundation Tier */}
            <div className="bg-surface-container-low rounded-lg p-8 flex flex-col h-full border border-outline-variant/15 transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-8">
                <h3 className="font-headline font-bold text-2xl text-on-surface mb-2">Foundation</h3>
                <div className="flex items-baseline mb-2">
                  <span className="font-headline font-bold text-4xl text-primary">R15,000</span>
                  <span className="font-body text-sm text-on-surface-variant ml-2">Setup</span>
                </div>
                <div className="font-body text-sm text-on-surface-variant">+ R850/mo</div>
              </div>
              <ul className="flex-grow space-y-4 mb-8">
                {[
                  '1 App Template',
                  'Android & Web Deployment',
                  'Standard Support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Icon name="check_circle" className="text-secondary mr-3 text-xl" />
                    <span className="font-body text-on-surface">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/onboarding" className="flex justify-center w-full py-3 px-6 rounded border-2 border-primary text-primary font-label font-semibold hover:bg-primary/5 transition-colors">
                Select Foundation
              </Link>
            </div>

            {/* Impact Tier - Highlighted */}
            <div className="bg-surface-container-lowest rounded-lg p-8 flex flex-col h-full relative transform md:-translate-y-4 shadow-[0_32px_64px_-12px_rgba(25,28,30,0.06)] border border-outline-variant/10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-secondary-container text-on-secondary-container font-label font-bold text-xs uppercase tracking-wider py-1.5 px-4 rounded-full whitespace-nowrap">Most Popular</span>
              </div>
              <div className="mb-8 mt-4">
                <h3 className="font-headline font-bold text-2xl text-on-surface mb-2">Impact</h3>
                <div className="flex items-baseline mb-2">
                  <span className="font-headline font-bold text-4xl text-primary">R28,000</span>
                  <span className="font-body text-sm text-on-surface-variant ml-2">Setup</span>
                </div>
                <div className="font-body text-sm text-on-surface-variant">+ R1,450/mo</div>
              </div>
              <ul className="flex-grow space-y-4 mb-8">
                {[
                  'All Foundation features',
                  'iOS (Apple) Deployment',
                  'Payment Gateway Integration',
                  'Priority Support'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Icon name="check_circle" className="text-secondary mr-3 text-xl" />
                    <span className={`font-body text-on-surface ${i === 0 ? 'font-medium' : ''}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/onboarding" className="flex justify-center w-full py-3 px-6 rounded bg-gradient-to-br from-primary to-primary-container text-white font-label font-semibold hover:shadow-lg transition-shadow">
                Select Impact
              </Link>
            </div>

            {/* Bespoke Tier */}
            <div className="bg-surface-container-low rounded-lg p-8 flex flex-col h-full border border-outline-variant/15 transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-8">
                <h3 className="font-headline font-bold text-2xl text-on-surface mb-2">Bespoke</h3>
                <div className="flex items-baseline mb-2">
                  <span className="font-headline font-bold text-4xl text-primary">R45,000+</span>
                  <span className="font-body text-sm text-on-surface-variant ml-2">Setup</span>
                </div>
                <div className="font-body text-sm text-on-surface-variant">+ R2,500/mo</div>
              </div>
              <ul className="flex-grow space-y-4 mb-8">
                {[
                  'Everything in Impact',
                  'Custom Feature Development',
                  'Dedicated Manager'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Icon name="check_circle" className="text-secondary mr-3 text-xl" />
                    <span className={`font-body text-on-surface ${i === 0 ? 'font-medium' : ''}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/onboarding" className="flex justify-center items-center w-full py-3 px-6 rounded border-2 border-outline-variant/30 text-on-surface-variant font-label font-semibold hover:bg-surface-container-highest transition-colors">
                Contact Sales
              </Link>
            </div>

          </div>

          {/* Back Action */}
          <div className="mt-16 flex justify-center">
            <Link to="/" className="flex items-center text-primary font-label font-medium hover:text-primary-container transition-colors">
              <Icon name="arrow_back" className="mr-2 text-sm text-primary" />
              Back
            </Link>
          </div>

        </div>
      </main>

      <footer className="bg-surface-container-low w-full py-12 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto z-10 border-t border-surface-container-high/30">
        <div className="flex justify-center md:justify-start gap-6 mb-6 md:mb-0">
          <Link to="/" className="text-on-surface-variant font-body text-sm hover:text-on-surface transition-colors">Privacy Policy</Link>
          <Link to="/" className="text-on-surface-variant font-body text-sm hover:text-on-surface transition-colors">Terms of Service</Link>
          <Link to="/" className="text-on-surface-variant font-body text-sm hover:text-on-surface transition-colors">Security</Link>
          <Link to="/" className="text-on-surface-variant font-body text-sm hover:text-on-surface transition-colors">Status</Link>
        </div>
        <div className="font-body text-sm text-on-surface-variant">
          © 2024 The App Press. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
