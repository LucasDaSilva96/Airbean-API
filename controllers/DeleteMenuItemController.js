const { MenuModel } = require('../models/menuModel');

// Find item by ID and delete it
exports.deleteMenuItem = async (req, res, next) => {
  try {
    const itemID = req.params.itemID;

    const deletedItem = await MenuModel.findByIdAndDelete(itemID);

    if (!deletedItem) {
      return res.status(404).json({
        status: 'fail',
        message: 'Menu item not found'
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Deleted item successfully',
      deletedItem
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message
    });
  }
};
