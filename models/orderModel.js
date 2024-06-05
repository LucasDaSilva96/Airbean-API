const mongoose = require('mongoose');
const { MenuSchema } = require('./menuModel');
const { addMinutesToDate } = require('../utils/addMinutesToDate');

// Creates a schema for order
const OrderSchema = new mongoose.Schema({
  order_items: [MenuSchema], // Order products
  time: {
    type: Date,
    default: addMinutesToDate(),
  },
  user_ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // Ref to user that created the order
  },
  deliveryStatus: {
    type: String,
    default: 'Pending',
  },
});

// Creates a model for Order based on the order Schema
const OrderModel = mongoose.model('order', OrderSchema);

module.exports = {
  OrderSchema,
  OrderModel,
};
