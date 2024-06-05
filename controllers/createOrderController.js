const { OrderModel } = require('../models/orderModel');
const { MenuModel } = require('../models/menuModel');

exports.createNewOrder = async (req, res, next) => {
  try {

    const orderItems = req.body.order_items;
    const userRef = req.body.user_ref;


    //Validates that the order items exist in the menu by matching their IDs
    const menuItems = await MenuModel.find();

    let notFound = false 
    for( 
      const item of orderItems 
    ){
      for( 
        const menuitem of menuItems
      ){ 
        if (item.title === menuitem.title) return notFound = false
        if (item.title !== menuitem.title) return notFound = true
      }
     }
    
    //If above fails, you get the appropriate error message.
    if (notFound) {
     throw new Error("Menu not Found")
    }
    //create new order
    const newOrder = await OrderModel.create({
      order_items: orderItems,
      user_ref: userRef,
    });

    console.log('New Order Created:', newOrder);

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
