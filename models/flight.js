
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
  capacity: {
    type: Number,
    required: true
  },

  date: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true

  },
  flightClass: {
    type: String,
    required: true
  },
  departureTime: {
    type: String,
    required: true

  },
  arrivalTime: {
    type: String,
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
    type: Object,
    required: false

  },
  airplaneModel: {
    type: String,
    required: true

  },
  allowedLoggage: {
    type: Number,
    required: true

  },

  airplaneCompany: {
    type: String,
    required: true

  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },

  seats: [{
    type: Schema.Types.ObjectId,
    ref: 'SeatNumber'
  }]

})
module.exports = mongoose.model('Flight', flightSchema)
