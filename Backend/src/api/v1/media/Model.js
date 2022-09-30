const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const mediaSchema = Schema({
  name: { type: String, trim: true, required: true },
  type : { type: String },
  description: { type: String },
  subject: { type: String },
  videoLink : {type : String},
  image: {type : String},
  isDelete : { type : Boolean , default: false }
},
{ timestamps: true }
);

module.exports = model('media', mediaSchema);
