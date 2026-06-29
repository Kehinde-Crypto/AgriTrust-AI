import { auth0 } from '@/lib/auth0';
import { redirect } from 'next/navigation';
import LoginCard from '@/components/auth/LoginCard';

export default async function Home() {
  const session = await auth0.getSession();
  const user = session?.user;

  // If user is logged in, redirect to onboarding (role selection)
  if (user) {
    redirect('/onboarding');
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen px-4">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <svg viewBox="0 0 40 40" fill="none" className="w-12 h-12">
          <path d="M20 4L8 10V20C8 28 13 35 20 38C27 35 32 28 32 20V10L20 4Z" stroke="#22c55e" strokeWidth="2" fill="#22c55e" opacity="0.15" />
          <path d="M14 20C14 20 17 16 20 16C23 16 26 20 26 20" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M14 20C14 20 17 24 20 24C23 24 26 20 26 20" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
        <span className="text-3xl font-bold text-text-primary tracking-tight">AgriTrace</span>
      </div>

      {/* Login Card (Client Component — handles Web3 button click) */}
      <LoginCard />

      {/* Footer Links */}
      <div className="flex gap-6 mt-8 text-text-muted text-sm">
        <a href="#" className="hover:text-text-secondary transition-colors">Privacy Policy</a>
        <span>|</span>
        <a href="#" className="hover:text-text-secondary transition-colors">Terms of Service</a>
        <span>|</span>
        <a href="#" className="hover:text-text-secondary transition-colors">Help Center</a>
      </div>

      {/* Copyright */}
      <p className="text-text-muted text-sm mt-4">
        © 2026 AgriTrace. Secured by blockchain.
      </p>
    </div>
  );
}
