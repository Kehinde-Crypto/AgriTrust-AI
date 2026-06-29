'use server';

import { auth0 } from '@/lib/auth0';

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

/**
 * Server Action that securely fetches data from the backend API.
 * Because this runs on the server, it automatically has access to the user's session cookies.
 */
export async function fetchSecureData(path: string) {
  try {
    // 1. Get the access token directly from the session
    const { token } = await auth0.getAccessToken();

    if (!token) {
      throw new Error('No active session or token found');
    }

    // 2. Call the backend API securely with the token
    const response = await fetch(`${BACKEND_URL}${path}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error ${response.status}: ${errorText}`);
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(error.message || 'Failed to fetch secure data');
  }
}
