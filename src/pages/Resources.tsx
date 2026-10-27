import React from 'react';
import { Link } from 'react-router-dom';

const Icon = ({ name, className = "", style }: { name: string, className?: string, style?: React.CSSProperties }) => (
  <span className={`material-symbols-outlined ${className}`} style={{ fontVariationSettings: "'FILL' 1", ...style }}>
    {name}
  </span>
);

export default function Resources() {
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
          <Link to="/pricing" className="text-sm font-label font-medium text-on-surface-variant hover:text-primary transition-colors">Pricing</Link>
          <Link to="/resources" className="text-sm font-label font-medium text-primary border-b-2 border-primary pb-1 hover:text-primary-container transition-colors">Resources</Link>
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
          <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary-fixed opacity-30 blur-3xl"></div>
        </div>
        <div className="max-w-7xl w-full z-10 flex flex-col items-center">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h1 className="font-headline font-extrabold text-4xl sm:text-5xl text-on-surface mb-6 tracking-tight">Resources & Guides</h1>
            <p className="font-body text-lg text-on-surface-variant">Everything you need to build, launch, and scale your application.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {[
              { title: 'Documentation', description: 'Comprehensive guides for our visual builder.', icon: 'menu_book' },
              { title: 'API Reference', description: 'Integrate external services effortlessly.', icon: 'api' },
              { title: 'Community', description: 'Join fellow builders in the forums.', icon: 'forum' },
              { title: 'Blog', description: 'Tips, updates, and product announcements.', icon: 'article' },
            ].map((resource, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-lg border border-outline-variant/15 p-6 hover:border-primary/50 transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={resource.icon} className="text-2xl text-primary" />
                </div>
                <h3 className="font-headline font-bold text-lg mb-2">{resource.title}</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-4">{resource.description}</p>
                <div className="text-primary font-label font-semibold text-sm flex items-center gap-1">
                  Explore 
                  <Icon name="arrow_forward" className="text-xs group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-surface-container-low w-full py-12 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto z-10 border-t border-surface-container-high/30 mt-auto">
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
