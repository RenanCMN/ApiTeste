'use strict';
const mongoose = require('mongoose');
const customer = mongoose.model('Customer');

exports.create = async(data) => {
    var customerx = new customer(data);
    await customerx.save();
}

exports.authenticate= async(data) => {
    const res = await customer.findOne(
        { email:data.email,
          password:data.password });
    return res;
}

exports.getById= async(id) => {
    const res = await customer.findById(id);
    return res;
}