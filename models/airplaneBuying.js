const mongoose = require('mongoose')
const Schema = mongoose.Schema
const airplaneBuyingSchema = new Schema({
  flight: {
    type: Schema.Types.ObjectId,
    ref: 'Flight'
  },
  fullName: {
    type: Object,
    required: true
  },
  price: {
    type: Number,
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
  // seatnumber: {
  //   type: Object,
  //   required: true
  // },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  isDelete: {
    type: Boolean,
  }

}
)
module.exports = mongoose.model('AirplaneBuying', airplaneBuyingSchema)
