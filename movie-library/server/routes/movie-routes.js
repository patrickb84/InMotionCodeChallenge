// routes/movie-routes.js

const express = require('express');
const movieRouter = express.Router();

const movieController = require('../controllers/movie-controller');

// For each route access the correct controller method

// get all movies
movieRouter.get('/', movieController.findAll);

// get single movie
movieRouter.get('/:id', movieController.findById);

// Export the router
module.exports = movieRouter;
