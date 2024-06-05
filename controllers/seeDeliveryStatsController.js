const { OrderModel } = require('../models/orderModel');

//fetches order record from the database
exports.getDeliveryInformation = async (req, res, next) => {
  try {
    const { orderID } = req.params;
    if (!orderID) throw new Error('No order-id provided');

    const order = await OrderModel.findById(orderID);

    if (!order) throw new Error('No order found with the provided order-id');

    res.status(200).json({
      status: 'success',
      message: 'Order successfully fetched',
      data: order,
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
