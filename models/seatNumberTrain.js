const mongoose = require('mongoose')
const Schema = mongoose.Schema
const seatNumberTrainSchema = new Schema({

  number: {
    type: Number,
    required: true
  },

  hallDegree: {
    type: String,
    required: true
  },
  hallNumber: {
    type: String,
    require: true
  },
  trainCompartment: {
    type: Number,
    required: true

  },

  isDelete: {
    type: Boolean
    // required: true

  },
  train: {
    type: Schema.Types.ObjectId,
    ref: 'Train'
  }

})
module.exports = mongoose.model('SeatNumberTrain', seatNumberTrainSchema)
