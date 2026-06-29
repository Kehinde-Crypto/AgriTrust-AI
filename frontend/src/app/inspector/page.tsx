'use client';

import { useState } from 'react';

export default function VerifyBatchPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLoadBatch = () => {
    setIsLoaded(true);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate blockchain submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert('Inspection submitted to blockchain successfully!');
  };

  return (
    <div className="flex flex-col max-w-[1200px] w-full">
      {/* Top Action Tabs */}
      <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2 shrink-0">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-default text-text-primary hover:bg-bg-input transition-colors shrink-0 whitespace-nowrap">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          New Batch
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue text-white shadow-lg shadow-brand-blue/20 shrink-0 whitespace-nowrap">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Verify Batch
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-default text-text-primary hover:bg-bg-input transition-colors shrink-0 whitespace-nowrap">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
          Record Handoff
        </button>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm mb-2 tracking-wider">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          BIOSAFETY INSPECTION
        </div>
        <h1 className="text-3xl font-bold text-text-primary mb-2">Verify & Inspect Batch</h1>
        <p className="text-text-secondary">Record your inspection findings on-chain. This cannot be altered once submitted.</p>
      </div>

      {/* Batch Lookup */}
      <div className="flex gap-4 mb-8">
        <div className="relative flex-1 max-w-2xl">
          <input 
            type="text" 
            placeholder="Enter Batch ID or scan QR code" 
            defaultValue="AGT-0042"
            className="w-full bg-bg-card border border-border-default rounded-xl py-4 pl-4 pr-12 text-text-primary focus:outline-none focus:border-brand-blue"
          />
          <button className="absolute right-4 top-4 text-text-muted hover:text-text-primary transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
          </button>
        </div>
        <button 
          onClick={handleLoadBatch}
          className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-lg shadow-brand-blue/20"
        >
          Load Batch
        </button>
      </div>

      {isLoaded && (
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* Main Content Area */}
          <div className="flex-1 w-full bg-bg-card border border-border-subtle rounded-2xl p-6">
            
            {/* Batch Info Card */}
            <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-border-subtle mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#166534] border border-[#22c55e] flex items-center justify-center shrink-0 text-[#22c55e]">
                   <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                   </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-text-primary">AGT-0042</h2>
                  <p className="text-text-secondary">Grade A Cocoa 500kg</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-text-muted text-sm mb-1">Farm</p>
                  <p className="text-text-primary text-sm font-medium">Okafor Family Farm,<br/>Rivers State</p>
                </div>
                <div>
                  <p className="text-text-muted text-sm mb-1">Registered</p>
                  <p className="text-text-primary text-sm font-medium">June 14, 2026</p>
                </div>
                <div>
                  <p className="text-text-muted text-sm mb-1">Status</p>
                  <span className="inline-block px-3 py-1 rounded border border-accent-amber text-accent-amber text-xs font-bold bg-accent-amber/10 tracking-wide">
                    AWAITING INSPECTION
                  </span>
                </div>
              </div>
            </div>

            {/* Inspection Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Row 1 */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Physical weight (kg)</label>
                <input type="text" defaultValue="498.5" className="w-full bg-bg-input border border-border-default rounded-lg py-3 px-4 text-text-primary focus:border-brand-blue outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Quality assessment</label>
                <select className="w-full bg-bg-input border border-border-default rounded-lg py-3 px-4 text-text-primary appearance-none focus:border-brand-blue outline-none transition-colors cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_auto] bg-no-repeat bg-[position:right_1rem_center]">
                  <option>Grade A - Premium</option>
                  <option>Grade B - Standard</option>
                  <option>Grade C - Reject</option>
                </select>
              </div>

              {/* Row 2 */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Storage condition</label>
                <select className="w-full bg-bg-input border border-border-default rounded-lg py-3 px-4 text-text-primary appearance-none focus:border-brand-blue outline-none transition-colors cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_auto] bg-no-repeat bg-[position:right_1rem_center]">
                  <option>Optimal</option>
                  <option>Sub-optimal</option>
                  <option>Poor</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">GMO test result</label>
                <div className="flex gap-4">
                  <label className="flex-1 flex items-center justify-center gap-2 border border-brand-green bg-brand-green/10 text-brand-green rounded-lg py-3 px-4 cursor-pointer">
                    <input type="radio" name="gmo" defaultChecked className="hidden" />
                    <div className="w-4 h-4 rounded-full border-2 border-brand-green flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                    </div>
                    NON-GMO CONFIRMED
                  </label>
                  <label className="flex-1 flex items-center justify-center gap-2 border border-border-default bg-bg-input text-text-secondary hover:text-text-primary rounded-lg py-3 px-4 cursor-pointer">
                    <input type="radio" name="gmo" className="hidden" />
                    <div className="w-4 h-4 rounded-full border-2 border-text-muted flex items-center justify-center"></div>
                    GMO PRESENT
                  </label>
                </div>
              </div>

              {/* Row 3 */}
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Biosafety grade</label>
                <select className="w-full bg-bg-input border border-border-default rounded-lg py-3 px-4 text-text-primary appearance-none focus:border-brand-blue outline-none transition-colors cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_auto] bg-no-repeat bg-[position:right_1rem_center]">
                  <option>A+</option>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </select>
              </div>
              <div className="flex flex-col justify-end">
                <label className="flex items-center gap-3 cursor-pointer py-3 h-12">
                  <div className="relative flex items-center justify-center w-5 h-5 bg-brand-green rounded text-bg-primary">
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-text-primary">Meets NAFDAC standards</span>
                </label>
              </div>
            </div>

            {/* Notes & Inspector ID */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Inspector notes</label>
                <textarea 
                  rows={2} 
                  placeholder="Add any observations, test method reference, or additional comments..."
                  className="w-full bg-bg-input border border-border-default rounded-lg py-3 px-4 text-text-primary focus:border-brand-blue outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Inspector ID</label>
                <input type="text" defaultValue="NAFDAC-0042" readOnly className="w-full bg-bg-input border border-border-default rounded-lg py-3 px-4 text-text-primary focus:outline-none opacity-80 cursor-not-allowed" />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-4 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-lg rounded-xl flex justify-center items-center gap-3 transition-all shadow-lg shadow-brand-blue/20"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting to blockchain...
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  Submit Inspection to Blockchain
                </>
              )}
            </button>
            <p className="text-center text-accent-amber text-sm font-medium mt-4 flex justify-center items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              This action is permanent and cannot be reversed.
            </p>
          </div>

          {/* Info Panel Right side */}
          <div className="w-full lg:w-80 bg-bg-sidebar border border-border-subtle rounded-2xl p-6 shrink-0">
            <h3 className="text-lg font-bold text-text-primary mb-6">What happens next</h3>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-border-subtle">
              <div className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm shrink-0 z-10 ring-4 ring-bg-sidebar">1</div>
                <p className="text-sm text-text-secondary mt-1">Your inspection is recorded as an immutable blockchain transaction.</p>
              </div>
              <div className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm shrink-0 z-10 ring-4 ring-bg-sidebar">2</div>
                <p className="text-sm text-text-secondary mt-1">A biosafety certificate is generated and linked to this batch.</p>
              </div>
              <div className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm shrink-0 z-10 ring-4 ring-bg-sidebar">3</div>
                <p className="text-sm text-text-secondary mt-1">The farmer is notified and the batch status updates to <span className="text-brand-green font-bold">CERTIFIED</span>.</p>
              </div>
              <div className="relative flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm shrink-0 z-10 ring-4 ring-bg-sidebar">4</div>
                <p className="text-sm text-text-secondary mt-1">A QR code is activated for consumer verification.</p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <svg viewBox="0 0 24 24" className="w-20 h-20 text-brand-blue/30 drop-shadow-[0_0_15px_rgba(37,99,235,0.2)]" fill="none" stroke="currentColor" strokeWidth="1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
