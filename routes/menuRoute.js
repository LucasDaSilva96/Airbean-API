const { createMenuItem } = require('../controllers/createMenuItemController');
const express = require('express');

const router = express.Router();

router.post('/menu', createMenuItem);

module.exports = router;
