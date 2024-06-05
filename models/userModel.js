const mongoose = require('mongoose');
const { OrderSchema } = require('./orderModel');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
  },
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'order'
  }],
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = {
  UserSchema,
  UserModel,
};
