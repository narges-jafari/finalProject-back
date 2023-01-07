const mongoose = require('mongoose')
const Schema = mongoose.Schema
const flightTicketSchema = new Schema({
    flightBuy: {
        type: Schema.Types.ObjectId,
        ref: 'AirplaneBuying'
      },
      seatnumber:{
        type: Object,
        required: true

      },
  date: {
    type: String,
    required: true
  },
  serialId: {
    type: Number,
    required: true
  },
  searchId: {
    type: String,
    required: true
  },
  codeId: {
    type: Number,
    required: true
  }
 
}
)
module.exports = mongoose.model('FlightTicket', flightTicketSchema)
