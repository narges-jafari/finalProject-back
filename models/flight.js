const mongoose = require('mongoose')
const Schema = mongoose.Schema
const flightSchema = new Schema({
  originName: {
    type: String,
    required: true
  },
  destinationName: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  flightClass: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true

  },
  capacity: {
    type: Number,
    required: true

  },
  flightNumber: {
    type: Number,
    required: true

  },
  airportOrigin: {
    type: String,
    required: true

  },
  airportDestination: {
    type: String,
    required: true

  },
  information: {
    type: String,
    required: true

  },
  price: {
    type: String,
    required: true

  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

})
module.exports = mongoose.model('Flight', flightSchema)
