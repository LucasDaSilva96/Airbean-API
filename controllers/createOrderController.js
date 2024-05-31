const { OrderModel } = require('../models/orderModel');

exports.createNewOrder = async (req, res, next) => {
  try {
    await OrderModel.create({ ...req.body });

    res.status(201).json({
      status: 'success',
      message: 'New order successfully created',
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
