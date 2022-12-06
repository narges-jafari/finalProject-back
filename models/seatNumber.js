const mongoose = require('mongoose')
const Schema = mongoose.Schema
const seatNumberSchema = new Schema({
 
  number: {
    type: Number,

  },
  state: {
    type: Number,
    required: false

  },
  trainCompartment: {
    type: Number,
    required: false

  },

  isDelete: {
    type: Boolean,
    // required: true

  },
  flight: {
    type: Schema.Types.ObjectId,
    ref: 'Flight'
  },

  
  

})
module.exports = mongoose.model('SeatNumber', seatNumberSchema)
