const mongoose = require('mongoose');
const request = require('supertest');


const app = require('../server/index.js');
const movies = require('../examples/movies.js');
const Details = require('../database/index.js');

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


  it('responds appropriately to GET on /api/movies/details', (done) => {
    // mock response from mongoose
    jest
      .spyOn(Details, 'save')
      .mockReturnValue(Promise.resolve(movies));

    request(app)
      .get('/api/movies/details')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('responds appropriately to GET on /api/movies/details/jurassic-park', (done) => {
    // mock response from mongoose
    jest
      .spyOn(Details, 'save')
      .mockReturnValue(Promise.resolve(movies[0]));

    request(app)
      .get('/api/movies/details/jurassic-park')
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
