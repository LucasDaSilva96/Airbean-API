const { UserModel } = require('../models/userModel');

exports.getOrderHistory = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) throw new Error('No user id provided');

    const user = await UserModel.findById(id);
    if (!user) throw new Error('No user found with the provided id');

    let totalOrdersAmount = 0;

    user.orders.forEach((order) => {
      order.order_items.forEach((item) => {
        totalOrdersAmount += item.price;
      });
    });
    res.status(200).json({
      status: 'success',
      message: 'User order history successfully fetched',
      orders: user.orders,
      totalOrdersAmount,
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
