const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title : {
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        trim:true,
        index:true,
        unique:true
    },
    description: {
        type:String,
        required :true
    },
    quant: {
        type:Number,
        required :true
    },
    active:{
        type:Boolean,
        required:true,
        default:true
    },
    tagsprod :[{
        type:String,
        required:true
    }]
})

module.exports = mongoose.model('indexmodel',schema)