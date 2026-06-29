'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';

const menuItems = [
  { name: 'Dashboard', icon: 'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z', href: '/dashboard' },
  { name: 'Batches', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', href: '/dashboard/batches' },
  { name: 'Farms', icon: 'M3 21v-8a2 2 0 012-2h14a2 2 0 012 2v8M12 3v8m0 0a4 4 0 00-4 4m4-4a4 4 0 014 4', href: '/dashboard/farms' },
  { name: 'Traceability', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1', href: '/dashboard/trace' },
  { name: 'Register', icon: 'M9 12h6m-3-3v6m-9 2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2H6a2 2 0 01-2-2z', href: '/inspector' },
  { name: 'Compliance', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', href: '/dashboard/compliance' },
  { name: 'Alerts', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', href: '/dashboard/alerts' },
  { name: 'Reports', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', href: '/dashboard/reports' },
  { name: 'Audit Trail', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', href: '/dashboard/audit' },
  { name: 'Smart Contracts', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', href: '/dashboard/contracts' },
  { name: 'Integrations', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z', href: '/dashboard/integrations' },
  { name: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', href: '/dashboard/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useUser();

  // Determine user initials
  const initials = user?.name
    ? user.name.split(' ').map((n) => n[0]).join('').substring(0, 2).toUpperCase()
    : 'U';

  return (
    <aside className="w-64 bg-bg-sidebar border-r border-border-subtle h-screen flex flex-col sticky top-0 overflow-y-auto hidden md:flex shrink-0">
      
      {/* Brand */}
      <div className="flex items-center gap-3 p-6 sticky top-0 bg-bg-sidebar z-10 border-b border-border-subtle/50">
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <path d="M20 4L8 10V20C8 28 13 35 20 38C27 35 32 28 32 20V10L20 4Z" stroke="#22c55e" strokeWidth="2" fill="#22c55e" opacity="0.15" />
          <path d="M14 20C14 20 17 16 20 16C23 16 26 20 26 20" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M14 20C14 20 17 24 20 24C23 24 26 20 26 20" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
        <span className="text-xl font-bold text-text-primary tracking-tight">AgriTrace</span>
      </div>

      {/* User Profile */}
      <div className="p-4 mx-4 mt-6 mb-4 flex items-center gap-3 rounded-xl border border-border-subtle bg-bg-primary">
        <div className={`w-10 h-10 rounded-full ${
          pathname.startsWith('/farmer') ? 'bg-brand-green' : 
          pathname.startsWith('/regulator') ? 'bg-[#9333ea]' : 
          'bg-brand-blue'
        } flex items-center justify-center text-white font-bold shrink-0`}>
          {initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-text-primary truncate">
            {user?.name || user?.email || 'Loading...'}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
              pathname.startsWith('/farmer') ? 'bg-brand-green/20 text-brand-green' : 
              pathname.startsWith('/regulator') ? 'bg-[#9333ea]/20 text-[#c084fc]' : 
              'bg-brand-blue/20 text-brand-blue'
            }`}>
              {pathname.startsWith('/farmer') ? 'FARMER' : pathname.startsWith('/regulator') ? 'REGULATOR' : 'INSPECTOR'}
            </span>
          </div>
        </div>
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-text-muted" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1 mb-8">
        {menuItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          
          let activeClass = 'bg-sidebar-active text-white font-medium';
          if (isActive && pathname.startsWith('/farmer')) activeClass = 'bg-brand-green/20 text-brand-green font-medium border-l-2 border-brand-green';
          else if (isActive && pathname.startsWith('/regulator')) activeClass = 'bg-[#9333ea]/20 text-[#c084fc] font-medium border-l-2 border-[#c084fc]';
          else if (isActive) activeClass = 'bg-brand-blue/20 text-brand-blue font-medium border-l-2 border-brand-blue';

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors
                ${isActive 
                  ? activeClass 
                  : 'text-text-secondary hover:bg-bg-input hover:text-text-primary'
                }
              `}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border-subtle mt-auto sticky bottom-0 bg-bg-sidebar">
        <a 
          href="/auth/logout"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-text-secondary hover:bg-bg-input hover:text-accent-red transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </a>
      </div>
    </aside>
  );
}
