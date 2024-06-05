require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./main');
const DB = process.env.DB;
const PORT = process.env.PORT || 8000;

mongoose.connect(DB).then(() => console.log('DB successfully connected✅'));

const SERVER = app.listen(PORT, () => {
  console.log(`APP is running on port: ${PORT}`);
});
