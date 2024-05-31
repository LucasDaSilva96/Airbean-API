require('dotenv').config();
const app = require('./main');

const mongoose = require('mongoose');

const DB = process.env.DB;

const PORT = process.env.PORT || 8000;

mongoose.connect(DB).then(() => console.log('DB successfully connected✅')).catch(e => console.log(e.message));

const SERVER = app.listen(PORT, () => {
  console.log(`APP is running on port: ${PORT}`);
});
