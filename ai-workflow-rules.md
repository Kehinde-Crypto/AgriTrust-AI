# AI Workflow Rules

## Approach

Build AgriTrust AI incrementally using a spec-driven workflow.
Context files define what to build, how to build it, and the current
state of progress. Always implement against these specs — do not infer
or invent behavior from scratch.

Work in this order of priority:
1. Read `progress-tracker.md` to understand the current state
2. Read `project-overview.md` to understand the feature being built
3. Read `architecture.md` to understand system boundaries and invariants
4. Read `code-standards.md` before writing any code
5. Implement only what is defined — nothing more

## Scoping Rules

- Work on one feature unit at a time (e.g. farm registration, not the entire farm module)
- Prefer small, verifiable increments over large speculative changes
- Do not combine unrelated system boundaries in a single implementation step
- A "feature unit" is complete when it works end to end — from UI to database or blockchain

## When to Split Work

Split an implementation step if it combines:

- UI changes and backend/blockchain changes at the same time
- Multiple unrelated API routes or modules
- Frontend form logic and backend validation logic in the same step
- Any behavior not clearly defined in the context files
- Smart contract changes alongside API or UI changes

If a change cannot be verified end to end quickly, the scope is too
broad — split it.

## Module Build Order

Follow this sequence when building each feature module:

1. Database schema (Prisma model)
2. Backend service and DTO
3. Backend controller and API route
4. Smart contract (if the feature touches the blockchain)
5. Frontend API client / React Query hook
6. Frontend UI component or page
7. End-to-end test

## Handling Missing Requirements

- Do not invent product behavior not defined in the context files
- If a requirement is ambiguous, resolve it in the relevant context
  file before implementing
- If a requirement is missing, add it as an open question in
  `progress-tracker.md` before continuing
- If a blockchain interaction is unclear, check `architecture.md`
  invariants before writing any Solidity or transaction code

## Protected Files

Do not modify the following unless explicitly instructed:

- `components/ui/*` — shadcn/ui generated components
- `smart-contracts/contracts/interfaces/*` — contract interfaces
- `database/migrations/*` — generated Prisma migration files
- Any `.env` file — manage environment variables manually
- `ai-workflow-rules.md` — this file

## Keeping Docs in Sync

Update the relevant context file whenever implementation changes:

- System architecture or boundaries → update `architecture.md`
- Storage model decisions → update `architecture.md`
- Code conventions or standards → update `code-standards.md`
- Feature scope or user flows → update `project-overview.md`
- UI tokens, colors, or layout → update `ui-context.md`
- Any completed, in-progress, or blocked work → update `progress-tracker.md`

## Auth0 Rules

- Never implement a custom auth flow — always delegate to Auth0
- Role assignment happens in Auth0 and is synced to PostgreSQL on login
- All protected routes must use the Auth0 JWT guard — no exceptions
- Do not store tokens in localStorage — use Auth0 session cookies

## Blockchain Rules

- All blockchain writes must be non-blocking — show a pending state in the UI
- Never deploy a contract change without updating `architecture.md`
- All testnet contract addresses must be stored in environment variables
- Write Hardhat tests before deploying any new or updated contract

## AI (Grok API) Rules

- All Grok API calls are made from the backend AI service only
- Prompt templates must be version-controlled in `ai/prompts/`
- Never send raw user input directly to the Grok API — always sanitize first
- Log all AI interactions (excluding PII) for auditability

## Before Moving to the Next Unit

1. The current unit works end to end within its defined scope
2. No invariant defined in `architecture.md` was violated
3. `progress-tracker.md` reflects the completed work
4. `npm run build` passes with no TypeScript errors
5. Any new environment variables are added to `.env.example`
