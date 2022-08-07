const mongoose = require('mongoose')
const Schema = mongoose.Schema
const hotelSchema = new Schema({
  city: {
    type: String,
    required: true
  },
  star: {
    type: String,
    required: true
  },

  date: {
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
  information: {
    type: String,
    required: true

  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

})
module.exports = mongoose.model('Hotel', hotelSchema)
