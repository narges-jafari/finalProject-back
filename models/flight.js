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
 
  price: {
    type: Number,
    required: true

  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }

})
module.exports = mongoose.model('Flight', flightSchema)
