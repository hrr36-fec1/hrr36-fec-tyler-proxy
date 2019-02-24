const app = require('./app');

const PORT = process.env.port || 8081;

app.listen(PORT, () => {
  console.log(`Connected to Express on port ${PORT}`);
});
