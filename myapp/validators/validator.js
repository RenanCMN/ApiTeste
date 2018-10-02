'use strict'

let errors = [];

function validator(){
    errors = [];
}

validator.prototype.isRequired = (Value,message)=>{
    if (!Value||Value.lenght <=0)
        errors.push({message: message})
}


validator.prototype.hasMinLen = (Value,min,message)=>{
    if (!Value||Value.lenght < min )
        errors.push({message: message})
}


validator.prototype.hasMaxLen = (Value,max,message)=>{
    if (!Value||Value.lenght > max )
        errors.push({message: message})
}

validator.prototype.isFixedLen = (Value,len,message)=>{
    if (!Value||Value.lenght != len )
        errors.push({message: message})
}

validator.prototype.isEmail = (value, message) => {
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if (!reg.test(value))
        errors.push({ message: message });
}

validator.prototype.errors = () => { 
    return errors; 
}

validator.prototype.clear = () => {
    errors = [];
}

validator.prototype.isValid = () => {
    return errors.length == 0;
}

module.exports = validator;

