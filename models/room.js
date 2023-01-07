const mongoose = require('mongoose')
const Schema = mongoose.Schema
const roomSchema = new Schema({
  floor: {
    type: Number,
    required: true
  },

  name1: {
    type: String,
    required: true
  },
  name2: {
    type: String,
    // required: true
  },
  roomNumber1: {
    type: Number,
    required: true
  },
  roomNumber2: {
    type: Number,
    // required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  information: {
    type: Object,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  isDelete: {
    type: Boolean
    // required: true

  },
  hotel: {
    type: Schema.Types.ObjectId,
    ref: 'Hotel'
  }

})
module.exports = mongoose.model('Room', roomSchema)
