const express = require("express");
const { Pool } = require("pg");
const query = require('./helpers/query_manager');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const pool = new Pool(
  {
    // TODO: Enter PostgreSQL username
    user: 'postgres',
    // TODO: Enter PostgreSQL password
    password: 'miquella',
    host: "localhost",
    database: "employee_db",
  },
  console.log(`Connected to the employee database.`)
);

pool.connect();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  query.run();
});

/*
took 20 minutes to find the command line login for psql:
psql -U postgres
CREATE DATABASE employee_db
*/