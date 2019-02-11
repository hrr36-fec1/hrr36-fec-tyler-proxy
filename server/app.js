const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(`${__dirname}/../proxy_client/`)));

app.get('/api/movies/:movieId/reviews', (req, res) => {
  let options = {
    hostname: '127.0.0.1',
    port: 4444,
    path: `/api/movies/${req.params.movieId}/reviews`,
    method: 'GET',
    json: true,
    uri: `http://127.0.0.1:4444/api/movies/${req.params.movieId}/reviews`,
  };
  request(options, (err, response, body) => {
    if(err) console.log(err);
    res.json(body);
  });
});
module.exports = app;
