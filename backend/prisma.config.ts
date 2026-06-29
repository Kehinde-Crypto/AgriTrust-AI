// Prisma config for AgriTrust AI
// Prisma v7: datasource URLs are configured here, not in schema.prisma
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // Use DIRECT_URL for migrations (session-mode pooler, no pgbouncer)
    url: process.env["DIRECT_URL"],
  },
});
