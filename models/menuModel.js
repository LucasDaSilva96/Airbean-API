const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  image: {
    type: String,
  },
});

const MenuModel = mongoose.model('menu', MenuSchema);

module.exports = {
  MenuSchema,
  MenuModel,
};
