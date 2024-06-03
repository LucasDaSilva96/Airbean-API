const mongoose = require('mongoose');
const dayjs = require('dayjs');
const duration = require('dayjs/plugin/duration');
const utc = require('dayjs/plugin/utc');
const localeData = require('dayjs/plugin/localeData');
dayjs.extend(localeData);
dayjs.extend(duration);
dayjs.extend(utc);

const { MenuSchema } = require('./menuModel');

// Skapar ett schema för order
const OrderSchema = new mongoose.Schema({
  order_items: [MenuSchema], // Produkterna i ordern
  time: {
    type: Date,
    default: dayjs()
      .add(dayjs.duration({ minutes: 15 }))
      .toISOString(), // Standardtiden för ordern är 15 minuter framåt
  },
  user_ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // Referens till användaren som gjorde ordern
  },
});

// Skapar en modell för order baserat på orderschemat
const OrderModel = mongoose.model('order', OrderSchema);

module.exports = {
  OrderSchema,
  OrderModel,
};
