export default function FarmerAnalyticsPage() {
  return (
    <div className="flex flex-col max-w-[1200px] w-full mx-auto space-y-6">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-text-primary mb-1 tracking-tight">My Analytics</h1>
        <p className="text-text-secondary">Track your produce output, compliance history, and supply chain performance.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center shrink-0 text-brand-green">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 20A10 10 0 1120 11C20 15 17.5 20 11 20Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 20C11 15 13.5 11 20 11" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-text-primary">14</h3>
            <p className="text-xs font-medium text-text-muted mt-0.5">Total batches registered</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-green/10 border border-brand-green/20 flex items-center justify-center shrink-0 text-brand-green">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-text-primary">92.8%</h3>
            <p className="text-xs font-medium text-text-muted mt-0.5">Compliance rate</p>
            <p className="text-[10px] font-bold text-brand-green mt-1">▲ 6.4% vs last 6 months</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center shrink-0 text-brand-blue">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M5 6l1 14h12l1-14M10 10v6M14 10v6" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-text-primary">6,240 kg</h3>
            <p className="text-xs font-medium text-text-muted mt-0.5">Total produce traced</p>
            <p className="text-[10px] font-bold text-brand-blue mt-1">▲ 1,120 kg vs last 6 months</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-accent-amber/10 border border-accent-amber/20 flex items-center justify-center shrink-0 text-accent-amber">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-text-primary">4.2 days</h3>
            <p className="text-xs font-medium text-text-muted mt-0.5">Avg. time to certification</p>
            <p className="text-[10px] font-bold text-accent-amber mt-1">▲ 0.6 days vs last 6 months</p>
          </div>
        </div>
      </div>

      {/* Chart: Monthly Batch Registrations */}
      <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-lg font-bold text-text-primary">Monthly batch registrations</h2>
            <div className="flex items-center gap-6 mt-2">
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <span className="w-3 h-3 rounded-sm bg-brand-green"></span> Certified batches
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <span className="w-3 h-3 rounded-sm bg-accent-amber"></span> Pending batches
              </div>
            </div>
          </div>
          <select className="bg-bg-input border border-border-default rounded-md px-3 py-1.5 text-sm text-text-primary outline-none focus:border-brand-blue">
            <option>Last 6 months</option>
            <option>This year</option>
          </select>
        </div>
        
        {/* CSS Mock Bar Chart */}
        <div className="h-64 flex items-end justify-between px-2 pt-8 border-b border-border-subtle/50 pb-2 relative">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-text-muted pb-8">
            <span>25</span><span>20</span><span>15</span><span>10</span><span>5</span><span>0</span>
          </div>
          {/* Grid lines */}
          <div className="absolute left-6 right-0 top-0 h-full flex flex-col justify-between pb-8 z-0">
            <div className="w-full border-b border-border-subtle/30"></div>
            <div className="w-full border-b border-border-subtle/30"></div>
            <div className="w-full border-b border-border-subtle/30"></div>
            <div className="w-full border-b border-border-subtle/30"></div>
            <div className="w-full border-b border-border-subtle/30"></div>
            <div className="w-full border-b border-border-subtle/30"></div>
          </div>
          
          {/* Bars */}
          {[
            { month: 'DEC 2025', cert: 12, pend: 3 },
            { month: 'JAN 2026', cert: 18, pend: 4 },
            { month: 'FEB 2026', cert: 15, pend: 2 },
            { month: 'MAR 2026', cert: 20, pend: 3 },
            { month: 'APR 2026', cert: 16, pend: 2 },
            { month: 'MAY 2026', cert: 21, pend: 3 }
          ].map(data => (
            <div key={data.month} className="flex flex-col items-center flex-1 z-10">
              <div className="flex items-end gap-1 h-48 mb-2">
                <div className="w-8 bg-brand-green rounded-t-sm relative group flex justify-center items-end" style={{ height: `${(data.cert / 25) * 100}%` }}>
                  <span className="absolute -top-6 text-xs font-bold text-text-primary">{data.cert}</span>
                </div>
                <div className="w-8 bg-accent-amber rounded-t-sm relative group flex justify-center items-end" style={{ height: `${(data.pend / 25) * 100}%` }}>
                  <span className="absolute -top-6 text-xs font-bold text-text-primary">{data.pend}</span>
                </div>
              </div>
              <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider">{data.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Crop Breakdown */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
          <h2 className="text-lg font-bold text-text-primary mb-6">Crop breakdown</h2>
          <div className="flex items-center gap-8">
            {/* Pie Chart Using CSS Conic Gradient */}
            <div className="relative w-48 h-48 rounded-full flex items-center justify-center shrink-0" 
                 style={{ background: `conic-gradient(
                   #2563eb 0% 42%,       /* Cocoa: 42% (blue) */
                   #22c55e 42% 70%,      /* Cassava: 28% (green) */
                   #9333ea 70% 88%,      /* Cashew: 18% (purple) */
                   #64748b 88% 100%      /* Others: 12% (gray) */
                 )`}}>
              {/* Inner Circle for Donut */}
              <div className="w-32 h-32 bg-bg-card rounded-full flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-text-primary">14</span>
                <span className="text-[10px] text-text-muted font-bold uppercase text-center leading-tight">Total<br/>batches</span>
              </div>
              
              {/* Pie labels (approximate absolute positioning) */}
              <div className="absolute top-1/4 right-3 text-white text-xs font-bold">42%</div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold">28%</div>
              <div className="absolute top-1/3 left-3 text-white text-xs font-bold">18%</div>
              <div className="absolute top-4 left-1/3 text-white text-xs font-bold">12%</div>
            </div>

            {/* Legend */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-brand-blue"></span><span className="text-sm text-text-secondary">Cocoa</span></div>
                <div className="text-sm font-medium text-text-primary">42% (6)</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-brand-green"></span><span className="text-sm text-text-secondary">Cassava</span></div>
                <div className="text-sm font-medium text-text-primary">28% (4)</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#9333ea]"></span><span className="text-sm text-text-secondary">Cashew</span></div>
                <div className="text-sm font-medium text-text-primary">18% (3)</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-text-muted"></span><span className="text-sm text-text-secondary">Others</span></div>
                <div className="text-sm font-medium text-text-primary">12% (1)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Timeline */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-6 flex flex-col">
          <h2 className="text-lg font-bold text-text-primary mb-6">Compliance timeline</h2>
          
          <div className="flex-1 space-y-5 relative before:absolute before:inset-0 before:ml-[7px] before:h-full before:w-0.5 before:bg-border-subtle">
            
            <div className="relative flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-brand-green ring-4 ring-bg-card z-10 shrink-0 mt-0.5"></div>
              <div className="flex-1 flex justify-between gap-4">
                <div>
                  <p className="text-sm text-brand-green font-medium mb-0.5">AGT-0042</p>
                  <p className="text-sm text-text-primary">Biosafety certificate issued</p>
                </div>
                <span className="text-xs text-text-muted whitespace-nowrap">3 days ago</span>
              </div>
            </div>
            
            <div className="relative flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-brand-green ring-4 ring-bg-card z-10 shrink-0 mt-0.5"></div>
              <div className="flex-1 flex justify-between gap-4">
                <div>
                  <p className="text-sm text-brand-green font-medium mb-0.5">AGT-0038</p>
                  <p className="text-sm text-text-primary">Inspection completed</p>
                </div>
                <span className="text-xs text-text-muted whitespace-nowrap">7 days ago</span>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-brand-green ring-4 ring-bg-card z-10 shrink-0 mt-0.5"></div>
              <div className="flex-1 flex justify-between gap-4">
                <div>
                  <p className="text-sm text-brand-green font-medium mb-0.5">AGT-0035</p>
                  <p className="text-sm text-text-primary">Biosafety certificate issued</p>
                </div>
                <span className="text-xs text-text-muted whitespace-nowrap">12 days ago</span>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-accent-amber ring-4 ring-bg-card z-10 shrink-0 mt-0.5"></div>
              <div className="flex-1 flex justify-between gap-4">
                <div>
                  <p className="text-sm text-accent-amber font-medium mb-0.5">AGT-0041</p>
                  <p className="text-sm text-text-primary">Inspection scheduled</p>
                </div>
                <span className="text-xs text-text-muted whitespace-nowrap">2 days ago</span>
              </div>
            </div>

            <div className="relative flex items-start gap-4">
              <div className="w-4 h-4 rounded-full bg-accent-amber ring-4 ring-bg-card z-10 shrink-0 mt-0.5"></div>
              <div className="flex-1 flex justify-between gap-4">
                <div>
                  <p className="text-sm text-accent-amber font-medium mb-0.5">AGT-0040</p>
                  <p className="text-sm text-text-primary">Awaiting inspection</p>
                </div>
                <span className="text-xs text-text-muted whitespace-nowrap">5 days ago</span>
              </div>
            </div>

          </div>

          <button className="mt-4 text-brand-blue text-sm font-semibold flex items-center gap-1 hover:text-brand-blue-dark transition-colors self-start">
            View all timeline events 
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" /></svg>
          </button>
        </div>

      </div>

      {/* Recent Batch Performance Table */}
      <div className="bg-bg-card border border-border-subtle rounded-xl p-6">
        <h2 className="text-lg font-bold text-text-primary mb-4">Recent batch performance</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-subtle">
                <th className="py-3 text-xs font-semibold text-text-muted uppercase tracking-wider font-sans">Batch ID</th>
                <th className="py-3 text-xs font-semibold text-text-muted uppercase tracking-wider font-sans">Crop</th>
                <th className="py-3 text-xs font-semibold text-text-muted uppercase tracking-wider font-sans">Quantity</th>
                <th className="py-3 text-xs font-semibold text-text-muted uppercase tracking-wider font-sans">Days to certify</th>
                <th className="py-3 text-xs font-semibold text-text-muted uppercase tracking-wider font-sans">Final grade</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-border-subtle/50 hover:bg-bg-input/50 transition-colors">
                <td className="py-3 text-text-primary font-medium">AGT-0042</td>
                <td className="py-3 text-text-secondary">Cocoa</td>
                <td className="py-3 text-text-secondary">500 kg</td>
                <td className="py-3"><span className="px-2.5 py-0.5 border border-brand-green text-brand-green rounded text-xs font-bold tracking-wide">3 days</span></td>
                <td className="py-3 text-text-primary font-medium">A+</td>
              </tr>
              <tr className="border-b border-border-subtle/50 hover:bg-bg-input/50 transition-colors">
                <td className="py-3 text-text-primary font-medium">AGT-0038</td>
                <td className="py-3 text-text-secondary">Cassava</td>
                <td className="py-3 text-text-secondary">800 kg</td>
                <td className="py-3"><span className="px-2.5 py-0.5 border border-brand-green text-brand-green rounded text-xs font-bold tracking-wide">4 days</span></td>
                <td className="py-3 text-text-primary font-medium">A</td>
              </tr>
              <tr className="border-b border-border-subtle/50 hover:bg-bg-input/50 transition-colors">
                <td className="py-3 text-text-primary font-medium">AGT-0035</td>
                <td className="py-3 text-text-secondary">Cashew</td>
                <td className="py-3 text-text-secondary">300 kg</td>
                <td className="py-3"><span className="px-2.5 py-0.5 border border-brand-green text-brand-green rounded text-xs font-bold tracking-wide">5 days</span></td>
                <td className="py-3 text-text-primary font-medium">B+</td>
              </tr>
              <tr className="border-b border-border-subtle/50 hover:bg-bg-input/50 transition-colors">
                <td className="py-3 text-text-primary font-medium">AGT-0029</td>
                <td className="py-3 text-text-secondary">Palm oil</td>
                <td className="py-3 text-text-secondary">1,200 kg</td>
                <td className="py-3"><span className="px-2.5 py-0.5 border border-accent-amber text-accent-amber rounded text-xs font-bold tracking-wide">8 days</span></td>
                <td className="py-3 text-text-primary font-medium">A</td>
              </tr>
              <tr className="hover:bg-bg-input/50 transition-colors">
                <td className="py-3 text-text-primary font-medium">AGT-0024</td>
                <td className="py-3 text-text-secondary">Soybean</td>
                <td className="py-3 text-text-secondary">450 kg</td>
                <td className="py-3"><span className="px-2.5 py-0.5 border border-accent-amber text-accent-amber rounded text-xs font-bold tracking-wide">10 days</span></td>
                <td className="py-3 text-text-primary font-medium">B</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 text-text-muted text-sm pt-4 pb-8">
        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        All analytics are anchored on the AgriTrace blockchain for transparency and trust.
      </div>
    </div>
  );
}
