const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const studentSchema = new Schema({
    name: { type: String },
    age: { type: Number },
    subject: { type: String }
    
  });
  const Student = mongoose.model('Student', studentSchema);


  module.exports = Student ;
