'use client';

export default function TopBar() {
  return (
    <header className="h-16 border-b border-border-subtle bg-bg-primary flex items-center justify-between px-6 sticky top-0 z-10 shrink-0">
      
      {/* Mobile Menu Button (Visible only on small screens) */}
      <div className="flex md:hidden items-center">
        <button className="text-text-secondary hover:text-text-primary">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Hamburger / Empty spacer for desktop alignment */}
      <div className="hidden md:flex items-center">
        <button className="text-text-secondary hover:text-text-primary mr-4">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Global Search Bar */}
      <div className="flex-1 max-w-xl px-4 hidden sm:flex">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-border-subtle rounded-lg leading-5 bg-bg-input text-text-primary placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-brand-blue focus:border-brand-blue sm:text-sm transition-colors"
            placeholder="Search batches IDs to inspect..."
          />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-4">
        {/* Network / Blockchain Status */}
        <button className="text-text-muted hover:text-brand-purple transition-colors p-1" title="Blockchain Network Status">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        </button>
        
        {/* Notifications */}
        <div className="relative">
          <button className="text-text-muted hover:text-text-primary transition-colors p-1">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-accent-red ring-2 ring-bg-primary"></span>
        </div>
        
        {/* Help/Support */}
        <button className="text-text-muted hover:text-text-primary transition-colors p-1">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

        {/* Theme Toggle (Decorative) */}
        <button className="text-text-muted hover:text-text-primary transition-colors p-1">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>
    </header>
  );
}
