const Movie = require('../models/movie');

exports.addMovie = (req, res) => {
  res.render('addMovie');
};

exports.createMovie = async (req, res) => {
  try {
    const newMovie = new Movie({
      title: req.body.title,
      director: req.body.director,
      releaseYear: req.body.releaseYear,
      image: req.body.image || null // Handle optional image URL
    });
    await newMovie.save();
    res.redirect('/movies');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render('movies', { movies });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.editMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.render('editMovie', { movie });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateMovie = async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/movies');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect('/movies');
  } catch (err) {
    res.status(500).send(err.message);
  }
};
