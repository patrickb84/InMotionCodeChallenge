// db/config.js

var sqlite3 = require('sqlite3').verbose();

const setDataBase = () => {
  return new sqlite3.Database('db/movie-library.db', err => {
    if (err) return console.error(err.message);
    console.log('Connected to the SQlite database.');
  });
}

const db = setDataBase();

// Export the database
module.exports = db;
