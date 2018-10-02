var express = require('express');
var router = express.Router();

/*Referenciando controller */
const controller =  require('../controller/ordercontroller');
const authService = require('../service/auth-service')
router.post('/', authService.authorize, controller.post);// inserir dados 
router.get('/',authService.authorize,controller.get);
module.exports = router;
