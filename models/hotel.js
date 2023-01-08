const mongoose = require('mongoose')
const Schema = mongoose.Schema
const hotelSchema = new Schema({
  city: {
    type: String,
    required: true
  },
  star: {
    type: Number,
    required: true
  },

  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true

  },
  capacity: {
    type: Number,
    required: true

  },
  price: {
    type: Number,
    required: true

  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  rooms: [{
    type: Schema.Types.ObjectId,
    ref: 'Room'
  }]

})
module.exports = mongoose.model('Hotel', hotelSchema)
