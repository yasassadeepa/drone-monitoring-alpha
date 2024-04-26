import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgresql://drone-monitoring-db_owner:5bBFJhfuOZ3Y@ep-lingering-sun-a1pqmff3-pooler.ap-southeast-1.aws.neon.tech/drone-monitoring-db?sslmode=require",
  },
} satisfies Config;
