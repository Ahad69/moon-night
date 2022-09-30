const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const productSchema = Schema({
  name: { type: String, trim: true },
  category : { type: String },
  description: { type: String },
  imgF: {type : String},
  imgS: {type : String},
  isDelete : { type : Boolean , default: false }
},
{ timestamps: true }
);

module.exports = model('product', productSchema);
