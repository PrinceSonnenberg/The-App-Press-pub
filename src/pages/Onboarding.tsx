import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Icon = ({ name, className = "" }: { name: string, className?: string }) => (
  <span className={`material-symbols-outlined ${className}`} style={{ fontVariationSettings: "'FILL' 1" }}>
    {name}
  </span>
);

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [template, setTemplate] = useState('');

  const nextStep = () => setStep(s => Math.min(5, s + 1));
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  return (
    <div className="bg-surface text-on-surface font-body min-h-screen flex antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* SideNavBar for steps 1 to 4 */}
      {step >= 1 && step <= 4 && (
        <aside aria-label="Sidebar Navigation" className="hidden lg:flex flex-col fixed left-0 top-0 h-full p-6 w-64 border-r border-outline-variant/20 bg-surface-container-low z-40 transition-transform">
          <div className="mb-10 px-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary font-bold shadow-sm">
                 A
              </div>
              <h1 className="text-lg font-bold text-primary tracking-tight font-headline">The App Press</h1>
            </div>
            <div className="mt-6">
              <h2 className="font-headline font-bold text-on-surface text-sm">Onboarding</h2>
              <p className="text-xs text-on-surface-variant font-label mt-1">Setup your workspace</p>
            </div>
          </div>
          <ul className="flex flex-col gap-2 flex-1">
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setStep(1); }} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-label text-sm font-medium transition-all ${step === 1 ? 'bg-indigo-50/50 text-primary font-bold' : 'text-slate-500 hover:bg-surface-container-highest'}`}>
                <Icon name="domain" className="text-[20px]" /> Identity
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setStep(2); }} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-label text-sm font-medium transition-all ${step === 2 ? 'bg-indigo-50/50 text-primary font-bold' : 'text-slate-500 hover:bg-surface-container-highest'}`}>
                <Icon name="palette" className="text-[20px]" /> Brand
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setStep(3); }} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-label text-sm font-medium transition-all ${step === 3 ? 'bg-indigo-50/50 text-primary font-bold' : 'text-slate-500 hover:bg-surface-container-highest'}`}>
                <Icon name="dashboard_customize" className="text-[20px]" /> Templates
              </a>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); setStep(4); }} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-label text-sm font-medium transition-all ${step === 4 ? 'bg-indigo-50/50 text-indigo-700 font-bold scale-[0.98]' : 'text-slate-500 hover:bg-surface-container-highest'}`}>
                <Icon name="settings_input_component" className={`text-[20px] ${step === 4 ? 'fill-icon' : ''}`} /> Technical
              </a>
            </li>
          </ul>
        </aside>
      )}

      {/* TopNavBar for Mobile steps 1 to 4 */}
      {step >= 1 && step <= 4 && (
        <header className="lg:hidden flex justify-between items-center w-full px-6 py-4 bg-surface-container-lowest/70 backdrop-blur-md sticky top-0 z-50 text-primary font-headline shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-on-primary font-bold text-xs shadow-sm">
              A
            </div>
            <span className="text-xl font-bold tracking-tight">The App Press</span>
          </div>
          <div className="flex items-center gap-4">
            <button aria-label="Help" className="text-slate-500 hover:text-primary transition-colors">
              <Icon name="help" />
            </button>
            <button aria-label="Account" className="text-slate-500 hover:text-primary transition-colors">
              <Icon name="account_circle" />
            </button>
          </div>
        </header>
      )}

      <main className={`flex-1 flex flex-col w-full ${step >= 1 && step <= 4 ? 'lg:ml-64 p-6 lg:p-12' : ''}`}>
        
        {step >= 1 && step <= 4 && (
          <header className="hidden lg:flex justify-end items-center mx-auto w-full max-w-5xl pb-8 mb-8 sticky top-0 bg-surface/90 backdrop-blur-sm z-30">
            <div className="flex items-center gap-6">
              <button aria-label="Help" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-2 text-sm font-label font-medium">
                <Icon name="help" className="text-[20px]" /> Help
              </button>
              <button aria-label="Account" className="text-slate-500 hover:text-primary transition-colors flex items-center gap-2 text-sm font-label font-medium">
                <Icon name="account_circle" className="text-[20px]" /> Profile
              </button>
            </div>
          </header>
        )}
        
        {step === 1 && (
          <div className="flex flex-col items-center w-full flex-1 max-w-5xl mx-auto">
            <div className="w-full mb-12 flex justify-start max-w-2xl">
              <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-label font-medium">
                <Icon name="arrow_back" className="text-[20px]" /> Back to Home
              </Link>
            </div>
            <div className="w-full max-w-2xl mb-12 flex justify-center">
              <div className="flex items-center gap-3">
                <div className="text-sm font-label font-medium text-on-surface-variant tracking-widest uppercase">Step 1 of 4</div>
                <div className="flex h-2 w-full gap-2">
                  <div className="h-full w-12 bg-gradient-to-r from-primary to-primary-container rounded-full"></div>
                  <div className="h-full w-12 bg-surface-container-high rounded-full"></div>
                  <div className="h-full w-12 bg-surface-container-high rounded-full"></div>
                  <div className="h-full w-12 bg-surface-container-high rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-sm p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="mb-12">
                  <h1 className="font-headline font-bold text-4xl tracking-tight text-on-surface mb-4">Tell us about your organization.</h1>
                  <p className="font-body text-lg text-on-surface-variant">This information helps us tailor The App Press to your specific needs.</p>
                </div>
                
                <form className="space-y-8 flex flex-col" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-sm font-medium text-on-surface-variant">Organization Name</label>
                    <input type="text" className="w-full bg-surface-container-highest border-0 rounded px-4 py-3 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-colors shadow-sm outline-none font-body text-base" placeholder="Acme Corp" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-sm font-medium text-on-surface-variant">Mission Statement</label>
                    <textarea rows={4} className="w-full bg-surface-container-highest border-0 rounded px-4 py-3 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-colors shadow-sm outline-none font-body text-base resize-none" placeholder="To innovate and inspire..."></textarea>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label text-sm font-medium text-on-surface-variant">Primary Goal</label>
                    <input type="text" className="w-full bg-surface-container-highest border-0 rounded px-4 py-3 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-colors shadow-sm outline-none font-body text-base" placeholder="Increase digital presence" />
                  </div>
                  <div className="pt-8 flex justify-end">
                    <button type="submit" className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-label font-medium px-8 py-4 rounded flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
                      <span>Next: Branding</span>
                      <Icon name="arrow_forward" className="text-xl" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex-1 w-full max-w-5xl mx-auto flex flex-col">
            <div className="mb-10 w-full max-w-3xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-label font-medium text-on-surface-variant uppercase tracking-wider">Step 2 of 4</span>
                <span className="text-sm font-label text-primary font-medium">Brand</span>
              </div>
              <div className="flex h-2 w-full gap-2">
                <div className="h-full flex-1 bg-primary rounded-full opacity-30"></div>
                <div className="h-full flex-1 bg-gradient-to-r from-primary to-primary-container rounded-full"></div>
                <div className="h-full flex-1 bg-surface-container-high rounded-full"></div>
                <div className="h-full flex-1 bg-surface-container-high rounded-full"></div>
              </div>
            </div>
            
            <div className="mb-12 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4 tracking-tight leading-tight">Your Visual Identity.</h1>
              <p className="text-lg text-on-surface-variant font-body max-w-2xl leading-relaxed">Upload your logo and select your brand colors to customize the look and feel of your app.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7 flex flex-col gap-6">
                <div className="bg-surface-container-lowest rounded-lg p-8 shadow-[0_10px_32px_-4px_rgba(25,28,30,0.06)] relative overflow-hidden">
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-4">Company Logo</h3>
                  <p className="text-sm text-on-surface-variant mb-6 font-body">Upload a high-resolution logo. SVG or transparent PNG recommended.</p>
                  <div className="border-2 border-dashed border-outline-variant/40 rounded-lg p-10 flex flex-col items-center justify-center text-center bg-surface hover:bg-surface-container-low transition-colors cursor-pointer group">
                    <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                      <Icon name="cloud_upload" className="text-primary text-3xl" />
                    </div>
                    <p className="font-label text-on-surface font-medium mb-1">Click to upload or drag and drop</p>
                    <p className="font-label text-xs text-on-surface-variant">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-5 flex flex-col gap-6">
                <div className="bg-surface-container-lowest rounded-lg p-8 shadow-[0_10px_32px_-4px_rgba(25,28,30,0.06)] relative overflow-hidden h-full">
                  <h3 className="font-headline font-bold text-xl text-on-surface mb-4">Brand Colors</h3>
                  <p className="text-sm text-on-surface-variant mb-6 font-body">Define your core palette. We'll use these to generate your theme.</p>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full shadow-sm ring-4 ring-surface-container-lowest relative cursor-pointer" style={{ backgroundColor: 'var(--color-primary)'}}>
                          <input type="color" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" defaultValue="#24389c" />
                        </div>
                        <div>
                          <p className="font-label text-sm font-semibold text-on-surface">Primary</p>
                          <p className="font-label text-xs text-on-surface-variant uppercase">#24389c</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full shadow-sm ring-4 ring-surface-container-lowest relative cursor-pointer" style={{ backgroundColor: 'var(--color-secondary)'}}>
                          <input type="color" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" defaultValue="#006b5c" />
                        </div>
                        <div>
                          <p className="font-label text-sm font-semibold text-on-surface">Secondary</p>
                          <p className="font-label text-xs text-on-surface-variant uppercase">#006b5c</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full shadow-sm ring-4 ring-surface-container-lowest relative cursor-pointer" style={{ backgroundColor: 'var(--color-secondary-container)'}}>
                          <input type="color" className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" defaultValue="#68fadd" />
                        </div>
                        <div>
                          <p className="font-label text-sm font-semibold text-on-surface">Accent</p>
                          <p className="font-label text-xs text-on-surface-variant uppercase">#68fadd</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex justify-between items-center border-t border-outline-variant/20 pt-8">
              <button onClick={prevStep} className="px-6 py-3 rounded font-label font-semibold text-on-surface bg-transparent hover:bg-surface-container-high transition-colors flex items-center gap-2 cursor-pointer">
                Back
              </button>
              <button onClick={nextStep} className="cursor-pointer px-8 py-3 rounded font-label font-semibold text-white bg-gradient-to-br from-primary to-primary-container hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm">
                Next: Choose App Format
                <Icon name="arrow_forward" className="text-sm" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex-1 w-full max-w-5xl mx-auto flex flex-col">
            <div className="mb-10 w-full max-w-3xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-label font-medium text-on-surface-variant uppercase tracking-wider">Step 3 of 4</span>
                <span className="text-sm font-label text-primary font-medium">Templates</span>
              </div>
              <div className="flex h-2 w-full gap-2">
                <div className="h-full flex-1 bg-primary rounded-full opacity-30"></div>
                <div className="h-full flex-1 bg-primary rounded-full opacity-30"></div>
                <div className="h-full flex-1 bg-gradient-to-r from-primary to-primary-container rounded-full"></div>
                <div className="h-full flex-1 bg-surface-container-high rounded-full"></div>
              </div>
            </div>
            
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4 tracking-tight leading-tight">Select Your App Foundation.</h1>
                <p className="text-lg text-on-surface-variant font-body max-w-2xl leading-relaxed">Choose the primary structural template that best aligns with your organizational goals. This choice defines your baseline features.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { id: 'store', name: 'The Storefront', desc: 'E-commerce & ordering for retail/food.', icon: 'storefront', color: 'text-primary' },
                { id: 'sched', name: 'The Scheduler', desc: 'Bookings & appointments for services.', icon: 'calendar_month', color: 'text-secondary' },
                { id: 'hub', name: 'The Impact Hub', desc: 'Donations & engagement for NGOs.', icon: 'volunteer_activism', color: 'text-tertiary' },
                { id: 'comm', name: 'The Community', desc: 'Private feeds & events for groups.', icon: 'forum', color: 'text-primary' },
              ].map(tpl => (
                <div key={tpl.id} className={`bg-surface-container-lowest rounded-lg p-8 shadow-[0_16px_32px_-4px_rgba(25,28,30,0.06)] flex flex-col h-full ring-1 ${template === tpl.id ? 'ring-primary' : 'ring-outline-variant/15'} hover:ring-primary/30 transition-all group cursor-pointer`} onClick={() => setTemplate(tpl.id)}>
                  <div className={`w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center mb-6 ${tpl.color} group-hover:scale-105 transition-transform`}>
                    <Icon name={tpl.icon} className="text-[28px]" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">{tpl.name}</h3>
                  <p className="text-on-surface-variant font-body mb-8 flex-1">{tpl.desc}</p>
                  <button className={`cursor-pointer w-full py-3 px-4 rounded font-label font-medium ring-1 ${template === tpl.id ? 'ring-primary bg-primary/5 text-primary' : 'ring-outline-variant/30 text-on-surface hover:bg-surface-container-low'} transition-colors`}>
                    {template === tpl.id ? 'Selected' : 'Select This Format'}
                  </button>
                </div>
              ))}
              
              <div className={`md:col-span-2 bg-surface-container-lowest rounded-lg p-8 shadow-[0_16px_32px_-4px_rgba(25,28,30,0.06)] flex flex-col md:flex-row md:items-center gap-8 ring-1 ${template === 'work' ? 'ring-primary' : 'ring-outline-variant/15'} hover:ring-primary/30 transition-all group relative overflow-hidden cursor-pointer`} onClick={() => setTemplate('work')}>
                <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-surface-container-low/50 to-transparent pointer-events-none hidden md:block"></div>
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-lg bg-surface-container-low flex items-center justify-center mb-6 text-secondary group-hover:scale-105 transition-transform">
                    <Icon name="task_alt" className="text-[28px]" />
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-on-surface mb-3">The Workspace</h3>
                  <p className="text-on-surface-variant font-body max-w-md">Task & staff management for operations.</p>
                </div>
                <div className="md:w-64 shrink-0">
                  <button className={`cursor-pointer w-full py-3 px-4 rounded font-label font-medium ring-1 ${template === 'work' ? 'ring-primary bg-primary/5 text-primary' : 'ring-outline-variant/30 text-on-surface hover:bg-surface-container-low'} transition-colors bg-white`}>
                    {template === 'work' ? 'Selected' : 'Select This Format'}
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 flex justify-between items-center">
              <button onClick={prevStep} className="cursor-pointer text-on-surface-variant hover:text-on-surface font-label font-medium flex items-center gap-2 transition-colors">
                <Icon name="arrow_back" className="text-[20px]" /> Back
              </button>
              <button onClick={nextStep} disabled={!template} className={`font-label font-medium py-3 px-8 rounded transition-all ${template ? 'bg-primary text-white hover:opacity-90 cursor-pointer' : 'bg-surface-container-highest text-outline opacity-50 cursor-not-allowed'}`}>
                Continue Setup
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="flex-1 w-full max-w-5xl mx-auto flex flex-col">
            <div className="mb-10 w-full max-w-3xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-label font-medium text-on-surface-variant uppercase tracking-wider">Step 4 of 4</span>
                <span className="text-sm font-label text-primary font-medium">Technical</span>
              </div>
              <div className="flex h-2 w-full gap-2">
                <div className="h-full flex-1 bg-primary rounded-full opacity-30"></div>
                <div className="h-full flex-1 bg-primary rounded-full opacity-30"></div>
                <div className="h-full flex-1 bg-primary rounded-full opacity-30"></div>
                <div className="h-full flex-1 bg-gradient-to-r from-primary to-primary-container rounded-full"></div>
              </div>
            </div>
            
            <div className="mb-12 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-4 tracking-tight leading-tight">Tailoring Your Experience.</h2>
              <p className="text-lg text-on-surface-variant font-body max-w-2xl leading-relaxed">Let's configure the technical backbone of your app. These settings ensure optimal performance for your target audience and hardware requirements.</p>
            </div>
            
            <div className="flex-1 max-w-3xl w-full">
              <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                  <label className="block text-sm font-label font-medium text-on-surface-variant mb-3">Primary User Age Group</label>
                  <div className="relative">
                    <select defaultValue="" className="block w-full pl-4 pr-10 py-3 text-base font-body bg-surface-container-highest border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none text-on-surface">
                      <option value="" disabled>Select an age group</option>
                      <option value="genz">Gen Z (18-24)</option>
                      <option value="millennial">Millennials (25-40)</option>
                      <option value="genx">Gen X (41-56)</option>
                      <option value="boomer">Boomers (57+)</option>
                      <option value="all">Broad Audience</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
                      <Icon name="expand_more" />
                    </div>
                  </div>
                </section>

                <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                  <legend className="block text-sm font-label font-medium text-on-surface-variant mb-3">Technology Required</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center p-4 border border-outline-variant/15 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                      <input type="checkbox" name="tech_web" className="w-5 h-5 text-primary bg-surface-container-highest border-transparent focus:ring-primary rounded" />
                      <div className="ml-4 flex-1">
                        <span className="block text-base font-body font-medium text-on-surface">Web App / PWA</span>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border border-outline-variant/15 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                      <input type="checkbox" defaultChecked name="tech_ios" className="w-5 h-5 text-primary bg-surface-container-highest border-transparent focus:ring-primary rounded" />
                      <div className="ml-4 flex-1">
                        <span className="block text-base font-body font-medium text-on-surface">Native iOS App</span>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border border-outline-variant/15 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                      <input type="checkbox" defaultChecked name="tech_android" className="w-5 h-5 text-primary bg-surface-container-highest border-transparent focus:ring-primary rounded" />
                      <div className="ml-4 flex-1">
                        <span className="block text-base font-body font-medium text-on-surface">Native Android App</span>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border border-outline-variant/15 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                      <input type="checkbox" name="tech_desktop" className="w-5 h-5 text-primary bg-surface-container-highest border-transparent focus:ring-primary rounded" />
                      <div className="ml-4 flex-1">
                        <span className="block text-base font-body font-medium text-on-surface">Desktop App (Windows/Mac)</span>
                      </div>
                    </label>
                    <label className="flex items-center p-4 border border-outline-variant/15 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                      <input type="checkbox" name="tech_pos" className="w-5 h-5 text-primary bg-surface-container-highest border-transparent focus:ring-primary rounded" />
                      <div className="ml-4 flex-1">
                        <span className="block text-base font-body font-medium text-on-surface">POS Integration</span>
                      </div>
                    </label>
                  </div>
                </section>

                <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                  <label className="block text-sm font-label font-medium text-on-surface-variant mb-6">User Tech-Savviness</label>
                  <div className="relative w-full">
                    <input type="range" min="1" max="100" defaultValue="50" className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary" />
                    <div className="flex justify-between mt-4 text-xs font-label text-on-surface-variant">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                    </div>
                  </div>
                </section>
                
                <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                    <legend className="block text-sm font-label font-medium text-on-surface-variant mb-6">Connectivity Focus</legend>
                    <div className="space-y-4">
                      <label className="flex items-center p-4 border border-outline-variant/15 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                        <input type="radio" name="connectivity" value="wifi" defaultChecked className="w-5 h-5 text-primary bg-surface-container-highest border-transparent focus:ring-primary cursor-pointer" />
                        <div className="ml-4 flex-1">
                          <span className="block text-base font-body font-medium text-on-surface">Always on Wi-Fi</span>
                          <span className="block text-sm text-on-surface-variant mt-1">App assumes high-speed, stable connection.</span>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border border-outline-variant/15 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                        <input type="radio" name="connectivity" value="mobile" className="w-5 h-5 text-primary bg-surface-container-highest border-transparent focus:ring-primary cursor-pointer" />
                        <div className="ml-4 flex-1">
                          <span className="block text-base font-body font-medium text-on-surface">Mobile Data Sensitive</span>
                          <span className="block text-sm text-on-surface-variant mt-1">Optimizes assets and defers heavy downloads.</span>
                        </div>
                      </label>
                      <label className="flex items-center p-4 border border-outline-variant/15 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer group">
                        <input type="radio" name="connectivity" value="offline" className="w-5 h-5 text-primary bg-surface-container-highest border-transparent focus:ring-primary cursor-pointer" />
                        <div className="ml-4 flex-1">
                          <span className="block text-base font-body font-medium text-on-surface">Offline Mode Required</span>
                          <span className="block text-sm text-on-surface-variant mt-1">Local caching and sync logic enabled.</span>
                        </div>
                      </label>
                    </div>
                </section>

                <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                  <legend className="block text-sm font-label font-medium text-on-surface-variant mb-6">Required Hardware Permissions</legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="photo_camera" className="text-primary text-[24px] material-symbols-outlined" />
                        <label className="text-base font-body font-medium text-on-surface cursor-pointer" htmlFor="hardware-camera">Camera/QR</label>
                      </div>
                      <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="hardware" id="hardware-camera" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out border-surface-variant checked:border-primary checked:translate-x-6 checked:bg-primary-container"/>
                        <label htmlFor="hardware-camera" className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer"></label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="location_on" className="text-primary text-[24px] material-symbols-outlined" />
                        <label className="text-base font-body font-medium text-on-surface cursor-pointer" htmlFor="hardware-gps">GPS/Location</label>
                      </div>
                      <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="hardware" id="hardware-gps" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out border-surface-variant checked:border-primary checked:translate-x-6 checked:bg-primary-container"/>
                        <label htmlFor="hardware-gps" className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer"></label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="notifications" className="text-primary text-[24px] material-symbols-outlined" />
                        <label className="text-base font-body font-medium text-on-surface cursor-pointer" htmlFor="hardware-push">Push Notifications</label>
                      </div>
                      <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="hardware" id="hardware-push" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out border-surface-variant checked:border-primary checked:translate-x-6 checked:bg-primary-container"/>
                        <label htmlFor="hardware-push" className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer"></label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-surface rounded-lg">
                      <div className="flex items-center gap-3">
                        <Icon name="mic" className="text-primary text-[24px] material-symbols-outlined" />
                        <label className="text-base font-body font-medium text-on-surface cursor-pointer" htmlFor="hardware-mic">Microphone</label>
                      </div>
                      <div className="relative inline-block w-12 h-6 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="hardware" id="hardware-mic" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer transition-transform duration-200 ease-in-out border-surface-variant checked:border-primary checked:translate-x-6 checked:bg-primary-container"/>
                        <label htmlFor="hardware-mic" className="toggle-label block overflow-hidden h-6 rounded-full bg-surface-variant cursor-pointer"></label>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                  <label className="block text-sm font-label font-medium text-on-surface-variant mb-3" htmlFor="core-action">Core Action</label>
                  <p className="text-sm text-on-surface-variant mb-4">What is the single most important action a user should take in this app?</p>
                  <textarea id="core-action" name="core-action" placeholder="e.g., Complete a purchase, publish an article, track a workout..." rows={4} className="block w-full p-4 text-base font-body bg-surface-container-highest border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-on-surface transition-shadow resize-none placeholder:text-on-surface-variant/50"></textarea>
                </section>
                
                <div className="flex items-center justify-between pt-8 mt-12 border-t border-outline-variant/20">
                  <button type="button" onClick={prevStep} className="cursor-pointer px-6 py-3 rounded text-base font-label font-semibold text-on-surface bg-transparent border border-outline hover:bg-surface-container-low transition-colors">
                    Back
                  </button>
                  <button type="submit" className="cursor-pointer px-8 py-3 rounded bg-gradient-to-br from-primary to-primary-container text-on-primary text-base font-label font-semibold shadow-sm hover:opacity-90 transition-opacity">
                    Next: View Pricing
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="flex-grow flex flex-col justify-center py-16 px-6 lg:px-12 max-w-7xl mx-auto w-full">
            <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container text-on-secondary-container mb-4">
                <Icon name="check_circle" className="text-4xl" />
              </div>
              <h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight">
                You're all set! We're building your app.
              </h1>
              <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
                Your custom App Press experience is being prepared based on your requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="space-y-8 order-2 lg:order-1">
                <div className="bg-surface-container-lowest rounded-xl p-8 lg:p-10 shadow-[0_32px_64px_-12px_rgba(25,28,30,0.06)] relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-fixed opacity-30 rounded-full blur-3xl"></div>
                  <h2 className="font-headline font-bold text-2xl text-on-surface mb-8">Order Summary</h2>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-surface-container-high pb-4">
                      <span className="font-label text-on-surface-variant font-medium">Selected Plan</span>
                      <span className="font-body font-semibold text-primary">Impact</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-surface-container-high pb-4">
                      <span className="font-label text-on-surface-variant font-medium">Template</span>
                      <span className="font-body font-semibold text-on-surface capitalize">{template || 'storefront'}</span>
                    </div>
                    <div className="pt-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-label text-on-surface-variant font-medium">Status</span>
                        <span className="font-body font-semibold text-secondary-fixed-dim">Building...</span>
                      </div>
                      <div className="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden">
                        <div className="bg-secondary-fixed-dim h-2.5 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <p className="font-body text-sm text-outline text-right">Estimated wait: ~2 mins</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-[300px] h-[550px] bg-surface-container-lowest rounded-[2.5rem] border-[8px] border-surface-container-high shadow-[0_40px_80px_-16px_rgba(25,28,30,0.1)] overflow-hidden flex flex-col">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-surface-container-high rounded-b-xl z-20"></div>
                  <div className="flex-1 bg-surface flex flex-col pt-10 pb-6 px-4">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="font-headline font-bold text-lg text-on-surface">Welcome back</h3>
                        <p className="font-body text-xs text-on-surface-variant">Here is your dashboard</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
                        <Icon name="person" className="text-sm" />
                      </div>
                    </div>
                    
                    <div className="bg-surface-container-lowest p-4 rounded-lg shadow-sm border border-outline-variant/15 flex-1 mb-6">
                      <h4 className="font-headline font-bold text-sm text-on-surface mb-3">Recent Activity</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                            <Icon name="payments" className="text-xs text-on-surface-variant" />
                          </div>
                          <div>
                            <p className="font-body text-xs font-medium text-on-surface">New Order #1024</p>
                            <p className="font-body text-[10px] text-on-surface-variant">2 mins ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-20 text-center pb-12 flex flex-col md:flex-row justify-center gap-4">
              <Link to="/" className="cursor-pointer bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold text-lg py-5 px-12 rounded-lg shadow-[0_16px_32px_-8px_rgba(36,56,156,0.3)] hover:shadow-[0_24px_48px_-12px_rgba(36,56,156,0.4)] transition-all duration-300 transform hover:-translate-y-1 inline-block">
                Go to My Dashboard
              </Link>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
