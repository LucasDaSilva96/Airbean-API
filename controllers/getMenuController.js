const { MenuModel } = require('../models/menuModel');

const getMenu = async (req, res) => {
    try {
        const menuItems = await MenuModel.find({});
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching menu items', error });
    }
};

module.exports = { getMenu };