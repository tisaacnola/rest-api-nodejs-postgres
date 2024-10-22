const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://postgres:kdMWtH05jzkqGb88@boastfully-masculine-bullhead.data-1.use1.tembo.io:5432/postgres",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  pool,
};
