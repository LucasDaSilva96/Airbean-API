const { OrderModel } = require('../models/orderModel');
const { MenuModel } = require('../models/menuModel');
const { UserModel } = require('../models/userModel');

exports.createNewOrder = async (req, res, next) => {
  try {
    const { order_items, user_ref } = req.body;

    //Validates that the order items exist in the menu by matching their IDs
    const menuItems = await MenuModel.find();

    let notFound = false;

    for (const item of order_items) {
      const found = menuItems.find((el) => el.title === item.title);

      if (!found) {
        notFound = true;
      }
    }

    //If above fails, you get the appropriate error message.
    if (notFound) {
      throw new Error('Menu item not Found');
    }

    if (user_ref) {
      const user = await UserModel.findById(user_ref);

      if (!user) throw new Error('The user was not found');
      // create new order
      const newOrder = await OrderModel.create({
        order_items,
        user_ref,
      });

      user.orders.push(newOrder);

      await user.save();

      res.status(201).json({
        status: 'success',
        message: 'New order successfully created',
        data: newOrder,
      });
    } else {
      // create new order
      const newOrder = await OrderModel.create({
        order_items,
      });

      res.status(201).json({
        status: 'success',
        message: 'New order successfully created',
        data: newOrder,
      });
    }
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
