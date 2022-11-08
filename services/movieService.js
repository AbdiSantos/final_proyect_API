const { findByIdAndUpdate } = require("../models/movieModels");
const Movie = require(`../models/movieModels`);

class MoviesService {
  async createMovie(newMovie) {
    const pelicula = new Movie(newMovie);
    await pelicula.save();
    // const  selectedMovie =   await pelicula.save();
    return newMovie;
  }

  getMovies() {
    const movies = Movie.find();
    return movies;
  }

  async getMovieById(movieId) {
const pelicula = await Movie.findById(movieId)
return(pelicula)
  }

 async updateMovieById(movieId, updates) {
const updatedMovie = await Movie.findByIdAndUpdate(movieId, updates)
return(updatedMovie)
  }


async deleteMovieById(movieId) {
  const deletedMovie = await Movie.findByIdAndDelete(movieId)
  return(deletedMovie)
    }
  }

module.exports = MoviesService;
