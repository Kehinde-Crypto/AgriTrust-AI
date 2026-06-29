'use client';

import { useState } from 'react';
import { fetchSecureData } from '@/app/actions/api';

export default function ApiTestPage() {
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const testPublicRoute = async () => {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      const res = await fetch('http://localhost:3001');
      const text = await res.text();
      setResult(`✅ Public Route (/): "${text}"`);
    } catch (e) {
      setError(`❌ Failed: ${e}`);
    } finally {
      setLoading(false);
    }
  };

  const testSecureRoute = async () => {
    setLoading(true);
    setResult(null);
    setError(null);
    try {
      // Use the Server Action to securely get the token and fetch data!
      const data = await fetchSecureData('/secure');
      setResult(`✅ Secure Route (/secure): ${JSON.stringify(data)}`);
    } catch (e: unknown) {
      setError(`❌ Failed: ${e instanceof Error ? e.message : String(e)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
      <div className="w-full max-w-xl bg-bg-card border border-border-subtle rounded-2xl p-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-brand-blue/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-text-primary">Step #5 — API Connection Test</h1>
        </div>
        <p className="text-text-secondary text-sm mb-8">
          Tests the frontend → backend connection using the Auth0 access token.
        </p>

        {/* Test Buttons */}
        <div className="flex flex-col gap-4 mb-8">
          <button
            onClick={testPublicRoute}
            disabled={loading}
            className="w-full py-3 bg-bg-input border border-border-default hover:border-brand-green rounded-xl text-text-primary font-medium transition-all flex items-center justify-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            Test Public Route <span className="text-text-muted text-xs ml-1">(GET /)</span>
          </button>

          <button
            onClick={testSecureRoute}
            disabled={loading}
            className="w-full py-3 bg-brand-blue hover:bg-brand-blue-dark rounded-xl text-white font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Test Secure Route <span className="text-white/60 text-xs ml-1">(GET /secure + Auth Token)</span>
          </button>
        </div>

        {/* Result Display */}
        {loading && (
          <div className="flex items-center justify-center gap-3 py-6 text-text-secondary">
            <div className="w-5 h-5 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
            Testing connection...
          </div>
        )}

        {result && (
          <div className="bg-brand-green/10 border border-brand-green/30 rounded-xl p-4 font-mono text-sm text-brand-green break-all">
            {result}
          </div>
        )}

        {error && (
          <div className="bg-accent-red/10 border border-accent-red/30 rounded-xl p-4 font-mono text-sm text-accent-red break-all">
            {error}
          </div>
        )}

        {/* Instructions */}
        <div className="mt-8 border-t border-border-subtle pt-6 text-sm text-text-muted space-y-2">
          <p>📋 <strong className="text-text-secondary">Expected results:</strong></p>
          <p>• Public route → <span className="text-brand-green">200 OK</span> — "Hello World!"</p>
          <p>• Secure route (logged in) → <span className="text-brand-green">200 OK</span> — your user data</p>
          <p>• Secure route (not logged in) → <span className="text-accent-red">401 Unauthorized</span></p>
        </div>

        <a
          href="/dashboard"
          className="mt-6 flex items-center gap-2 text-sm text-text-muted hover:text-text-secondary transition-colors"
        >
          ← Back to Dashboard
        </a>
      </div>
    </div>
  );
}
