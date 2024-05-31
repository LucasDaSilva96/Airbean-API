const mongoose = require('mongoose');
const dayjs = require('dayjs');

const { MenuSchema } = require('./menuModel');

const OrderSchema = new mongoose.Schema({
  order_items: [MenuSchema],
  time: {
    type: Date,
    default: dayjs().add(dayjs.duration({ minute: 15 })),
  },
  user_ref: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
});

const OrderModel = mongoose.model('order', OrderSchema);

module.exports = {
  MenuSchema,
  OrderModel,
};
