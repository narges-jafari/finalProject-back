const mongoose = require('mongoose')
const Schema = mongoose.Schema
const trainSchema = new Schema({
  originName: {
    type: String,
    required: true
  },
  destinationName: {
    type: String,
    required: true
  },
  //   createEvents: [{
  //     type: Schema.Types.ObjectId,
  //     ref: 'Event'
  //   }]
  date: {
    type: String,
    required: true
  },
  // شرکت ریلی
  railCompany: {
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
  trainNumber: {
    type: Number,
    required: true

  },
  railwayOrigin: {
    type: String,
    required: true

  },
  railwayDestination: {
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
module.exports = mongoose.model('Train', trainSchema)
