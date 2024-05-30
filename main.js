require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  express.json({
    limit: '10kb',
  })
);

app.enable('trust proxy');

app.options('*', cors());

app.use('/', (req, res, next) => {
  res.status(200).json({
    message: ' Hello world',
  });
});

module.exports = app;
