require('dotenv').config();
const express = require('express');
const cors = require('cors');
const menuRoute = require('./routes/menuRoute');

const app = express();

app.use(
  express.json({
    limit: '10kb',
  })
);

app.enable('trust proxy');

app.options('*', cors());

app.use('/api', menuRoute);

module.exports = app;
