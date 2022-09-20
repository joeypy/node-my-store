const { Client } = require('pg');

const client = new Client({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.DB_USER
  // DB_NAME=my_store
  // DB_USER=joey
  // DB_PASSWORD=admin123
  
  // # docker pgadmin db
  // PGADMIN_EMAIL=admin@mail.com
  // PGADMIN_PASSWORD=root
  
  // # node
  // PORT = 3000
  
})
