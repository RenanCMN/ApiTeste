var express = require('express');
var router = express.Router();

/*Referenciando controller */
const controller =  require('../controller/indexcontroller');
const authService = require('../service/auth-service');
/* GET home page. */
router.get('/', controller.get);
router.get('/:slug', controller.getBySlug);
router.get('/admin/:id',controller.getById);
router.get('/tags/:tagsclient', controller.getByTags);
router.post('/',authService.authorize,controller.post);// inserir dados 
router.put('/:id', controller.put);// Atualiza //:id mapeamento da  url 
router.delete('/',controller.delete);

module.exports = router;
