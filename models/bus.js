const mongoose = require('mongoose')
const Schema = mongoose.Schema
const busSchema = new Schema({
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
  busCompany: {
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
  capacity: {
    type: Number,
    required: true

  },
  busNumber: {
    type: Number,
    required: true

  },
  originTerminal: {
    type: String,
    required: true

  },
  destinationTerminal: {
    type: String,
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
  seats: [{
    type: Schema.Types.ObjectId,
    ref: 'BusSeatNumber'
  }],
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

})
module.exports = mongoose.model('Bus', busSchema)
