const mongoose = require('mongoose');
const { MenuSchema } = require('./menuModel');
const { addMinutesToDate } = require('../utils/addMinutesToDate');

const OrderSchema = new mongoose.Schema({
  order_items: [MenuSchema],
  time: {
    type: Date,
    default: addMinutesToDate(),
  },
  user_ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
});

const OrderModel = mongoose.model('order', OrderSchema);

module.exports = {
  OrderSchema,
  OrderModel,
};
