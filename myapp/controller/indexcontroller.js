const mongoose = require('mongoose');
const indexmd = mongoose.model('indexmodel');
const validator =  require('../validators/validator');
const repositore = require('../repositores/index-repositores');


//Puxar 
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

//Buscar slug(ou outra coisa)
exports.getBySlug = async (req, res, next) => {
    try {
        var data =  await repositore.getBySlug(req.params.slug);
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({
            message:'Falha Na requisicao'
        });
    }
}


exports.getById = async(req, res, next) => {
    try{
        var data = await  repositore.getById(req.params.id)
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({
            message:'Falha Na requisicao'
        });
    }    
   
}

exports.getByTags = async (req, res, next) => { //listando campo
    try {
        var data = await repositore.getByTags(req.params.tagsclient)
        res.status(200).send(data)
    }catch(e){
        res.status(500).send({
            message:'Falha Na requisicao'
        });
    }    
}

//inserir
exports.post = async(req, res, next) => {
    //validacao
try{
    await repositore.create(req.body)
    res.status(201).send({ message: 'Cadastrado com sucesso' })
    
}catch (e){
    res.status(500).send({
        message:'Falha Na requisicao',
    });
}
    
    
};

exports.put = async(req, res, next) => {
     try{
        await repositore.update(req.params.id , req.body)
        res.status(200) .send({message:"atualizado com sucesso"});
     }
     catch(e){
        res.status(400).send({ 
               message:"Falha ao Atualizar produto",
    });
    }
};

exports.delete = async(req, res, next) => {
   try{
   await repositore.delete(req.body.id)
    res.status(200) .send({message:"Deletado com sucesso"});
   
   }catch(e){
        res.status(400).send({ 
               message:"Falha ao Remover",
               data:e
    });
    }
};

