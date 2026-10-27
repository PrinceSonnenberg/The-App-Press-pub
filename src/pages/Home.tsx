import React from 'react';
import { Link } from 'react-router-dom';

const Icon = ({ name, className = "" }: { name: string, className?: string }) => (
  <span className={`material-symbols-outlined ${className}`} style={{ fontVariationSettings: "'FILL' 1" }}>
    {name}
  </span>
);

export default function Home() {
  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex flex-col font-sans selection:bg-primary-container selection:text-on-primary-container">
      <header className="flex justify-between items-center w-full px-6 lg:px-12 py-6 bg-surface/80 backdrop-blur-md sticky top-0 z-50 text-on-surface border-b border-surface-container-low">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary font-bold shadow-sm">
            <Icon name="apps" className="text-xl" />
          </div>
          <span className="text-xl font-bold font-headline tracking-tight text-primary">The App Press</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-sm font-label font-medium text-primary border-b-2 border-primary pb-1 hover:text-primary-container transition-colors">Platform</Link>
          <Link to="/case-studies" className="text-sm font-label font-medium text-on-surface-variant hover:text-primary transition-colors">Case Studies</Link>
          <Link to="/pricing" className="text-sm font-label font-medium text-on-surface-variant hover:text-primary transition-colors">Pricing</Link>
          <Link to="/resources" className="text-sm font-label font-medium text-on-surface-variant hover:text-primary transition-colors">Resources</Link>
          <Link to="/partner" className="text-sm font-label font-medium text-on-surface-variant hover:text-primary transition-colors">Referrals</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/onboarding" className="hidden md:block text-sm font-label font-medium text-on-surface-variant hover:text-primary transition-colors">Log In</Link>
          <Link to="/onboarding" className="text-sm font-label font-bold bg-primary text-on-primary px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity shadow-sm">
            Start Building
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="px-6 lg:px-12 py-20 md:py-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative">
          <div className="flex-1 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-label font-bold mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              The new standard for custom apps
            </div>
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-on-surface">
              Your Business,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Now in Their Pocket.
              </span>
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Design, build, and deploy production-ready mobile and web applications without writing a single line of code. Tell us your business goals; we'll handle the architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/onboarding" className="text-center font-label font-bold bg-primary text-on-primary px-8 py-4 rounded-xl text-lg hover:shadow-[0_8px_16px_-4px_rgba(36,56,156,0.3)] transition-all hover:-translate-y-0.5">
                Start Your App
              </Link>
              <Link to="/pricing" className="text-center font-label font-bold bg-surface-container-low text-on-surface px-8 py-4 rounded-xl text-lg hover:bg-surface-container-high transition-colors flex items-center justify-center gap-2">
                View Pricing <Icon name="arrow_forward" className="text-base" />
              </Link>
            </div>
            <div className="pt-8 flex items-center gap-4 text-sm text-on-surface-variant font-label">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-highest"></div>
                <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-highest"></div>
                <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-highest"></div>
              </div>
              <p>Join 10,000+ businesses building with App Press</p>
            </div>
          </div>
          
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none ml-auto">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-gradient-to-tr from-primary-fixed to-secondary-container rounded-full blur-[100px] opacity-40"></div>
            <div className="relative z-10 w-full aspect-[4/5] md:aspect-square lg:aspect-[4/3] bg-surface-container-lowest rounded-2xl shadow-[0_32px_64px_-12px_rgba(25,28,30,0.1)] border border-outline-variant/20 overflow-hidden flex flex-col">
              <div className="h-12 border-b border-outline-variant/10 flex items-center px-4 gap-2 bg-surface">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-surface-variant"></div>
                <div className="w-3 h-3 rounded-full bg-secondary-fixed-dim"></div>
                <div className="ml-4 h-6 w-1/2 bg-surface-container-high rounded px-3 flex items-center">
                  <span className="text-[10px] text-on-surface-variant opacity-50 font-mono">dashboard.app-press.com</span>
                </div>
              </div>
              
              <div className="flex-1 bg-surface-container-lowest p-6 flex flex-col gap-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="h-4 w-24 bg-surface-container-highest rounded mb-2"></div>
                    <div className="h-8 w-48 bg-primary-fixed rounded"></div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary-container"></div>
                </div>
                <div className="flex gap-4">
                  <div className="h-24 flex-1 bg-surface-container-low rounded-lg p-4">
                     <div className="h-3 w-16 bg-surface-container-highest rounded mb-3"></div>
                     <div className="h-6 w-20 bg-on-surface opacity-80 rounded"></div>
                  </div>
                  <div className="h-24 flex-1 bg-surface-container-low rounded-lg p-4">
                     <div className="h-3 w-16 bg-surface-container-highest rounded mb-3"></div>
                     <div className="h-6 w-20 bg-on-surface opacity-80 rounded"></div>
                  </div>
                </div>
                <div className="flex-1 bg-surface-container-low rounded-lg mt-2 p-4 flex flex-col gap-3">
                  <div className="h-4 w-32 bg-surface-container-highest rounded mb-2"></div>
                  <div className="h-3 w-full bg-surface-container-highest rounded opacity-50"></div>
                  <div className="h-3 w-5/6 bg-surface-container-highest rounded opacity-50"></div>
                  <div className="h-3 w-4/6 bg-surface-container-highest rounded opacity-50"></div>
                </div>
              </div>
              
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -left-12 top-24 bg-surface-container-lowest p-4 rounded-xl shadow-lg border border-outline-variant/10 flex items-center gap-4 z-20 animate-[bounce_4s_infinite]">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-on-primary">
                <Icon name="rocket_launch" className="text-xl" />
              </div>
              <div>
                <p className="text-xs font-label text-on-surface-variant">Deployment</p>
                <p className="text-sm font-label font-bold text-on-surface">Successful</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-on-surface mb-4">Everything You Need to Scale</h2>
              <p className="font-body text-on-surface-variant text-lg">Our architecture is built for performance and reliability from day one.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Visual Editor', desc: 'Customize everything via our intuitive drag-and-drop interface. No coding required.', icon: 'design_services' },
                { title: 'Native Performance', desc: 'Compiled into optimized code that runs flawlessly across iOS, Android, and Web.', icon: 'speed' },
                { title: 'Instant Updates', desc: 'Push changes directly to your users\' devices without needing app store reviews.', icon: 'sync' }
              ].map((feat, i) => (
                <div key={i} className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary-fixed text-primary rounded-xl flex items-center justify-center mb-6">
                    <Icon name={feat.icon} className="text-2xl" />
                  </div>
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-3">{feat.title}</h3>
                  <p className="font-body text-on-surface-variant">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-surface-container-low py-12 px-6 lg:px-12 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-on-surface flex items-center justify-center text-surface text-xs font-bold shadow-sm">
               <Icon name="apps" className="text-[14px]" />
            </div>
            <span className="text-lg font-bold font-headline text-on-surface">The App Press</span>
          </div>
          <p className="text-sm text-on-surface-variant font-body">© 2026 The App Press Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
