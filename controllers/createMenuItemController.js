const { MenuModel } = require('../models/menuModel');

exports.createMenuItem = async (req, res, next) => {
  try {
    await MenuModel.create({ ...req.body });

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
