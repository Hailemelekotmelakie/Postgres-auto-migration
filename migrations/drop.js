const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
});

const tables = ["chat", "user"]; //Type list of tables based on their relation.

async function drop() {
  console.log("\x1b[32m Postgres auto migration for drop! \x1b[0m");

  for (const table of tables) {
    try {
      await pool.query(`DROP TABLE IF EXISTS public.${table}`);
      console.log(
        `\x1b[32m ---- Table ✔️  ${table} dropped Successfully ----\x1b[0m`
      );
    } catch (error) {
      console.log(
        `\x1b[31m ---- Unable to drop table ❌  ${table} ---- \x1b[0m`,
        error
      );
    }
  }
  process.exit();
}

drop();
