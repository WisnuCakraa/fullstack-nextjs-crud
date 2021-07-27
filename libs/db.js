const knex = require('knex')({
  client: process.env.DB_CLIENT,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: '',
    database: process.env.DB_NAME,
  }
});

export default knex;