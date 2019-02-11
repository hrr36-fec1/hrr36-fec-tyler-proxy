const app = require('./app');

const PORT = process.env.port || 4445;

app.listen(PORT, () => {
  console.log(`Connected to Express on port ${PORT}`);
});
