const mongoose = require('mongoose')
const Schema = mongoose.Schema
const hotelBuyingSchema = new Schema({
  hotel: {
    type: Schema.Types.ObjectId,
    ref: 'Hotel'
  },
  fullName: {
    type: Object,
    required: true
  },
  birthDate: {
    type: Object,
    required: true
  },
  gendere: {
    type: Object,
    required: true
  },
  nationalCode: {
    type: Object,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  room: {
    type: Schema.Types.ObjectId,
    ref: 'Room'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  isDelete: {
    type: Boolean,
  }

}
)
module.exports = mongoose.model('HotelBuying', hotelBuyingSchema)
