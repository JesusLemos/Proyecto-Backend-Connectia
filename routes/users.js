const express = require('express');
const router = express.Router();

const provincia = require('../controladores/provincias_controller')
const loginController = require('../controladores/login_controller')
const registerController = require('../controladores/register_controller')

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/registro', registerController);
router.post('/login', loginController);
router.get('/provincia/:nombre', provincia);

module.exports = router;

