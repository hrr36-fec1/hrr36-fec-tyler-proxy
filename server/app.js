const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(`${__dirname}/../proxy_client/`)));

app.get('/api/movies/:movieId/reviews', (req, res) => {
  const options = {
    hostname: '127.0.0.1',
    port: 4444,
    path: `/api/movies/${req.params.movieId}/reviews`,
    method: 'GET',
    json: true,
    uri: `http://127.0.0.1:4444/api/movies/${req.params.movieId}/reviews`,
  };
  request(options, (err, response, body) => {
    if (err) console.log(err);
    res.json(body);
  });
});

app.get('/api/movies/details/jurassic-park', (req, res) => {
  const options = {
    hostname: '127.0.0.1',
    port: 3002,
    path: '/api/movies/details/jurassic-park',
    method: 'GET',
    json: true,
    uri: 'http://127.0.0.1:3002/api/movies/details/jurassic-park',
  };
  request(options, (err, response, body) => {
    if (err) console.log(err);
    res.json(body);
  });
});

module.exports = app;
