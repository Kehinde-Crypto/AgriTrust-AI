'use client';

export default function RegulatorDashboardPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-text-primary mb-2">Network Overview</h1>
        <p className="text-text-secondary">Real-time visibility across the AgriTrace agricultural supply chain.</p>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Card 1 */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4 transition-transform hover:scale-[1.02]">
          <div className="w-12 h-12 rounded-full bg-brand-green/20 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-text-primary">4,217</div>
            <div className="text-sm text-text-secondary">Compliant batches</div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4 transition-transform hover:scale-[1.02]">
          <div className="w-12 h-12 rounded-full bg-accent-amber/20 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent-amber" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-text-primary">38</div>
            <div className="text-sm text-text-secondary">Flagged for review</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4 transition-transform hover:scale-[1.02]">
          <div className="w-12 h-12 rounded-full bg-accent-red/20 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-accent-red" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-text-primary">6</div>
            <div className="text-sm text-text-secondary">Non-compliant alerts</div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-5 flex items-center gap-4 transition-transform hover:scale-[1.02]">
          <div className="w-12 h-12 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
          </div>
          <div>
            <div className="text-2xl font-bold text-text-primary">1,204</div>
            <div className="text-sm text-text-secondary">Active farms registered</div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-bg-card border border-border-subtle rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-text-primary">Compliance network map</h2>
          <button className="text-text-muted hover:text-text-primary transition-colors">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
          </button>
        </div>
        
        {/* Placeholder Map Container */}
        <div className="w-full h-80 bg-bg-input rounded-lg border border-border-default flex items-center justify-center relative overflow-hidden">
          {/* Decorative Grid Lines to simulate map network */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          <div className="text-center z-10">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-brand-green/40 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <p className="text-text-muted font-medium">Interactive Map integration pending real GPS coordinate data.</p>
            <p className="text-text-secondary text-sm mt-1">Live data from blockchain state.</p>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-bg-card/90 backdrop-blur border border-border-subtle rounded-lg p-3 text-xs flex flex-col gap-2">
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brand-green"></div><span className="text-text-secondary">Compliant</span></div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-amber"></div><span className="text-text-secondary">Pending review</span></div>
            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-red"></div><span className="text-text-secondary">Flagged</span></div>
          </div>
        </div>
      </div>

      {/* Bottom Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recent Alerts */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-6 flex flex-col h-full">
          <h2 className="text-lg font-bold text-text-primary mb-6">Recent compliance alerts</h2>
          <div className="space-y-5 flex-1">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent-red mt-2 shrink-0"></div>
              <div className="flex-1">
                <p className="text-text-primary font-medium text-sm">Batch AGT-1103 flagged: GMO disclosure missing</p>
                <p className="text-text-muted text-xs mt-1">GreenFields Farms • Kaduna State</p>
              </div>
              <button className="text-brand-blue text-sm font-medium hover:underline">Review</button>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent-amber mt-2 shrink-0"></div>
              <div className="flex-1">
                <p className="text-text-primary font-medium text-sm">Farm ID #0892 inspection overdue</p>
                <p className="text-text-muted text-xs mt-1">Sunrise Agro Ltd. • Oyo State</p>
              </div>
              <button className="text-brand-blue text-sm font-medium hover:underline">Review</button>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent-red mt-2 shrink-0"></div>
              <div className="flex-1">
                <p className="text-text-primary font-medium text-sm">Batch AGT-0987 failed residue test <span className="text-text-muted">(Chlorpyrifos)</span></p>
                <p className="text-text-muted text-xs mt-1">Ife Agri Cooperative • Edo State</p>
              </div>
              <button className="text-brand-blue text-sm font-medium hover:underline">Review</button>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-accent-amber mt-2 shrink-0"></div>
              <div className="flex-1">
                <p className="text-text-primary font-medium text-sm">Incomplete documentation for Batch AGT-1044</p>
                <p className="text-text-muted text-xs mt-1">Niger Delta Rice Farms • Rivers State</p>
              </div>
              <button className="text-brand-blue text-sm font-medium hover:underline">Review</button>
            </div>
          </div>
        </div>

        {/* Top Regions Chart */}
        <div className="bg-bg-card border border-border-subtle rounded-xl p-6 flex flex-col h-full">
          <h2 className="text-lg font-bold text-text-primary mb-6">Top performing regions</h2>
          
          <div className="space-y-5 flex-1 flex flex-col justify-center">
            
            {/* Region 1 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-text-primary font-medium">Rivers State</span>
                <span className="text-brand-green font-bold">99.1%</span>
              </div>
              <div className="w-full bg-bg-input rounded-full h-2">
                <div className="bg-brand-green h-2 rounded-full" style={{ width: '99.1%' }}></div>
              </div>
            </div>

            {/* Region 2 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-text-primary font-medium">Lagos</span>
                <span className="text-brand-green font-bold">98.4%</span>
              </div>
              <div className="w-full bg-bg-input rounded-full h-2">
                <div className="bg-brand-green h-2 rounded-full" style={{ width: '98.4%' }}></div>
              </div>
            </div>

            {/* Region 3 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-text-primary font-medium">Kano State</span>
                <span className="text-brand-green font-bold">97.6%</span>
              </div>
              <div className="w-full bg-bg-input rounded-full h-2">
                <div className="bg-brand-green h-2 rounded-full" style={{ width: '97.6%' }}></div>
              </div>
            </div>

            {/* Region 4 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-text-primary font-medium">Oyo State</span>
                <span className="text-brand-green font-bold">96.8%</span>
              </div>
              <div className="w-full bg-bg-input rounded-full h-2">
                <div className="bg-brand-green h-2 rounded-full" style={{ width: '96.8%' }}></div>
              </div>
            </div>

            {/* Region 5 */}
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-text-primary font-medium">Kaduna State</span>
                <span className="text-brand-green font-bold">95.3%</span>
              </div>
              <div className="w-full bg-bg-input rounded-full h-2">
                <div className="bg-brand-green h-2 rounded-full" style={{ width: '95.3%' }}></div>
              </div>
            </div>
            
            {/* Chart X-axis */}
            <div className="flex justify-between text-xs text-text-muted mt-2 border-t border-border-default pt-2">
              <span>0</span>
              <span>20</span>
              <span>40</span>
              <span>60</span>
              <span>80</span>
              <span>100</span>
            </div>
            <p className="text-center text-xs text-text-muted mt-1">Compliance rate (%)</p>
          </div>
        </div>

      </div>
    </div>
  );
}
