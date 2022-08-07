const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true

  },
  createFlights: [{
    type: Schema.Types.ObjectId,
    ref: 'Flight'
  }],
  createTrains: [{
    type: Schema.Types.ObjectId,
    ref: 'Train'
  }],
  createBuses: [{
    type: Schema.Types.ObjectId,
    ref: 'Bus'
  }],
  createHotels: [{
    type: Schema.Types.ObjectId,
    ref: 'Hotel'
  }]

})
module.exports = mongoose.model('User', userSchema)
