const mongoose = require('mongoose')
const Schema = mongoose.Schema
const roomSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true
  },

  information: {
    type: Schema.Types.ObjectId,
    required: true
  },
  price: {
    type: Number,
    required: true
  }

})
module.exports = mongoose.model('Ticket', roomSchema)
