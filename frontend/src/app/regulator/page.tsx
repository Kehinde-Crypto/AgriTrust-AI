'use client';

import { useState } from 'react';

export default function RegulatorDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics'>('overview');

  return (
    <div className="flex flex-col w-full max-w-[1200px] mx-auto">
      
      {/* Header & Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-text-primary mb-2 tracking-tight">Network Overview</h1>
          <p className="text-text-secondary">Real-time visibility across the AgriTrace agricultural supply chain.</p>
        </div>
        
        {/* Tabs */}
        <div className="flex items-center p-1 bg-bg-card border border-border-subtle rounded-lg shrink-0 w-fit">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2 text-sm font-semibold rounded-md transition-all ${activeTab === 'overview' ? 'bg-[#9333ea] text-white shadow-md' : 'text-text-secondary hover:text-text-primary'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('analytics')}
            className={`px-5 py-2 text-sm font-semibold rounded-md transition-all ${activeTab === 'analytics' ? 'bg-[#9333ea] text-white shadow-md' : 'text-text-secondary hover:text-text-primary'}`}
          >
            Analytics
          </button>
        </div>
      </div>

      {activeTab === 'overview' ? <OverviewTab /> : <AnalyticsTab />}

    </div>
  );
}

function OverviewTab() {
  return (
    <div className="animate-in fade-in duration-300">
      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-text-primary">4,217</div>
            <div className="text-xs font-medium text-text-muted mt-0.5">Compliant batches</div>
          </div>
        </div>
        
        <div className="bg-bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent-amber/20 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent-amber" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-text-primary">38</div>
            <div className="text-xs font-medium text-text-muted mt-0.5">Flagged for review</div>
          </div>
        </div>

        <div className="bg-bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent-red/20 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-text-primary">6</div>
            <div className="text-xs font-medium text-text-muted mt-0.5">Non-compliant alerts</div>
          </div>
        </div>

        <div className="bg-bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#9333ea]/20 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#c084fc]" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-text-primary">1,204</div>
            <div className="text-xs font-medium text-text-muted mt-0.5">Active farms registered</div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-bg-card border border-border-subtle rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-text-primary">Compliance network map</h2>
          <button className="text-text-muted hover:text-[#c084fc] transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
          </button>
        </div>
        
        {/* Abstract Map UI */}
        <div className="w-full h-80 bg-[#1a1f2e] rounded-xl border border-border-default relative overflow-hidden flex items-center justify-center">
          {/* Map Nodes Simulation */}
          <div className="absolute w-full h-full opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0yMCAwTDQwIDIwTDIwIDQwTDAgMjBaIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzQxNTUiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] bg-[length:40px_40px]"></div>
          
          <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-brand-green rounded-full shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-pulse"></div>
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-accent-amber rounded-full shadow-[0_0_20px_rgba(245,158,11,0.8)] animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-accent-red rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
          
          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-bg-card/90 backdrop-blur-md border border-border-subtle rounded-lg p-3 text-xs flex flex-col gap-2.5 shadow-xl">
            <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-brand-green shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div><span className="text-text-secondary font-medium">Compliant</span></div>
            <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent-amber shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div><span className="text-text-secondary font-medium">Pending review</span></div>
            <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-full bg-accent-red shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div><span className="text-text-secondary font-medium">Flagged</span></div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Alerts */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-6 flex flex-col">
          <h2 className="text-lg font-bold text-text-primary mb-6">Recent compliance alerts</h2>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent-red mt-1.5 shrink-0"></div>
              <div className="flex-1">
                <p className="text-text-primary font-medium text-sm">Batch AGT-1103 flagged: GMO disclosure missing</p>
                <p className="text-text-muted text-xs mt-1">GreenFields Farms • Kaduna State</p>
              </div>
              <button className="text-[#c084fc] text-sm font-semibold hover:text-[#d8b4fe] transition-colors">Review</button>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent-amber mt-1.5 shrink-0"></div>
              <div className="flex-1">
                <p className="text-text-primary font-medium text-sm">Farm ID #0892 inspection overdue</p>
                <p className="text-text-muted text-xs mt-1">Sunrise Agro Ltd. • Oyo State</p>
              </div>
              <button className="text-[#c084fc] text-sm font-semibold hover:text-[#d8b4fe] transition-colors">Review</button>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent-red mt-1.5 shrink-0"></div>
              <div className="flex-1">
                <p className="text-text-primary font-medium text-sm">Batch AGT-0987 failed residue test <span className="text-text-muted font-normal">(Chlorpyrifos)</span></p>
                <p className="text-text-muted text-xs mt-1">Ife Agri Cooperative • Edo State</p>
              </div>
              <button className="text-[#c084fc] text-sm font-semibold hover:text-[#d8b4fe] transition-colors">Review</button>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent-amber mt-1.5 shrink-0"></div>
              <div className="flex-1">
                <p className="text-text-primary font-medium text-sm">Incomplete documentation for Batch AGT-1044</p>
                <p className="text-text-muted text-xs mt-1">Niger Delta Rice Farms • Rivers State</p>
              </div>
              <button className="text-[#c084fc] text-sm font-semibold hover:text-[#d8b4fe] transition-colors">Review</button>
            </div>
          </div>
        </div>

        {/* Top Regions */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-6 flex flex-col">
          <h2 className="text-lg font-bold text-text-primary mb-6">Top performing regions</h2>
          <div className="space-y-6 flex-1 flex flex-col justify-center">
            {[
              { name: 'Rivers State', score: '99.1%' },
              { name: 'Lagos', score: '98.4%' },
              { name: 'Kano State', score: '97.6%' },
              { name: 'Oyo State', score: '96.8%' },
              { name: 'Kaduna State', score: '95.3%' },
            ].map(region => (
              <div key={region.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-text-primary font-medium">{region.name}</span>
                  <span className="text-[#c084fc] font-bold">{region.score}</span>
                </div>
                <div className="w-full bg-bg-input rounded-full h-2">
                  <div className="bg-[#9333ea] h-2 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.4)]" style={{ width: region.score }}></div>
                </div>
              </div>
            ))}
            
            {/* Chart X-axis */}
            <div className="flex justify-between text-[10px] font-bold text-text-muted mt-2 border-t border-border-subtle/50 pt-2 tracking-wider">
              <span>0</span><span>20</span><span>40</span><span>60</span><span>80</span><span>100</span>
            </div>
            <p className="text-center text-[10px] font-bold text-text-muted mt-1 uppercase tracking-wider">Compliance rate (%)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsTab() {
  return (
    <div className="animate-in fade-in duration-300">
      
      {/* Line Chart Section */}
      <div className="bg-bg-card border border-border-subtle rounded-xl p-6 mb-6">
        <h2 className="text-lg font-bold text-text-primary mb-2">System-wide analytics</h2>
        <p className="text-text-secondary text-sm mb-6">Daily batch registrations vs certifications</p>
        
        {/* CSS Line Chart Approximation */}
        <div className="h-64 relative border-l border-b border-border-subtle flex items-end pt-4 pb-2">
          {/* Y-axis Labels */}
          <div className="absolute -left-6 top-0 h-full flex flex-col justify-between text-[10px] text-text-muted pb-2">
            <span>200</span><span>150</span><span>100</span><span>50</span><span>0</span>
          </div>
          
          {/* Grid lines */}
          <div className="absolute left-0 right-0 top-0 h-full flex flex-col justify-between pb-2 z-0 opacity-10">
            <div className="w-full border-b border-white"></div>
            <div className="w-full border-b border-white"></div>
            <div className="w-full border-b border-white"></div>
            <div className="w-full border-b border-white"></div>
            <div className="w-full border-b border-white"></div>
          </div>
          
          {/* X-axis Labels */}
          <div className="absolute -bottom-6 left-0 w-full flex justify-between text-[10px] text-text-muted">
            <span>Jun 1</span><span>Jun 5</span><span>Jun 10</span><span>Jun 15</span><span>Jun 20</span><span>Jun 25</span>
          </div>

          {/* SVG Line Chart for Realism */}
          <svg className="absolute inset-0 h-full w-full z-10" preserveAspectRatio="none">
            {/* Registrations Line (Purple) */}
            <polyline 
              fill="none" 
              stroke="#9333ea" 
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="0,200 10%,180 20%,120 30%,140 40%,80 50%,100 60%,40 70%,60 80%,20 90%,40 100%,10"
              className="drop-shadow-[0_4px_6px_rgba(147,51,234,0.5)]"
            />
            {/* Certifications Line (Green) */}
            <polyline 
              fill="none" 
              stroke="#22c55e" 
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="0,220 10%,200 20%,160 30%,170 40%,120 50%,130 60%,80 70%,100 80%,60 90%,70 100%,40"
              className="drop-shadow-[0_4px_6px_rgba(34,197,94,0.5)]"
            />
          </svg>
        </div>
        
        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-[#9333ea]"></div><span className="text-xs text-text-primary">Registrations</span></div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-brand-green"></div><span className="text-xs text-text-primary">Certifications</span></div>
        </div>
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        {/* Crop Compliance */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
          <h2 className="text-lg font-bold text-text-primary mb-6">Crop compliance rates</h2>
          
          <div className="space-y-6">
            {[
              { crop: 'Cocoa', comp: 94, fail: 6 },
              { crop: 'Cassava', comp: 88, fail: 12 },
              { crop: 'Cashew', comp: 92, fail: 8 },
            ].map(item => (
              <div key={item.crop}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-text-primary font-medium">{item.crop}</span>
                </div>
                <div className="w-full bg-bg-input rounded-full h-3 flex overflow-hidden">
                  <div className="bg-brand-green h-full relative" style={{ width: `${item.comp}%` }}>
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-black/50">{item.comp}%</span>
                  </div>
                  <div className="bg-accent-amber h-full relative" style={{ width: `${item.fail}%` }}>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Legend */}
            <div className="flex gap-4 mt-6">
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-green"></div><span className="text-xs text-text-muted">Compliant</span></div>
              <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-amber"></div><span className="text-xs text-text-muted">Non-compliant</span></div>
            </div>
          </div>
        </div>

        {/* Non-compliance by Region (Vertical Bars) */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
          <h2 className="text-lg font-bold text-text-primary mb-6">Non-compliance alerts by region</h2>
          
          <div className="h-48 flex items-end justify-between px-2 pt-4 relative">
            <div className="absolute left-0 right-0 top-0 h-full flex flex-col justify-between pb-6 z-0 opacity-10">
              <div className="w-full border-b border-white"></div>
              <div className="w-full border-b border-white"></div>
              <div className="w-full border-b border-white"></div>
              <div className="w-full border-b border-white"></div>
            </div>
            
            {[
              { reg: 'Lagos', val: 40 },
              { reg: 'Rivers', val: 70 },
              { reg: 'Kano', val: 30 },
              { reg: 'Oyo', val: 50 },
              { reg: 'Edo', val: 80 }
            ].map(item => (
              <div key={item.reg} className="flex flex-col items-center flex-1 z-10">
                <div className="w-8 bg-accent-red/80 rounded-t-sm" style={{ height: `${item.val}%` }}></div>
                <span className="text-[10px] font-medium text-text-muted mt-2">{item.reg}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Inspector Activity Table */}
      <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
        <h2 className="text-lg font-bold text-text-primary mb-4">Inspector activity</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="py-3 text-xs font-bold text-text-muted uppercase tracking-wider">Inspector ID</th>
                <th className="py-3 text-xs font-bold text-text-muted uppercase tracking-wider">Agency</th>
                <th className="py-3 text-xs font-bold text-text-muted uppercase tracking-wider">Inspections (30d)</th>
                <th className="py-3 text-xs font-bold text-text-muted uppercase tracking-wider">Pass Rate</th>
                <th className="py-3 text-xs font-bold text-text-muted uppercase tracking-wider">Avg Time</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border-subtle/50 hover:bg-bg-input/50 transition-colors">
                <td className="py-3 text-text-primary font-medium">NAFDAC-0042</td>
                <td className="py-3 text-text-secondary">NAFDAC</td>
                <td className="py-3 text-text-primary font-bold">142</td>
                <td className="py-3 text-brand-green font-bold">94%</td>
                <td className="py-3 text-text-secondary">2.4 days</td>
              </tr>
              <tr className="border-b border-border-subtle/50 hover:bg-bg-input/50 transition-colors">
                <td className="py-3 text-text-primary font-medium">MOA-0991</td>
                <td className="py-3 text-text-secondary">Min. of Ag</td>
                <td className="py-3 text-text-primary font-bold">98</td>
                <td className="py-3 text-brand-green font-bold">88%</td>
                <td className="py-3 text-text-secondary">3.1 days</td>
              </tr>
              <tr className="hover:bg-bg-input/50 transition-colors">
                <td className="py-3 text-text-primary font-medium">NAFDAC-0105</td>
                <td className="py-3 text-text-secondary">NAFDAC</td>
                <td className="py-3 text-text-primary font-bold">115</td>
                <td className="py-3 text-brand-green font-bold">96%</td>
                <td className="py-3 text-text-secondary">1.8 days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
