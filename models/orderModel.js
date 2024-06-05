const mongoose = require('mongoose');
const { MenuSchema } = require('./menuModel');
const { addMinutesToDate } = require('../utils/addMinutesToDate');

// Skapar ett schema för order
const OrderSchema = new mongoose.Schema({
  order_items: [MenuSchema], // Produkterna i ordern
  time: {
    type: Date,
    default: addMinutesToDate(),
  },
  user_ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // Referens till användaren som gjorde ordern
  },
  deliveryStatus: {
    type: String,
    default: 'Pending',
  },
});

// Skapar en modell för order baserat på orderschemat
const OrderModel = mongoose.model('order', OrderSchema);

module.exports = {
  OrderSchema,
  OrderModel,
};
