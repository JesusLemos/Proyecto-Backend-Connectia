var express = require('express');
var router = express.Router();


let loginController = require('../controladores/login_controller')
let registerController = require('../controladores/register_controller')
/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/registro', registerController);
router.post('/login', loginController);

module.exports = router;

