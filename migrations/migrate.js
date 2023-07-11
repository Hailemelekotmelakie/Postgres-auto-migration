const { Pool } = require("pg");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
dotenv.config();

console.log("\x1b[32m Postgres auto migration! \x1b[0m");

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function migrate() {
  const dirpath = path.join(__dirname, "./create");
  const files = fs
    .readdirSync(dirpath)
    .filter((file) => path.extname(file) === ".sql");

  for (const file of files) {
    try {
      const data = fs.readFileSync(path.join(dirpath, file), "utf8");
      await pool.query(data);
      console.log(
        `\x1b[32m-------  Successfully migrated ✔️ ${file} ------- \x1b[0m`
      );
    } catch (error) {
      console.log(
        `\x1b[31m------- Failed to migrate ❌ ${file} ------- \x1b[0m`,
        error
      );
    }
  }
  process.exit();
}
console.time(migrate());

console.time();
