const { createNewOrder } = require('../controllers/createOrderController');
const express = require('express');
const router = express.Router();

router.post('/order', createNewOrder);

module.exports = router;
