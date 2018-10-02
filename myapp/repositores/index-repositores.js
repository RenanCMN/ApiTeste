'use strict';
const mongoose = require('mongoose');
const indexmd = mongoose.model('indexmodel');


exports.get = async() => {
    const res = await indexmd.find(
        { active: true },
        'title  idade  slug');
    return res;
}

exports.getBySlug = async(slug) => {
  const res = await indexmd.findOne({
        slug: slug,
        active: true
    }, 'title  idade slug  description  tagsclient ')
    return res;
}

exports.getById = async(id) => {
   const res = await indexmd.findById(id)
   return res;
}

exports.getByTags = async(tagsclient) => {
    const res = await  indexmd.find({
        tagsclient: tagsclient,
        active: true
    }, 'title tagsclient')
    return res;
}

exports.create = async(data) => {
    var indexmdx = new indexmd(data);
    await indexmdx.save();
}

exports.update = async (id,data) => {
    await indexmd.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            description: data.description,
            idade: data.idade
        }
    })
}

exports.delete = async (id) =>{
  await  indexmd.findOneAndRemove(id);
}