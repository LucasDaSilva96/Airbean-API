require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');

const app = express();

const DB = process.env.DB;
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/api/users', userRoute);

mongoose.connect(DB).then(() => console.log('DB successfully connected✅'));

const SERVER = app.listen(PORT, () => {
  console.log(`APP is running on port: ${PORT}`);
});
