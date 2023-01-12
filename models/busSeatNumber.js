const mongoose = require('mongoose')
const Schema = mongoose.Schema
const seatNumberBusSchema = new Schema({

  number: {
    type: Number,
    required: true
  },

  isDelete: {
    type: Boolean
    // required: true

  },
  bus: {
    type: Schema.Types.ObjectId,
    ref: 'Bus'
  }

})
module.exports = mongoose.model('BusSeatNumber', seatNumberBusSchema)
