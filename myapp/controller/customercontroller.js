'use strict';

const validator = require('../validators/validator');
const repositore = require('../repositores/customer-repositores');
const md5 = require('md5');
const emailService = require('../service/email-service');
const authService = require('../service/auth-service');

exports.post = async (req, res, next) => {
    //validacao
    try {
        await repositore.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        })
        emailService.send(req.body.email, 'Bem Vindo Renan', global.EMAIL_TMPL.replace('{0}', req.body.name));

        res.status(201).send({ message: 'Cadastrado com sucesso' })

    } catch (e) {
        res.status(500).send({
            message: 'Falha Na requisicao',
        });
    }


};


exports.authenticate = async (req, res, next) => {
    //validacao
    try {
        const customer = await repositore.authenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        })

        if (!customer) {
            res.status(404).send({
                message: 'Usuario ou senha invalidos',
            });
            return;
        }
        const token = await authService.generateToken({
            id: customer._id,
            email: customer.email,
            name: customer.name
        })

        res.status(201).send({
            token: token,
            data: {
                email: customer.email,
                name: customer.name
            }
        })

    } catch (e) {
        res.status(500).send({
            message: 'Falha Na requisicao'
        });
        console.log(e);

    }


};

exports.refreshToken = async (req, res, next) => {
    //validacao
    try {
        const  token = req.body.token || req.query.token || req.headers['x-access-token']
        const  data =  await  authService.decodeToken(token);
    

        const customer = await repositore.getById(data.id)

        if (!customer) {
            res.status(404).send({
                message: 'Cliente Nao encontrado',
            });
            return;
        }
        const tokenData = await authService.generateToken({
            id: customer._id,
            email: customer.email,
            name: customer.name
        })

        res.status(201).send({
            token: token,
            data: {
                email: customer.email,
                name: customer.name
            }
        })

    } catch (e) {
        res.status(500).send({
            message: 'Falha Na requisicao'
        });
        console.log(e);

    }


};