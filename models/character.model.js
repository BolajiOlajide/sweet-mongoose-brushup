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
const mongoose = require('../db');
const { Schema } = mongoose;

const characterSchema = new Schema({
  name: { type: String, unique: true },
  ultimate: String
});

module.exports = mongoose.model('Character', characterSchema)
