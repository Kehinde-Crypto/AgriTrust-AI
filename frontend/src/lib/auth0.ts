// Auth0 v4 — centralized client instance
// Used by all server components and route handlers
import { Auth0Client } from "@auth0/nextjs-auth0/server";

export const auth0 = new Auth0Client({
  // Request an access token scoped to the AgriTrace backend API
  // This audience must match the API Identifier registered in the Auth0 Dashboard
  authorizationParameters: {
    audience: process.env.AUTH0_AUDIENCE,
    scope: 'openid profile email',
  },
});
