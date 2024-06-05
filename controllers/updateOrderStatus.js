const { OrderModel } = require('../models/orderModel');
const { UserModel } = require('../models/userModel');

exports.updateOrderStatus = async (req, res, next) => {
  try {
    const { userID, orderID } = req.params;

    if (!orderID) throw new Error('No order-id provided');
    const order = await OrderModel.findById(orderID);
    if (!order) throw new Error('No order found');

    if (userID) {
      const user = await UserModel.findById(userID);

      if (!user) throw new Error('No user found with the provided id');

      const indexOfOrder = user.orders.findIndex(
        (order) => order.id === orderID
      );

      if (indexOfOrder < 0)
        throw new Error('No order found in the user_order_array');

      user.orders[indexOfOrder].deliveryStatus = 'Delivered';

      await user.save();

      order.deliveryStatus = 'Delivered';

      await order.save();
    } else {
      order.deliveryStatus = 'Delivered';
      await order.save();
    }

    res.status(200).json({
      status: 'success',
      message: 'Order successfully updated',
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
