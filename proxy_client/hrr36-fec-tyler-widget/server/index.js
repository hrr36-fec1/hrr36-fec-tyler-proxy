const app = require('./app');
const db = require('../database/index');

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log('-----------------EXPRESS----------------------------');
  console.log(`Connected to Express on port ${PORT}`);
  db;
  console.log('----------------------------------------------------');
});
