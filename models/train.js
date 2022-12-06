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
  date: {
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
  hallNumber:{
    type:Number,
    require:true
  },
  // شرکت ریلی
  railCompany: {
    type: String,
    required: true
  },
  hallType:{
    type:String,
    required: true
  },
  hallDegree:{
    type:Number,
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
    type: Object,
    required: true

  },
  price: {
    type: String,
    required: true

  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  seats:[{
    type: Schema.Types.ObjectId,
    ref: 'SeatNumber'
   }]

})
module.exports = mongoose.model('Train', trainSchema)
