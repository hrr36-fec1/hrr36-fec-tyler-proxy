const mongoose = require('mongoose');

const app = require('../server/index.js');
const { db, Details } = require('../database/index.js');
const seedDetails = require('../database/seed.js');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('api routing to return movie details object', () => {
  const results =
})