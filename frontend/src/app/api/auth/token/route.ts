import { NextRequest, NextResponse } from 'next/server';
import { auth0 } from '@/lib/auth0';

// Force this route to be dynamically evaluated for every request
// Otherwise Next.js will cache it statically at build time, and cookies will be missing.
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    const res = new NextResponse();
    
    // Pass req and res explicitly so Auth0 can extract session cookies
    const { token } = await auth0.getAccessToken(req, res);
    
    if (!token) {
      return NextResponse.json({ error: 'No active session or token' }, { status: 401 });
    }

    return NextResponse.json({ token }, { headers: res.headers });
  } catch (error) {
    console.error('Error fetching access token:', error);
    return NextResponse.json({ error: 'Failed to retrieve access token' }, { status: 401 });
  }
}
