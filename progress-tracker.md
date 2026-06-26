# Progress Tracker

Update this file after every meaningful implementation change.

## Current Phase

- 🔴 Not Started

## Current Goal

- Sprint 1: Authentication, User Management & Farm Registration

---

## Completed

- ✅ Project documentation and context files initialized
  - `project-overview.md`
  - `architecture.md`
  - `code-standards.md`
  - `ai-workflow-rules.md`
  - `ui-context.md` (pending UI design input)
  - `progress-tracker.md`

---

## In Progress

- None yet.

---

## Next Up

### Sprint 1 — Foundation
- [ ] Initialize Next.js frontend (TypeScript + Tailwind + shadcn/ui)
- [ ] Initialize NestJS backend
- [ ] Set up PostgreSQL database + Prisma schema
- [ ] Integrate Auth0 authentication (register, login, JWT guard)
- [ ] Implement Role-Based Access Control (ADMIN, FARMER, BUYER, TRANSPORTER, REGULATOR)
- [ ] Build User Management module (backend)
- [ ] Build Farm Registration module (backend + frontend)

### Sprint 2 — Products
- [ ] Harvest Registration module
- [ ] Product Registration module
- [ ] Batch Management

### Sprint 3 — Blockchain
- [ ] Digital Twin creation (AssetRegistry.sol)
- [ ] QR Code generation
- [ ] Product Passport page
- [ ] Blockchain verification flow

### Sprint 4 — Supply Chain & Payments
- [ ] Shipment creation and real-time tracking (SupplyTracker.sol)
- [ ] Wallet module — cNGN / USD stablecoin payments (PaymentSettlement.sol)
- [ ] Certificate Registry (CertificateRegistry.sol)

### Sprint 5 — AI & Analytics
- [ ] Grok API integration — AI assistant and chat
- [ ] Multilingual translation (Yoruba, Hausa, Igbo, English)
- [ ] Voice assistant (Speech-to-Text + Text-to-Speech)
- [ ] Trust Score engine
- [ ] Fraud detection and anomaly detection
- [ ] Analytics dashboard

---

## Open Questions

- [ ] Which testnet will be used for smart contract deployment? (e.g. Sepolia, Mumbai, Base Goerli)
- [ ] Which IPFS provider will be used? (e.g. Pinata, Infura, NFT.Storage)
- [ ] What is the cNGN stablecoin contract address on testnet?
- [ ] Will Chainlink be used for price feeds or external data in Sprint 4?
- [ ] UI design: colors, theme, and layout (awaiting design input for `ui-context.md`)
- [ ] Will the AI voice assistant support offline mode or require internet connectivity?

---

## Architecture Decisions

- **Auth**: Using Auth0 for authentication — roles stored in Auth0 metadata and synced to PostgreSQL on login
- **AI Engine**: Using Grok API as the custom AI model for all AI features
- **Blockchain Network**: Testnet only during development — mainnet deployment in a future release
- **Storage**: IPFS for files and media, PostgreSQL for relational data, Redis for caching
- **Frontend Deployment**: Vercel
- **Backend Deployment**: Railway + Docker

---

## Session Notes

- Context files have been set up and filled in from the README
- `ui-context.md` is pending — UI design to be shared before frontend work begins
- Ready to begin Sprint 1: start with Next.js + NestJS project initialization
