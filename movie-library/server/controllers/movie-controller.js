// controllers/movie-controller.js

const movie = require('../models/movie');

const movieController = {};

movieController.findAll = (req, res) => {
  movie.findAll(res);
  // res.send(rows);
  // .then(movies => {
  //   res.json({
  //     message: 'Success',
  //     data: movies,
  //   });
  // })
  // .catch(err => {
  //   console.log(err);
  //   res.status(500).json({ err });
  // });
};

movieController.findById = (req, res) => {
  movie
    .findById(req.params.id)
    .then(movie => {
      res.json({
        message: 'Success',
        data: movie,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = movieController;
