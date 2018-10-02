const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    customer: {
        //Referenciando  cliente (Customer.js)
        type:mongoose.Schema.Types.ObjectId,
        ref:'Customer'
    },
    number: {
        type:String,
        required:true
    },
    createDate: {
        type:Date,
        required:true,
        default:Date.now
    },
     status:{
         type:String,
         required:true,
         enum:['created','done'],
         default:'created'
     },
     itens:[{
        quantity: {
            type:Number,
            required:true,
            default:1
        },
        price:{
            type:Number,
            require:true
        },
        indexmd:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'indexmodel'
        }
     }],    
     
})

module.exports = mongoose.model('Order',schema)