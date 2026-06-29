/**
 * AgriTrace API Client
 * Automatically attaches the Auth0 access token to all backend requests.
 * Use this for all frontend → backend API calls.
 */

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

/**
 * Makes an authenticated request to the AgriTrace backend.
 * Fetches the Auth0 access token via the /auth/access-token proxy endpoint.
 *
 * @param path - The backend endpoint path (e.g. '/users/me')
 * @param options - Standard fetch options (method, body, headers, etc.)
 */
export async function apiFetch(path: string, options: RequestInit = {}) {
  // Step 1: Get the Auth0 access token from our custom API route
  const tokenResponse = await fetch('/api/auth/token', {
    method: 'GET',
  });

  if (!tokenResponse.ok) {
    throw new Error('Not authenticated. Please log in again.');
  }

  const { token } = await tokenResponse.json();

  // Step 2: Make the request to the backend with the Bearer token
  const response = await fetch(`${BACKEND_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error ${response.status}: ${errorText}`);
  }

  return response.json();
}
