# Architecture Context

## Stack

| Layer          | Technology                        | Role                                      |
| -------------- | --------------------------------- | ----------------------------------------- |
| Framework      | Next.js + TypeScript              | Frontend — SSR, routing, API routes       |
| UI             | Tailwind CSS + shadcn/ui          | Styling and reusable component library    |
| Auth           | Auth0                             | Secure authentication and session management |
| Backend        | NestJS + TypeScript               | REST API, business logic, service modules |
| Database       | Supabase (PostgreSQL) + Prisma    | Relational data storage and ORM           |
| Cache          | Redis                             | Session caching and performance           |
| Blockchain     | Solidity + Hardhat + OpenZeppelin | Smart contracts — assets, tracking, certs (Testnet) |
| Storage        | IPFS                              | Decentralized file/media storage          |
| Oracle         | Chainlink                         | Real-world data feeds for smart contracts |
| AI Engine      | Grok API (Custom Model)           | Voice assistant, translation, recommendations, fraud detection |
| Payments       | cNGN / USD Stablecoin             | On-chain payment settlement               |
| Monitoring     | Sentry                            | Error tracking and system health          |
| Deployment     | Vercel (FE) + Render (BE)         | Cloud hosting and CI/CD                   |

## System Boundaries

- `frontend/` — Next.js app: all UI, pages, and client-side logic
- `backend/` — NestJS API: auth, farms, harvests, products, shipments, wallet, AI, notifications
- `smart-contracts/` — Solidity contracts: AssetRegistry, SupplyTracker, CertificateRegistry, PaymentSettlement
- `ai/` — AI service powered by Grok API: voice assistant, translation engine, recommendation engine, fraud detection
- `database/` — PostgreSQL schema and Prisma migrations
- `infrastructure/` — Docker, deployment configs, environment setup

## Storage Model

- **PostgreSQL**: User accounts, farms, harvests, products, shipments, wallets, payments, certificates, notifications, audit logs
- **Blockchain (Testnet)**: Digital Twin identities, ownership history, shipment events, certificates, payment records
- **IPFS**: Product images, documents, QR code assets, large metadata files
- **Redis**: Auth sessions, caching, rate limiting

## Auth and Access Model

- Every user registers and signs in via Auth0
- Auth0 issues JWTs that are validated on every protected backend request
- Role-Based Access Control (RBAC) enforces what each user can see and do
- Roles: ADMIN, FARMER, BUYER, TRANSPORTER, REGULATOR
- Roles are stored in Auth0 user metadata and synced to the PostgreSQL users table
- Only the owner of a resource (farm, product, shipment) can mutate it unless the user is an ADMIN

## Invariants

1. No route handler runs long-lived background work synchronously — use queues or async jobs
2. All blockchain writes are non-blocking — UI shows pending state until on-chain confirmation
3. Every product must have a Digital Twin before a Product Passport can be generated
4. No large files (images, documents) are stored directly in PostgreSQL — use IPFS
5. All payments are settled on-chain — no off-chain payment state is treated as final
6. All AI requests go through the Grok API — no direct AI model calls from the frontend
