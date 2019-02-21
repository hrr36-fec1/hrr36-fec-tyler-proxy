const Promise = require('bluebird');
const path = require('path');
const fs = Promise.promisifyAll(require('fs'));
const faker = require('faker');
const { Review } = require('../database/index.js');

// reads data from the imdb movie list and parses it into
// the movie id, the year the movie was released, and the titles via regex
const parseData = async (file) => {
  const data = await fs.readFileAsync(file, 'utf8');

  const idRegex = /([0-9]+)\.\s/g;
  const ids = data.match(idRegex).map(el => el.substring(0, el.length - 2));

  const yearRegex = /\([0-9]+\)/g;
  const years = data.match(yearRegex).map(el => el.substring(1, el.length - 1));

  const titleRegex = /\s(.)+\s/g;
  const titles = data.match(titleRegex).map(el => el.substring(1, el.length - 8));

  return { ids, years, titles };
};

// takes the movie data from parseData, and creates a random number of reviews
// (between 25 and 75 reviews per movie). Returns an array of arrays,
// where the ith array contains the reviews for the ith movie in movies.

const generateReviews = async (movies) => {
  const movieReviews = [];
  for (let i = 0; i < movies.titles.length; i += 1) {
    const movieReview = [];
    const numReviews = Math.floor(Math.random() * 50) + 25;
    for (let j = 0; j < numReviews; j += 1) {
      const author = `${faker.name.firstName()} ${faker.name.lastName()}`;
      const movieId = Number(movies.ids[i]);
      const movieName = movies.titles[i];
      const publication = faker.company.companyName();
      const score = Math.floor(Math.random() * 100);
      const publishDate = faker.date.between(movies.years[i], '2019-01-01');
      const body = faker.lorem.paragraphs();
      const author_movie = `${author}_${movies.titles[i]}`; // eslint-disable-line camelcase
      movieReview.push({
        author, movieId, movieName, publication, score, publishDate, body, author_movie,
      });
    }
    movieReviews.push(movieReview);
  }
  return movieReviews;
};
console.log('-----------------REMOVE OLD DATA--------------------');
Review.removeAll()
  .then(() => console.log('removal complete'))
  .catch(err => console.log(err))
  .then(() => {
    console.log('---------------------DATALOAD-----------------------');
    console.log(`BEGINNING DATA LOAD ON ${process.env.MONGODB_URI}`);
    console.log('----------------------------------------------------');
    parseData(path.join((`${__dirname}/../examples/imdb-movie-list.txt`)))
      .then(movies => generateReviews(movies))
      .then(moviesReviews => moviesReviews
        .map(reviews => reviews
          .map(review => Review.create(review))))
      .then(() => console.log('load complete'))
      .catch(err => console.log(err));
  });

/*
parseData(path.join((`${__dirname}/../examples/imdb-movie-list.txt`)))
  .then((data) => {
    const movies = [];
    for (let i = 0; i < data.ids.length; i += 1) {
      movies.push({
        id: Number(data.ids[i]),
        title: data.titles[i],
        releaseDate: Date.parse(data.years[i]),
      });
    }
    return movies.map(movie => Movie.create(movie));
  })
  .then(() => console.log('complete'))
  .catch(err => console.log(err));
*/
