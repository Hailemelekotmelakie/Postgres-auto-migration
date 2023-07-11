const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool
  .connect()
  .then(() => {
    console.log("Database connected successfull");
  })
  .catch((error) => {
    console.log("Faild to connect to Database ", error);
  });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
