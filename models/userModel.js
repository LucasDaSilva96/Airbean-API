const mongoose = require('mongoose');
const { OrderSchema } = require('./orderModel');

// Creates a Schema for users.
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'], 
  },
  email: {
    type: String,
    required: [true, 'Please provide email'], 
    unique: true, // Every user must have unique Email 
  },
  password: {
    type: String,
    required: [true, 'Please provide password'], 
  },
  orders: [OrderSchema], // Users Order history
});

// Creates a model for Users based on the User Schema.
const UserModel = mongoose.model('user', UserSchema);

module.exports = {
  UserSchema,
  UserModel,
};
