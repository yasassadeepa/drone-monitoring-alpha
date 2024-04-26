import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(
  "postgresql://drone-monitoring-db_owner:5bBFJhfuOZ3Y@ep-lingering-sun-a1pqmff3.ap-southeast-1.aws.neon.tech/drone-monitoring-db?sslmode=require"
);

const db = drizzle(sql);

export default db;
