'use client';

export default function LoginCard() {
  const handleWeb3Connect = () => {
    // Web3 Wallet integration coming in Sprint 3
    alert('Web3 Wallet integration coming soon!');
  };

  return (
    <main className="flex flex-col items-center w-full max-w-md bg-bg-card border border-border-subtle rounded-2xl p-10">
      <h1 className="text-3xl font-bold text-text-primary mb-2">
        Welcome back
      </h1>
      <p className="text-text-secondary mb-10">
        Sign in to access your AgriTrace dashboard.
      </p>

      {/* Sign In Button — redirects to Auth0 */}
      <a
        href="/auth/login"
        className="w-full py-4 bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold rounded-xl text-center transition-all duration-300 shadow-lg shadow-brand-blue/20 mb-4"
      >
        Sign In
      </a>

      {/* Divider */}
      <div className="flex items-center w-full my-4">
        <div className="flex-1 h-px bg-border-default" />
        <span className="px-4 text-text-muted text-sm">OR</span>
        <div className="flex-1 h-px bg-border-default" />
      </div>

      {/* Web3 Wallet Button (placeholder for Sprint 3) */}
      <button
        type="button"
        onClick={handleWeb3Connect}
        className="w-full py-4 border-2 border-brand-blue/40 text-text-primary font-semibold rounded-xl text-center transition-all duration-300 hover:border-brand-blue/70 hover:bg-brand-blue/5 cursor-pointer flex items-center justify-center gap-3"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#3b82f6" strokeWidth="2">
          <rect x="2" y="6" width="20" height="14" rx="2" />
          <path d="M16 14H18" strokeLinecap="round" />
          <path d="M2 10H22" />
        </svg>
        Connect Web3 Wallet
      </button>

      {/* Create Account Link */}
      <p className="mt-8 text-text-secondary text-sm">
        New to AgriTrace?{' '}
        <a href="/auth/login?screen_hint=signup" className="text-brand-green font-medium hover:underline">
          Create account
        </a>
      </p>
    </main>
  );
}
