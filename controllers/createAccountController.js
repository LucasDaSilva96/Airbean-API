const { UserModel } = require('../models/userModel');

exports.createNewUser = async (req, res, next) => {
  try {
    await UserModel.create({ ...req.body });

    res.status(201).json({
      status: 'success',
      message: 'New user successfully created',
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message,
    });
  }
};
