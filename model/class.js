const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const ClassSchema = new Schema({

    name:{type:String},
    students:{type:"ObjectId", ref:"Student"}
  
  })

  const Class = mongoose.model('Class', ClassSchema);

  module.exports = Class;
  