const mongoose = require('mongoose')
const Schema = mongoose.Schema
const hotelTicketSchema = new Schema({
    hotelBuy: {
        type: Schema.Types.ObjectId,
        ref: 'HotelBuying'
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
module.exports = mongoose.model('HotelTicket', hotelTicketSchema)
