var express = require('express');
var router = express.Router();

/*Referenciando controller */
const controller =  require('../controller/customercontroller');
const authService = require('../service/auth-service');

router.post('/', controller.post);// inserir dados 
router.post('/authenticate',controller.authenticate)
router.post('/refresh',authService.authorize,controller.refreshToken)
module.exports = router;
