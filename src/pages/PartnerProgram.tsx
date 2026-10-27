import React from 'react';
import { Link } from 'react-router-dom';

const Icon = ({ name, className = "", style }: { name: string, className?: string, style?: React.CSSProperties }) => (
  <span className={`material-symbols-outlined ${className}`} style={{ fontVariationSettings: "'FILL' 1", ...style }}>
    {name}
  </span>
);

export default function PartnerProgram() {
  return (
    <div className="bg-surface text-on-surface font-body antialiased min-h-screen flex selection:bg-primary-container selection:text-on-primary-container">
      {/* SideNavBar Component */}
      <aside className="bg-slate-50 dark:bg-slate-900 text-indigo-700 dark:text-indigo-400 font-body font-medium text-sm h-screen w-64 fixed left-0 top-0 flex flex-col py-6 px-4 z-50 border-r border-outline-variant/10">
        {/* Brand Header */}
        <div className="mb-10 px-4">
          <Link to="/" className="flex items-center gap-3 mb-2">
            <span className="text-xl font-bold font-headline tracking-tight text-primary hover:text-primary-container transition-colors">Partner Portal</span>
          </Link>
          <p className="text-xs text-slate-500 font-headline font-bold uppercase tracking-wider pl-1">Referral Program</p>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex-1 space-y-2">
          {/* Active Tab: Dashboard */}
          <Link to="/partner" className="flex items-center gap-3 px-4 py-3 text-indigo-700 dark:text-teal-400 font-bold border-r-2 border-indigo-700 dark:border-teal-400 bg-white dark:bg-slate-800 scale-95 transition-transform rounded-sm">
            <Icon name="dashboard" />
            <span>Dashboard</span>
          </Link>
          {/* Inactive Tabs */}
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors scale-95 active:scale-90 transition-transform rounded-sm">
            <Icon name="group" />
            <span>My Referrals</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors scale-95 active:scale-90 transition-transform rounded-sm">
            <Icon name="campaign" />
            <span>Marketing Kit</span>
          </Link>
          <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors scale-95 active:scale-90 transition-transform rounded-sm">
            <Icon name="payments" />
            <span>Payout Settings</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content Canvas */}
      <div className="flex-1 ml-64 min-h-screen relative">
        {/* TopAppBar Component */}
        <header className="bg-white/70 dark:bg-slate-950/70 backdrop-blur-md text-indigo-700 dark:text-indigo-400 font-body font-medium fixed top-0 right-0 w-[calc(100%-16rem)] h-16 flex items-center justify-between px-8 z-40 border-b border-outline-variant/10">
          {/* Left: Search */}
          <div className="flex items-center w-1/3">
            <div className="relative w-full max-w-md hidden md:block">
              <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <input type="text" placeholder="Search..." className="w-full bg-surface-container-highest text-on-surface-variant font-label text-sm rounded-lg pl-10 pr-4 py-2 border-transparent focus:border-primary focus:ring-0 focus:outline-none placeholder:text-slate-400 transition-colors" />
            </div>
          </div>
          
          {/* Right: Actions & Profile */}
          <div className="flex items-center gap-6">
            <button className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-teal-300 opacity-80 hover:opacity-100 transition-opacity">
              <Icon name="notifications" />
            </button>
            <button className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-teal-300 opacity-80 hover:opacity-100 transition-opacity">
              <Icon name="help" />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-[0_12px_32px_rgba(25,28,30,0.05)] bg-primary/20 flex items-center justify-center">
              <Icon name="person" className="text-primary text-xl" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="pt-24 px-12 pb-16 max-w-7xl mx-auto space-y-12">
          {/* Page Title */}
          <div className="mb-8">
            <h2 className="font-headline font-bold text-3xl text-on-surface tracking-tight mb-2">Welcome back, Partner</h2>
            <p className="font-body text-on-surface-variant text-sm">Here is your referral performance and activity overview.</p>
          </div>

          {/* Top Row: Referral Link & Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Referral Link Card (Spans 4 cols on large screens) */}
            <div className="lg:col-span-4 bg-surface-container-lowest rounded-lg p-6 shadow-[0_12px_32px_rgba(25,28,30,0.05)] flex flex-col justify-center border border-outline-variant/10">
              <h3 className="font-headline font-bold text-lg text-on-surface mb-4">Your Unique Referral Link</h3>
              <div className="flex items-center gap-3">
                <input type="text" readOnly value="https://apppress.com/ref/partner123" className="flex-1 bg-surface-container-low text-on-surface-variant font-label text-sm rounded-lg px-4 py-3 border-transparent focus:ring-0 focus:outline-none truncate" />
                <button className="bg-gradient-to-br from-primary to-primary-container text-white font-label font-medium text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                  Copy Link
                </button>
              </div>
            </div>

            {/* Metrics Overview (Spans 8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Metric 1 */}
              <div className="bg-surface-container-lowest rounded-lg p-6 shadow-[0_12px_32px_rgba(25,28,30,0.05)] flex flex-col justify-between relative overflow-hidden border border-outline-variant/10">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-surface-container-low rounded-full opacity-50"></div>
                <h4 className="font-body text-sm font-medium text-on-surface-variant mb-4 relative z-10">Total Earnings</h4>
                <div className="flex items-end justify-between relative z-10">
                  <span className="font-headline font-extrabold text-3xl text-secondary-container text-[#006b5c]">R15,000</span>
                  <span className="text-[#006b5c] bg-[#006b5c]/10 p-2 rounded-full flex items-center justify-center">
                    <Icon name="payments" />
                  </span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="bg-surface-container-lowest rounded-lg p-6 shadow-[0_12px_32px_rgba(25,28,30,0.05)] flex flex-col justify-between relative overflow-hidden border border-outline-variant/10">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-surface-container-low rounded-full opacity-50"></div>
                <h4 className="font-body text-sm font-medium text-on-surface-variant mb-4 relative z-10">Pending Payout</h4>
                <div className="flex items-end justify-between relative z-10">
                  <span className="font-headline font-extrabold text-3xl text-primary">R6,000</span>
                  <span className="text-primary bg-primary/10 p-2 rounded-full flex items-center justify-center">
                    <Icon name="account_balance_wallet" />
                  </span>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-surface-container-lowest rounded-lg p-6 shadow-[0_12px_32px_rgba(25,28,30,0.05)] flex flex-col justify-between relative overflow-hidden border border-outline-variant/10">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-surface-container-low rounded-full opacity-50"></div>
                <h4 className="font-body text-sm font-medium text-on-surface-variant mb-4 relative z-10">Active Referrals</h4>
                <div className="flex items-end justify-between relative z-10">
                  <span className="font-headline font-extrabold text-3xl text-primary">5</span>
                  <span className="text-primary bg-primary/10 p-2 rounded-full flex items-center justify-center">
                    <Icon name="group_add" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Rewards & Growth Section */}
          <div className="bg-surface-container-lowest rounded-lg p-6 shadow-[0_12px_32px_rgba(25,28,30,0.05)] border border-outline-variant/10">
             <div className="flex items-center justify-between mb-8">
                 <h3 className="font-headline font-bold text-lg text-on-surface">Rewards & Growth</h3>
                 <div className="flex items-center gap-2 text-xs font-medium text-on-surface-variant bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant/10">
                     <span className="w-2 h-2 rounded-full bg-[#00BFA5]"></span>
                     Monthly Earnings Trend
                 </div>
             </div>
             
             <div className="relative h-64 w-full">
                 <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 600 200">
                     {/* Grid Lines */}
                     <line x1="0" y1="160" x2="600" y2="160" stroke="#e6e8eb" strokeWidth="1"></line>
                     <line x1="0" y1="100" x2="600" y2="100" stroke="#e6e8eb" strokeWidth="1"></line>
                     <line x1="0" y1="40" x2="600" y2="40" stroke="#e6e8eb" strokeWidth="1"></line>

                     {/* The Trend Line (Teal #00BFA5) */}
                     <path d="M 0 180 Q 60 170, 120 140 T 240 110 T 360 80 T 480 50 T 600 20" fill="none" stroke="#00BFA5" strokeWidth="3" strokeLinecap="round"></path>

                     {/* Data Points (Indigo #3F51B5) */}
                     <circle cx="0" cy="180" r="4" fill="#3F51B5"></circle>
                     <circle cx="120" cy="140" r="4" fill="#3F51B5"></circle>
                     <circle cx="240" cy="110" r="4" fill="#3F51B5"></circle>
                     <circle cx="360" cy="80" r="4" fill="#3F51B5"></circle>
                     <circle cx="480" cy="50" r="4" fill="#3F51B5"></circle>
                     <circle cx="600" cy="20" r="4" fill="#3F51B5"></circle>
                 </svg>
                 
                 {/* X-Axis Labels */}
                 <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2 pr-2">
                     <span>Jan</span>
                     <span>Feb</span>
                     <span>Mar</span>
                     <span>Apr</span>
                     <span>May</span>
                     <span>Jun</span>
                 </div>
             </div>
          </div>

          {/* Recent Activity Table */}
          <div className="bg-surface-container-lowest rounded-lg shadow-[0_12px_32px_rgba(25,28,30,0.05)] overflow-hidden border border-outline-variant/10">
            <div className="p-6 border-b border-surface-variant/50">
              <h3 className="font-headline font-bold text-lg text-on-surface">Recent Referral Activity</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/10">
                    <th className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-6 py-4">Client Name</th>
                    <th className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-6 py-4">Technology</th>
                    <th className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-6 py-4">Plan</th>
                    <th className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-6 py-4">Date</th>
                    <th className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-6 py-4">Status</th>
                    <th className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider px-6 py-4 text-right">Commission</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm divide-y divide-surface-container-high/50">
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-container-low/30 transition-colors group">
                    <td className="px-6 py-5 text-on-surface font-medium">Local NGO</td>
                    <td className="px-6 py-5 text-on-surface-variant">iOS & Android App</td>
                    <td className="px-6 py-5 text-on-surface-variant">Impact Plan</td>
                    <td className="px-6 py-5 text-on-surface-variant">12 Apr 2026</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#006b5c]/10 text-[#006b5c] border border-[#006b5c]/20">
                        Paid
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right font-headline font-bold text-on-surface">R3,000</td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-surface-container-low/30 transition-colors group">
                    <td className="px-6 py-5 text-on-surface font-medium">City Bistro</td>
                    <td className="px-6 py-5 text-on-surface-variant">PWA & POS Integration</td>
                    <td className="px-6 py-5 text-on-surface-variant">Foundation Plan</td>
                    <td className="px-6 py-5 text-on-surface-variant">10 Apr 2026</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-tertiary-container/10 text-tertiary-container border border-tertiary-container/20">
                        Building
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right font-headline font-bold text-on-surface">R3,000</td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-surface-container-low/30 transition-colors group">
                    <td className="px-6 py-5 text-on-surface font-medium">Tech Startup</td>
                    <td className="px-6 py-5 text-on-surface-variant">Web & Desktop App</td>
                    <td className="px-6 py-5 text-on-surface-variant">Impact Plan</td>
                    <td className="px-6 py-5 text-on-surface-variant">05 Apr 2026</td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-surface-variant text-on-surface-variant border border-outline-variant">
                        Signed Up
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right font-headline font-bold text-on-surface-variant">R0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

