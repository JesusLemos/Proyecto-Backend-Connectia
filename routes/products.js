var express = require('express');
var router = express.Router();
const seacher_product_title_controller = require('../controladores/seacher_product_title_controller');
const salesController = require('../controladores/sales_controller');
const priceController = require('../controladores/price_controller');
const visualizePoduct = require('../controladores/visualize_product_controller');
const orderController = require('../controladores/order_controller');
const seacher_product_id_controller = require('../controladores/seacher_product_id_controller');
const topProvinciasController = require('../controladores/topProvincias_controller');
const categoryProduct = require('../controladores/category_controller');

router.get('/productos/:nombre', seacher_product_title_controller);
router.get('/ventas', salesController);
router.get('/precio', priceController);
router.get('/visualizarproductos', visualizePoduct);
router.get('/mostrarproducto/:id', seacher_product_id_controller);
router.get('/provinciastop', topProvinciasController);
router.post('/pedidos', orderController);
router.get('/categoria/:id', categoryProduct);


module.exports = router;
