const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../server/app');
const Review = require('../database/Review');
const reviews = require('../examples/reviews');

describe('Express server should route appropriately', () => {
  afterAll(() => mongoose.disconnect());

  it('serves the client directory', (done) => {
    request(app)
      .get('/')
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  it('responds appropriately to GET on /apis/movies/:movieId/reviews', (done) => {
    // mock response from mongoose
    jest
      .spyOn(Review, 'search')
      .mockReturnValue(Promise.resolve(reviews[0]));

    request(app)
      .get('/api/movies/1/reviews')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  test('404 everything else', (done) => {
    request(app)
      .get('/api/movies')
      .then((response) => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });
});
