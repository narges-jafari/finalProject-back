const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ticketSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },

  reserve: {
    type: Schema.Types.ObjectId,
    required: true
  }

})
module.exports = mongoose.model('Ticket', ticketSchema)
