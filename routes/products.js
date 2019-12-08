var express = require('express');
var router = express.Router();
let seacher_product_title_controller = require('../controladores/seacher_product_title_controller')
let salesController = require('../controladores/sales_controller')
let priceController = require('../controladores/price_controller')

router.get('/productos', seacher_product_title_controller);
router.get('/ventas', salesController);
router.get('precio', priceController)



module.exports = router;
