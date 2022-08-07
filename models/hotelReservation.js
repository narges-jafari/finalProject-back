const mongoose = require('mongoose')
const Schema = mongoose.Schema
const hotelreservationSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  name: {
    type: Schema.Types.ObjectId,
    required: true
  },

  hotel: {
    type: Schema.Types.ObjectId,
    required: true
  },
  room: {
    type: Schema.Types.ObjectId,
    required: true
  }

})
module.exports = mongoose.model('HotelReservation', hotelreservationSchema)
