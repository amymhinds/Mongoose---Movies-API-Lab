
var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/api/movies');

/* GET /api/movies */
router.get('/movies', moviesCtrl.index)

//GET /api/movies/:id
router.get('/movies/:id', moviesCtrl.show);


//Post to /api/movies
router.post('/movies', moviesCtrl.create);

//PUT /api/movies/:id
router.put('/movies/:id', moviesCtrl.update);

//Delete
router.delete('/movies/:id', moviesCtrl.delete);

module.exports = router;


