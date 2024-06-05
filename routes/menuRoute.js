const { createMenuItem } = require('../controllers/createMenuItemController');
const { getMenu } = require('../controllers/getMenuController');
const express = require('express');

const router = express.Router();

router.post('/menu', createMenuItem);
router.get('/menu', getMenu);

module.exports = router;
