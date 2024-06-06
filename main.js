require('dotenv').config();
const express = require('express');
const cors = require('cors');
const menuRoute = require('./routes/menuRoute');
const orderRoute = require('./routes/orderRoute');
const userRoute = require('./routes/userRoute');
const aboutRoute = require('./routes/aboutRoute');

const app = express();

app.use(
  express.json({
    limit: '10kb',
  })
);

app.enable('trust proxy');

app.options('*', cors());

app.use('/api', menuRoute);
app.use('/api', orderRoute);
app.use('/api', aboutRoute);
app.use('/api', userRoute);

module.exports = app;
