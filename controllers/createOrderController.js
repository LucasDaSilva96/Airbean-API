const { OrderModel } = require('../models/orderModel');
const { MenuModel } = require('../models/menuModel');

exports.createNewOrder = async (req, res, next) => {
  try {
    const orderItems = req.body.order_items;

    //Validates that the order items exist in the menu by matching their IDs
    const menuItems = await MenuModel.find({
      '_id': { $in: orderItems.map(item => item._id) }
    });

    //If above fails, you get the appropriate error message.
    if (menuItems.length !== orderItems.length) {
      return res.status(400).json({
        status: 'fail',
        message: 'Some menu items do not exist'
      });
    }
    //create new order
    const newOrder = await OrderModel.create({
      order_items: orderItems,
      user_ref:req.body.user.ref
    });

    res.status(201).json({
      status: 'success',
      message: 'New order successfully created',
      data: newOrder
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
