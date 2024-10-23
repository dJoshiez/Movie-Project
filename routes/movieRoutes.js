const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/movies', movieController.getMovies);
router.get('/movies/add', movieController.addMovie);
router.post('/movies', movieController.createMovie);
router.get('/movies/edit/:id', movieController.editMovie);
router.post('/movies/edit/:id', movieController.updateMovie);
router.post('/movies/delete/:id', movieController.deleteMovie);

module.exports = router;
