const express = require('express');
const Movie = require(`../models/movieModels`);

const MoviesService = require(`./../services/movieService`);
const verifyToken =  require (`../middlewares/authjwt`)
const isAdmin =  require (`../middlewares/isAdmin`)

const router = express.Router();
const service = new MoviesService();

router.get('/', async (req, res) => {
  try {
    const products = await service.getMovies();

    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:movieId', async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const products = await service.getMovieById(movieId);

    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const { _id, name, price, estreno, image, horarios } = req.body;

    const newMovie = new Movie({ _id, name, price, estreno, image, horarios });

    const newProduct = await service.createMovie(newMovie);
    res.json(newProduct);
  } catch (error) {
    console.log(error);
  }
});

router.put('/:movieId', async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const updates = req.body;
    const products = await service.updateMovieById(movieId, updates, {
      new: true,
    });

    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/:movieId', async (req, res) => {
  try {
    const movieId = req.params.movieId;

    const products = await service.deleteMovieById(movieId);

    res.json(products);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
