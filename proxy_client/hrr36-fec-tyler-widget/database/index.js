const mongoose = require('mongoose');
const Review = require('./Review.js');
const Movie = require('./Movie.js');

const mongoHostName = process.env.NODE_ENV === 'dev' ? 'localhost' : 'database';
const mongoUri = `mongodb://${mongoHostName}:27017/metascore`;
console.log(mongoUri);
console.log('--------------DATABASE START-------------------');
const db = mongoose.connect(mongoUri, { useNewUrlParser: true })
  .then(() => console.log(`Connected to MongoDB on: ${mongoUri}`))
  .catch(err => console.log(`Error: ${err}`));

module.exports = {
  db,
  Review,
  Movie,
};
