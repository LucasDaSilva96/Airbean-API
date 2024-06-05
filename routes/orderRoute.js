const { createNewOrder } = require('../controllers/createOrderController');
const { getDeliveryInformation } = require('../controllers/seeDeliveryStatsController');
const { getOrderHistory } = require('../controllers/seeOrderHistoryController');
const express = require('express');
const router = express.Router();

router.post('/order', createNewOrder);

router.get('/deliveryStats/:orderID', getDeliveryInformation);
router.get('/orderHistory/:id', getOrderHistory);
module.exports = router;
