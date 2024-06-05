const { MenuModel } = require('../models/menuModel');
// Get menu
exports.getMenu = async (req, res, next) => {
  try {
    const menu = await MenuModel.find();

    if (!menu) {
      throw new Error('No items found in the menu');
    }

    res.status(200).json({
      status: 'success',
      message: 'Menu successfully fetched',
      data: menu,
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
