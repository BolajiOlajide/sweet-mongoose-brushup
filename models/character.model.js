/**
mongoose data types
-------------------
String
Number
Date
Buffer
Boolean
Mixed
ObjectId
Array
Decimal128
Map
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: String,
  ultimate: String
});

module.exports = mongoose.model('Character', characterSchema)
