const mongoose = require('mongoose');
const dayjs = require('dayjs');
const duration = require('dayjs/plugin/duration');
const utc = require('dayjs/plugin/utc');
const localeData = require('dayjs/plugin/localeData');
dayjs.extend(localeData);
dayjs.extend(duration);
dayjs.extend(utc);

const { MenuSchema } = require('./menuModel');

const OrderSchema = new mongoose.Schema({
  order_items: [MenuSchema],
  time: {
    type: Date,
    default: dayjs()
      .add(dayjs.duration({ minutes: 15 }))
      .toISOString(),
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
