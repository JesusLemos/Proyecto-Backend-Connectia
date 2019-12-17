var express = require('express');
var router = express.Router();
const seacher_product_title_controller = require('../controladores/seacher_product_title_controller')
const salesController = require('../controladores/sales_controller');
const priceController = require('../controladores/price_controller');
const visualizePoduct = require('../controladores/visualize_product_controller')
const orderController = require('../controladores/order_controller');

router.get('/productos/:nombre', seacher_product_title_controller);
router.get('/ventas', salesController);
router.get('/precio', priceController)
router.get('/visualizarproductos', visualizePoduct)

router.post('/pedidos', orderController)


module.exports = router;
