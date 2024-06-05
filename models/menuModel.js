const mongoose = require('mongoose');

// Creates a schema for menu
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
// Creates a model for Menu based on the Menu Schema
const MenuModel = mongoose.model('menu', MenuSchema);

module.exports = {
  MenuSchema,
  MenuModel,
};
