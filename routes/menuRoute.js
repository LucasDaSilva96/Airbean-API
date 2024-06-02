const { createMenuItem } = require('../controllers/createMenuItemController');
const { deleteMenuItem } = require('../controllers/DeleteMenuItemController');
const express = require('express');

const router = express.Router();

router.post('/menu', createMenuItem);
router.delete('/menu/:itemID', deleteMenuItem);

module.exports = router;
