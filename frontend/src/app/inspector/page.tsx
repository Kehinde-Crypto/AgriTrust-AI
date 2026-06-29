'use client';

import { useState } from 'react';

export default function InspectorPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate blockchain signing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Certificate signed and issued on-chain!');
  };

  return (
    <div className="flex flex-col max-w-[1200px] w-full mx-auto">
      
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2 tracking-tight">Issue Biosafety Certificate</h1>
        <p className="text-text-secondary">Review inspection data and issue a blockchain-verifiable certificate.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Side: Form */}
        <div className="flex-1 w-full bg-bg-card border border-border-subtle rounded-2xl p-6 lg:p-8">
          
          {/* Batch ID Lookup */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-text-secondary mb-2">Batch ID</label>
            <div className="relative">
              <input 
                type="text" 
                defaultValue="AGT-0042"
                className="w-full bg-bg-input border border-border-default rounded-xl py-3 pl-4 pr-12 text-text-primary focus:outline-none focus:border-brand-blue font-mono text-lg"
              />
              <button className="absolute right-3 top-3 text-text-muted hover:text-text-primary transition-colors">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Row 1 */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Certificate type</label>
              <select className="w-full bg-bg-input border border-border-default rounded-lg py-3 px-4 text-text-primary appearance-none focus:border-brand-blue outline-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_auto] bg-no-repeat bg-[position:right_1rem_center]">
                <option>Export Quality</option>
                <option>Local Distribution</option>
                <option>Processing Only</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Issuing authority</label>
              <select className="w-full bg-bg-input border border-border-default rounded-lg py-3 px-4 text-text-primary appearance-none focus:border-brand-blue outline-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_auto] bg-no-repeat bg-[position:right_1rem_center]">
                <option>NAFDAC - National Agency...</option>
                <option>Ministry of Agriculture</option>
              </select>
            </div>

            {/* Row 2 */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-secondary mb-2">GMO declaration</label>
              <div className="flex gap-4">
                <label className="flex-1 flex items-center justify-center gap-2 border border-brand-green bg-brand-green/10 text-brand-green rounded-lg py-3 px-4 cursor-pointer font-medium tracking-wide text-sm">
                  <input type="radio" name="gmo" defaultChecked className="hidden" />
                  <div className="w-4 h-4 rounded-full border-2 border-brand-green flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-brand-green"></div>
                  </div>
                  NON-GMO
                </label>
                <label className="flex-1 flex items-center justify-center gap-2 border border-border-default bg-bg-input text-text-secondary hover:text-text-primary rounded-lg py-3 px-4 cursor-pointer font-medium tracking-wide text-sm">
                  <input type="radio" name="gmo" className="hidden" />
                  <div className="w-4 h-4 rounded-full border-2 border-text-muted flex items-center justify-center"></div>
                  GMO PRESENT
                </label>
              </div>
            </div>

            {/* Row 3 */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-text-secondary mb-2">Biosafety grade</label>
              <select className="w-full bg-bg-input border border-border-default rounded-lg py-3 px-4 text-brand-green font-medium appearance-none focus:border-brand-blue outline-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2322c55e%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_auto] bg-no-repeat bg-[position:right_1rem_center]">
                <option>Grade A - Premium</option>
                <option>Grade B - Standard</option>
                <option>Grade C - Reject</option>
              </select>
            </div>

            {/* Row 4 */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Valid from</label>
              <input 
                type="date" 
                defaultValue="2026-06-16"
                className="w-full bg-bg-input border border-border-default rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-brand-blue" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Valid until</label>
              <input 
                type="date" 
                defaultValue="2026-12-16"
                className="w-full bg-bg-input border border-border-default rounded-lg py-3 px-4 text-text-primary focus:outline-none focus:border-brand-blue" 
              />
            </div>
          </div>

          {/* Certify Checkbox */}
          <div className="mb-8">
            <label className="flex items-start gap-3 cursor-pointer">
              <div className="relative flex items-center justify-center w-5 h-5 mt-0.5 bg-brand-blue rounded text-white shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="text-text-secondary text-sm leading-relaxed">
                I certify that this batch meets all regulatory biosafety standards and the information provided is true and accurate.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full py-4 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-lg rounded-xl flex justify-center items-center gap-3 transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)]"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Signing to blockchain...
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                Sign & Issue Certificate
              </>
            )}
          </button>
        </div>

        {/* Right Side: Certificate Preview */}
        <div className="w-full lg:w-[420px] shrink-0">
          <h2 className="text-lg font-bold text-text-primary mb-6">Certificate preview</h2>
          
          <div className="bg-[#1a1f2e] border border-brand-blue/30 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
            {/* Background pattern styling (subtle circles) */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            
            {/* Certificate Header */}
            <div className="text-center mb-8 relative z-10">
              <div className="flex justify-center mb-3">
                <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                  <path d="M20 4L8 10V20C8 28 13 35 20 38C27 35 32 28 32 20V10L20 4Z" stroke="#3b82f6" strokeWidth="2" fill="#3b82f6" opacity="0.15" />
                  <path d="M14 20C14 20 17 16 20 16C23 16 26 20 26 20" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <path d="M14 20C14 20 17 24 20 24C23 24 26 20 26 20" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <h3 className="text-white font-serif tracking-widest font-bold text-sm">AGRITRACE BIOSAFETY CERTIFICATE</h3>
              <div className="w-16 h-0.5 bg-brand-blue/50 mx-auto mt-3"></div>
            </div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              {/* Badge/Seal */}
              <div className="w-20 h-20 bg-[#166534] rounded-full border-4 border-[#14532d] shadow-[0_0_15px_rgba(22,101,52,0.5)] flex flex-col items-center justify-center text-white rotate-[-10deg]">
                <svg viewBox="0 0 24 24" className="w-6 h-6 mb-0.5 text-white" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                <span className="text-[9px] font-bold tracking-widest text-[#4ade80]">CERTIFIED</span>
              </div>

              {/* QR Code Placeholder */}
              <div className="w-20 h-20 bg-white p-1 rounded-sm border border-border-default/50">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-black opacity-90">
                  <path d="M10,10 h25 v25 h-25 z M15,15 h15 v15 h-15 z M10,65 h25 v25 h-25 z M15,70 h15 v15 h-15 z M65,10 h25 v25 h-25 z M70,15 h15 v15 h-15 z M45,45 h10 v10 h-10 z M30,10 h15 v10 h-15 z M30,30 h10 v15 h-10 z M65,45 h25 v10 h-25 z M45,65 h15 v25 h-15 z M65,65 h10 v10 h-10 z M80,65 h10 v10 h-10 z M65,80 h25 v10 h-25 z" />
                </svg>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="space-y-4 relative z-10 border-t border-border-subtle/30 pt-6">
              <div className="flex justify-between items-end border-b border-border-subtle/20 pb-2">
                <span className="text-xs text-text-muted font-medium uppercase tracking-wider">Certificate ID</span>
                <span className="text-sm font-mono text-white font-bold">BCT-8942-0042</span>
              </div>
              <div className="flex justify-between items-end border-b border-border-subtle/20 pb-2">
                <span className="text-xs text-text-muted font-medium uppercase tracking-wider">Batch Ref</span>
                <span className="text-sm font-mono text-brand-blue font-bold">AGT-0042</span>
              </div>
              <div className="flex justify-between items-end border-b border-border-subtle/20 pb-2">
                <span className="text-xs text-text-muted font-medium uppercase tracking-wider">Issue Date</span>
                <span className="text-sm font-bold text-white">16 Jun 2026</span>
              </div>
              <div className="flex justify-between items-end border-b border-border-subtle/20 pb-2">
                <span className="text-xs text-text-muted font-medium uppercase tracking-wider">Expiry Date</span>
                <span className="text-sm font-bold text-white">16 Dec 2026</span>
              </div>
              <div className="flex justify-between items-end border-b border-border-subtle/20 pb-2">
                <span className="text-xs text-text-muted font-medium uppercase tracking-wider">Grade</span>
                <span className="text-sm font-bold text-brand-green">Grade A - Premium</span>
              </div>
              <div className="flex justify-between items-end border-b border-border-subtle/20 pb-2">
                <span className="text-xs text-text-muted font-medium uppercase tracking-wider">GMO Status</span>
                <span className="text-sm font-bold text-white">Non-GMO</span>
              </div>
              <div className="flex justify-between items-end border-b border-border-subtle/20 pb-2">
                <span className="text-xs text-text-muted font-medium uppercase tracking-wider">Inspector</span>
                <span className="text-sm font-bold text-white">NAFDAC-0042</span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center border-t border-border-subtle/30 pt-4">
              <p className="text-[10px] text-text-muted uppercase tracking-widest">Powered by AgriTrace Blockchain</p>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
}
