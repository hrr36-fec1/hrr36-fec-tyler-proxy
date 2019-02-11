const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const Review = require('../database/Review.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(`${__dirname}/../client/dist`)));

app.get('/api/movies/:movieId/reviews', (req, res) => {
  Review.search(req.params.movieId)
    .then(data => res.json(data));
});

module.exports = app;
