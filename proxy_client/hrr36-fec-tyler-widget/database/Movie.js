const mongoose = require('mongoose');
const db = require('./index.js'); // eslint-disable-line no-unused-vars

mongoose.Promise = global.Promise;

const movieSchema = new mongoose.Schema({
  id: { type: Number, index: { unique: true } },
  title: String,
  releaseDate: Date,
});

const Movie = mongoose.model('Movie', movieSchema);

const find = () => {

};

const create = (movie) => {
  const toSave = new Movie(movie);
  return toSave.save();
};

module.exports = {
  Movie,
  find,
  create,
};
