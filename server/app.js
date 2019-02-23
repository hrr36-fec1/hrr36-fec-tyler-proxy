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

// britt
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

// bill
app.get('/api/movies/:movie_slug/trailers', (req, res) => {
  console.log(req.params);
  const options = {
    hostname: '127.0.0.1',
    port: 3333,
    path: `/api/movies/${req.params.movie_slug}/trailers`,
    method: 'GET',
    json: true,
    uri: `http://127.0.0.1:3333/api/movies/${req.params.movie_slug}/trailers`,
  };
  request(options, (err, response, body) => {
    if (err) console.log(err);
    res.json(body);
  });
});

// merary
app.get('/api/movies/banner', (req, res) => {
  const options = {
    hostname: '127.0.0.1',
    port: 8082,
    path: '/api/movies/banner',
    method: 'GET',
    json: true,
    uri: 'http://127.0.0.1:8082/api/movies/banner',
  };
  request(options, (err, response, body) => {
    if (err) console.log(err);
    console.log(body);
    res.json(body);
  });
});
module.exports = app;
