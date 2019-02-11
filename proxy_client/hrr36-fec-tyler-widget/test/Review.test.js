const mongoose = require('mongoose');
const Review = require('../database/Review');

// eslint-disable-next-line no-unused-vars
const db = require('../database/index');
const reviews = require('../examples/reviews');

describe('Mongoose Review Schema', () => {
  const review = reviews.default[0];

  beforeEach(() => Review.create(review));

  afterEach(() => Review.removeAll());

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should save a good record', (done) => {
    Review.create(reviews.default[1])
      .then((result) => {
        // eslint-disable-next-line no-underscore-dangle
        expect(result._id).toBeTruthy();
      })
      .then(() => done());
  });

  it('should not save a bad record', (done) => {
    const badReview = reviews.default[1];
    delete badReview.author;
    Review.create(badReview)
      .catch((err) => {
        expect(err.name).toBe('ValidationError');
        expect(err.message).toBe('Review validation failed: author: Path `author` is required.');
      })
      .then(() => done());
  });

  it('should find a record that is available', (done) => {
    Review.search(review.movieId)
      .then((result) => {
        expect(result.length).toBe(1);
      })
      .then(() => done());
  });

  it('should return empty result when no match', (done) => {
    Review.search(2)
      .then((result) => {
        expect(result.length).toBe(0);
      })
      .then(() => done());
  });

  it('should return an error when searching for inappropriate id', (done) => {
    Review.search('a')
      .catch((err) => {
        expect(err).toBeTruthy();
        expect(err.name).toBe('CastError');
        // eslint-disable-next-line no-multi-str
        expect(err.message).toBe('Cast to number failed for value "NaN" at path "movieId" for model "Review"');
      })
      .then(() => done());
  });
});
