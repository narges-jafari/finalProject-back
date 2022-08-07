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
  time: {
    type: String,
    required: true

  },
  capacity: {
    type: String,
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
module.exports = mongoose.model('Bus', busSchema)
