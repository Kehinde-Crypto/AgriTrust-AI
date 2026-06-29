import { auth0 } from '@/lib/auth0';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth0.getSession();
  const user = session?.user;

  if (!user) {
    redirect('/');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="bg-bg-card border border-border-subtle rounded-2xl p-10 max-w-lg w-full text-center">
        <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#22c55e" strokeWidth="2">
            <path d="M5 12L10 17L20 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-text-primary mb-2">
          You&apos;re all set! 🎉
        </h1>
        <p className="text-text-secondary mb-6">
          Welcome, <span className="text-brand-green font-medium">{user.name || user.email}</span>. Your dashboard is coming soon in the next build phase.
        </p>
        <a
          href="/auth/logout"
          className="inline-block px-6 py-3 bg-bg-input border border-border-default text-text-secondary rounded-xl hover:border-accent-red hover:text-accent-red transition-all duration-300"
        >
          Log out
        </a>
      </div>
    </div>
  );
}
