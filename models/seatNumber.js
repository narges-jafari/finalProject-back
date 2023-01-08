const mongoose = require('mongoose')
const Schema = mongoose.Schema
const seatNumberSchema = new Schema({

  number: {
    type: Number,
    required: true
  },

  isDelete: {
    type: Boolean
    // required: true

  },
  flight: {
    type: Schema.Types.ObjectId,
    ref: 'Flight'
  }

})
module.exports = mongoose.model('SeatNumber', seatNumberSchema)
