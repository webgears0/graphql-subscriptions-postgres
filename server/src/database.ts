const pg = require('knex')({
  client: 'pg',
  host: process.env.DB_HOST,
  database: process.env.DB,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  searchPath: ['knex', 'public'],
});

module.exports = pg;
