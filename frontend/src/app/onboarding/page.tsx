'use client';

import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const roles = [
  {
    id: 'FARMER',
    name: 'Farmer',
    description: 'Register produce batches, log farming practices, and receive biosafety certificates.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" fill="#064e3b" opacity="0.3" />
        <path d="M24 34V22" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M24 22C24 18 20 16 18 14" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M24 22C24 18 28 16 30 14" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <ellipse cx="24" cy="35" rx="6" ry="2" fill="#22c55e" opacity="0.3" />
        <circle cx="18" cy="13" r="3" fill="#22c55e" opacity="0.6" />
        <circle cx="30" cy="13" r="3" fill="#22c55e" opacity="0.6" />
      </svg>
    ),
    color: '#22c55e',
    borderColor: 'border-green-500/30',
    hoverBorder: 'hover:border-green-500/60',
    selectedBg: 'bg-green-500/10',
    selectedBorder: 'border-green-500',
  },
  {
    id: 'INSPECTOR',
    name: 'Inspector',
    description: 'Verify produce quality, record biosafety compliance, and issue certifications.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" fill="#1e3a5f" opacity="0.3" />
        <path d="M16 24L22 30L32 18" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 8L30 12V20L24 24L18 20V12L24 8Z" stroke="#3b82f6" strokeWidth="2" fill="#3b82f6" opacity="0.2" />
      </svg>
    ),
    color: '#3b82f6',
    borderColor: 'border-blue-500/30',
    hoverBorder: 'hover:border-blue-500/60',
    selectedBg: 'bg-blue-500/10',
    selectedBorder: 'border-blue-500',
  },
  {
    id: 'DISTRIBUTOR',
    name: 'Distributor',
    description: 'Record handoffs between warehouses, transport legs, and market delivery.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" fill="#4a2f1b" opacity="0.3" />
        <rect x="10" y="20" width="18" height="12" rx="2" stroke="#f59e0b" strokeWidth="2" fill="#f59e0b" opacity="0.15" />
        <path d="M28 20H34L38 26V32H28V20Z" stroke="#f59e0b" strokeWidth="2" fill="#f59e0b" opacity="0.15" />
        <circle cx="16" cy="34" r="3" stroke="#f59e0b" strokeWidth="2" fill="none" />
        <circle cx="34" cy="34" r="3" stroke="#f59e0b" strokeWidth="2" fill="none" />
      </svg>
    ),
    color: '#f59e0b',
    borderColor: 'border-amber-500/30',
    hoverBorder: 'hover:border-amber-500/60',
    selectedBg: 'bg-amber-500/10',
    selectedBorder: 'border-amber-500',
  },
  {
    id: 'REGULATOR',
    name: 'Regulator',
    description: 'Monitor supply chain network health, compliance rates, and flag violations.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" fill="#1e3a5f" opacity="0.3" />
        <rect x="12" y="28" width="5" height="10" rx="1" fill="#06b6d4" opacity="0.6" />
        <rect x="19" y="22" width="5" height="16" rx="1" fill="#06b6d4" opacity="0.7" />
        <rect x="26" y="16" width="5" height="22" rx="1" fill="#06b6d4" opacity="0.8" />
        <rect x="33" y="12" width="5" height="26" rx="1" fill="#06b6d4" opacity="0.9" />
      </svg>
    ),
    color: '#06b6d4',
    borderColor: 'border-cyan-500/30',
    hoverBorder: 'hover:border-cyan-500/60',
    selectedBg: 'bg-cyan-500/10',
    selectedBorder: 'border-cyan-500',
  },
  {
    id: 'CONSUMER',
    name: 'Consumer',
    description: 'Scan QR codes to verify the origin and safety of produce before you buy.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="22" fill="#374151" opacity="0.3" />
        <circle cx="24" cy="18" r="6" stroke="#94a3b8" strokeWidth="2" fill="#94a3b8" opacity="0.2" />
        <path d="M14 38C14 32 18 28 24 28C30 28 34 32 34 38" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    ),
    color: '#94a3b8',
    borderColor: 'border-slate-400/30',
    hoverBorder: 'hover:border-slate-400/60',
    selectedBg: 'bg-slate-400/10',
    selectedBorder: 'border-slate-400',
  },
];

export default function OnboardingPage() {
  const { user, isLoading } = useUser();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleContinue = async () => {
    if (!selectedRole) return;
    setIsSaving(true);

    // TODO: Save role to backend via API call
    // For now, simulate a save and redirect
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Redirect based on selected role
    if (selectedRole === 'INSPECTOR') {
      window.location.href = '/inspector';
    } else if (selectedRole === 'REGULATOR') {
      window.location.href = '/regulator';
    } else {
      window.location.href = '/dashboard';
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-2 border-brand-green border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
          <path
            d="M20 4L8 10V20C8 28 13 35 20 38C27 35 32 28 32 20V10L20 4Z"
            stroke="#22c55e"
            strokeWidth="2"
            fill="#22c55e"
            opacity="0.15"
          />
          <path
            d="M14 20C14 20 17 16 20 16C23 16 26 20 26 20"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M14 20C14 20 17 24 20 24C23 24 26 20 26 20"
            stroke="#22c55e"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <span className="text-2xl font-bold text-text-primary tracking-tight">AgriTrace</span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-text-primary text-center mb-2">
        Welcome to AgriTrace!
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-brand-green to-cyan-400 bg-clip-text text-transparent">
        Choose your role
      </h2>
      <p className="text-text-secondary text-center text-lg mb-12 max-w-lg">
        Select the role that best describes how you participate in the agricultural supply chain.
      </p>

      {/* Role Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl w-full mb-10 px-4">
        {roles.map((role) => {
          const isSelected = selectedRole === role.id;
          return (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`
                flex flex-col items-center text-center p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer
                bg-bg-card
                ${isSelected
                  ? `${role.selectedBorder} ${role.selectedBg} scale-[1.03] shadow-lg`
                  : `${role.borderColor} ${role.hoverBorder} hover:bg-bg-input`
                }
              `}
              style={isSelected ? { boxShadow: `0 0 30px ${role.color}15` } : {}}
            >
              {/* Icon */}
              <div className="mb-4 relative">
                {role.icon}
                {isSelected && (
                  <div
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: role.color }}
                  >
                    <svg viewBox="0 0 16 16" className="w-3 h-3" fill="white">
                      <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {role.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {role.description}
              </p>
            </button>
          );
        })}
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={!selectedRole || isSaving}
        className={`
          w-full max-w-2xl py-4 rounded-xl text-lg font-semibold transition-all duration-300
          ${selectedRole
            ? 'bg-brand-blue hover:bg-brand-blue-dark text-white cursor-pointer shadow-lg shadow-brand-blue/20'
            : 'bg-bg-input text-text-muted cursor-not-allowed'
          }
        `}
      >
        {isSaving ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Saving...
          </span>
        ) : (
          'Continue'
        )}
      </button>

      {/* Subtext */}
      <p className="text-text-muted text-sm mt-4 mb-8">
        You can update your role later in settings.
      </p>

      {/* Footer */}
      <footer className="text-text-muted text-sm">
        © 2026 AgriTrace. Every harvest. Every handoff. On-chain.
      </footer>
    </div>
  );
}
