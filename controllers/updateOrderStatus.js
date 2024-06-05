const { OrderModel } = require('../models/orderModel');
const { UserModel } = require('../models/userModel');

exports.updateOrderStatus = async (req, res, next) => {
  try {
    const { userID, orderID } = req.params;

    // If orderID is present, it fetches the corresponding order from a database, else catches error
    if (!orderID) throw new Error('No order-id provided');
    const order = await OrderModel.findById(orderID);
    if (!order) throw new Error('No order found');

    // Function:Updates the status of an order placed by a logged-in user.
    if (userID) {
      const user = await UserModel.findById(userID);

      if (!user) throw new Error('No user found with the provided id');

      // finds the index of the order in the user's orders array with a specific ID.
      const indexOfOrder = user.orders.findIndex(
        (order) => order.id === orderID
      );

      if (indexOfOrder < 0)
        throw new Error('No order found in the user_order_array');
        //If the correct order exists it changes the delivery status to "delivered"
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
