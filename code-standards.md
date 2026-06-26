# Code Standards

## General

- Keep modules small and single-purpose — one responsibility per file
- Fix root causes, do not layer workarounds on top of broken behavior
- Do not mix unrelated concerns in one component or route handler
- Never commit secrets, API keys, or wallet private keys — use environment variables only
- All environment variables must be defined in `.env.example` with descriptions

## TypeScript

- Strict mode is required throughout both frontend and backend
- Avoid `any` — use explicit interfaces, types, or `unknown` with narrowing
- Validate all unknown external input at system boundaries (API responses, form data, blockchain events) before trusting it
- Use Zod for runtime validation on both frontend forms and backend request bodies
- Prefer named exports over default exports for better refactoring support
- Use `enum` or `const` objects for fixed sets of values (e.g. roles, statuses)

## Next.js (Frontend)

- Default to server components — only add `use client` when browser interactivity requires it
- Keep route handlers focused on a single responsibility
- All API calls from the frontend go through `/app/api` route handlers — never call the backend directly from client components
- Use React Query for all data fetching, caching, and synchronization
- Use React Hook Form + Zod for all form handling and validation
- Never store sensitive data (JWT tokens, wallet keys) in `localStorage` — use secure cookies or Auth0 session

## NestJS (Backend)

- Every module owns its own controller, service, and DTO files
- DTOs must use `class-validator` decorators for all request body validation
- Use Guards for Auth0 JWT validation on all protected routes
- Use interceptors for consistent response shaping
- Never put business logic inside controllers — delegate to services
- Use Prisma transactions for any operation that writes to multiple tables

## Styling (Tailwind CSS)

- Use CSS custom property tokens defined in `ui-context.md` — no hardcoded hex values
- Follow the spacing and border radius scale — do not use arbitrary values without good reason
- Use shadcn/ui components as the base — do not rewrite what shadcn already provides
- Responsive design is required — mobile-first using Tailwind breakpoints

## API Routes

- Validate and parse all request input before any logic runs
- Enforce Auth0 authentication and RBAC ownership before any mutation
- Return consistent, predictable response shapes: `{ data, message, statusCode }`
- Use HTTP status codes correctly — 200, 201, 400, 401, 403, 404, 500
- All endpoints must be documented in Swagger via NestJS decorators

## Smart Contracts (Solidity)

- Follow the checks-effects-interactions pattern on all state-changing functions
- Use OpenZeppelin base contracts — do not rewrite access control or ownership from scratch
- Every public function must emit a relevant event
- Write unit tests for every smart contract function using Hardhat
- Never deploy to mainnet without a full audit — testnet only during development

## Data and Storage

- Metadata and relational data belongs in PostgreSQL via Prisma
- Large files (images, documents, QR assets) belong in IPFS — never in the database
- On-chain state (ownership, certificates, payments) is the source of truth — PostgreSQL mirrors it for query performance
- Do not store wallet private keys or seed phrases anywhere in the application

## AI (Grok API)

- All Grok API calls are made from the backend AI service — never from the frontend
- Sanitize and validate all user input before sending to the Grok API
- Always handle Grok API errors gracefully — fall back to a default response, never crash
- Log all AI requests and responses for auditability (excluding PII)

## File Organization

- `frontend/app/` — Next.js app router pages and layouts
- `frontend/components/` — Reusable UI components
- `frontend/lib/` — Utility functions, hooks, and API client
- `backend/src/modules/` — NestJS feature modules (auth, farms, products, etc.)
- `backend/src/common/` — Shared guards, interceptors, decorators, and types
- `smart-contracts/contracts/` — Solidity contract files
- `smart-contracts/test/` — Hardhat test files
- `ai/` — Grok API integration and AI service logic
