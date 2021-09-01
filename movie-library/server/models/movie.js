// models/movie.js

const db = require('../db/config');

const Movie = {};

Movie.findAll = () => {
  const sql = 'SELECT * FROM movie';
  let data = db.all(sql, function (err, rows) {
    return rows;
  });
  console.log(data);
  return data;
};

Movie.findById = id => {
  const sql = `SELECT * FROM quotes WHERE id = ?`;
  return db.run(sql, id);
};

Movie.insert = (title, year, rating, poster) => {
  const sql = `INSERT INTO movie (title, year, rating, poster) VALUES (?,?,?,?);`;
  return db.run(sql, [title, year, rating, poster]);
};

Movie.delete = id => {
  const sql = 'DELETE FROM movie WHERE id = ?';
  return db.run(sql, id);
};

module.exports = Movie;
