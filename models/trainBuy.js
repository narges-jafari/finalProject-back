const mongoose = require('mongoose')
const Schema = mongoose.Schema
const trainBuyingSchema = new Schema({
  train: {
    type: Schema.Types.ObjectId,
    ref: 'Train'
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

  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  isDelete: {
    type: Boolean,
  }

}
)
module.exports = mongoose.model('TrainBuying', trainBuyingSchema)
