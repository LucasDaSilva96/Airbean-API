const { MenuModel } = require('../models/menuModel');

// Create new item on menu
exports.createMenuItem = async (req, res, next) => {
  try {
    await MenuModel.create({ ...req.body, image: req.body.image || null });

    res.status(201).json({
      status: 'success',
      message: 'New item successfully created',
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
