'use strict';

const repositore = require('../repositores/order-repositores');
const guid  =  require('guid');
const authService = require('../service/auth-service');

exports.get = async(req, res, next) => { //listando campo
    try{
       var data = await repositore.get();
       res.status(200).send(data);
     }catch(e){
         res.status(500).send({
             message:'Falha Na requisicao'
         });
     }
   }

exports.post = async(req, res, next) => {
try{
    const  token = req.body.token || req.query.token || req.headers['x-access-token']
    const  data =  await  authService.decodeToken(token);

    await repositore.create({
        customer : data.id,
        number :  guid.raw().substring(0,6),
        itens  : req.body.itens
    })
    res.status(201).send({ message: 'Pedido Cadastrado com sucesso' })
    
}catch (e){
    res.status(500).send({
        message:'Falha Na requisicao',
    });
}
    
    
};