//Environment Configuration
require('dotenv').config();

//Module Imports
const express = require('express');
const cors = require('cors');
const menuRoute = require('./routes/menuRoute');
const orderRoute = require('./routes/orderRoute');
const userRoute = require('./routes/userRoute');
const aboutRoute = require('./routes/aboutRoute');

//Express Application Initialization
const app = express();

//JSON request limit to prevent large payloads.
app.use(
  express.json({
    limit: '10kb',
  })
);
//Proxy Trust Configuration
app.enable('trust proxy');

//allowing the server to respond to requests from different origins
app.options('*', cors());
//setting up routes
app.use('/api', menuRoute);
app.use('/api', orderRoute);
app.use('/api', aboutRoute);
app.use('/api', userRoute);

module.exports = app;
