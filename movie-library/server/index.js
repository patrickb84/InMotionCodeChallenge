const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
var sqlite3 = require('sqlite3').verbose();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// open database
let db = new sqlite3.Database('./db/movie-library.db', err => {
  if (err) return console.error(err.message);
  console.log('Connected to the SQlite database.');
});

app.get('/movies', (req, res) => {
  const sql = 'SELECT * FROM movie';
  db.all(sql, (err, rows) => {
    console.log(rows);
    res.send(rows);
  });
});

app.post('/movie', (req, res) => {
  const { title, year, rating, poster } = req.body;
  const sql =
    'INSERT INTO movie (title, year, rating, poster) VALUES (?,?,?,?);';

  db.run(sql, [title, year, rating, poster], function (err) {
    if (err) {
      res.status(400).send('Unable to save to database.');
      return;
    }
    res.status(200).json({ newId: this.lastID });
  });
});

app.delete('/movie/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM movie WHERE id = ?';

  db.run(sql, id, (err, result) => {
    if (err) console.log(err);
  });
});

app.put('/movie', (req, res) => {
  const { title, year, rating, poster, id } = req.body;
  const sql =
    'UPDATE movie SET title = ?, year = ?, rating = ?, poster = ? WHERE id = ?';

  db.run(sql, [title, year, rating, poster, id], (err, result) => {
    if (err) console.log(err);
  });
});

const server = app.listen(PORT, () => {
  var host = server.address().address;
  console.log(`App is up and running. Listening at http://${host}:${PORT}`);
});

process.on('SIGINT', () => {
  console.log('CLOSE UP');
  db.close();
  server.close();
});
