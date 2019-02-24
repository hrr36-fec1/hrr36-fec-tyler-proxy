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
    path: `/api/movies/${req.params.movieId}/reviews`,
    method: 'GET',
    json: true,
    uri: `http://ec2-3-17-27-102.us-east-2.compute.amazonaws.com/api/movies/${req.params.movieId}/reviews`,
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
    path: `/api/movies/${req.params.movie_slug}/trailers`,
    method: 'GET',
    json: true,
    uri: `http://betacritictrailers-env.gqspfzmduw.us-east-2.elasticbeanstalk.com/api/movies/${req.params.movie_slug}/trailers`,
  };
  request(options, (err, response, body) => {
    if (err) console.log(err);
    console.log(body);
    res.json(body);
  });
});

// merary
app.get('/api/movies/banner', (req, res) => {
  const options = {
    path: '/api/movies/banner',
    method: 'GET',
    json: true,
    uri: 'http://betacriticbanner4-env.ammdczbp2e.us-east-1.elasticbeanstalk.com/api/movies/banner',
  };
  request(options, (err, response, body) => {
    if (err) console.log(err);
    console.log(body);
    res.json(body);
  });
});
module.exports = app;
