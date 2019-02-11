const mongoose = require('mongoose');
const db = require('./index.js'); // eslint-disable-line no-unused-vars

mongoose.Promise = global.Promise;

const reviewSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  movieName: String,
  publication: String,
  score: {
    type: Number,
    required: true,
  },
  publishDate: {
    type: Date,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author_movie: { type: String, index: { unique: true } },
});

const Review = mongoose.model('Review', reviewSchema);

const search = (movie) => {
  const movieId = Number(movie);
  return Review.find({ movieId });
};

const create = (review) => {
  const toSave = new Review(review);
  return toSave.save();
};

const removeAll = () => Review.remove({});

module.exports = Review;
module.exports.search = search;
module.exports.create = create;
module.exports.removeAll = removeAll;
