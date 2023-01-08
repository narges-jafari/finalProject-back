const mongoose = require('mongoose')
const Schema = mongoose.Schema
const trainTicketSchema = new Schema({
  trainBuy: {
        type: Schema.Types.ObjectId,
        ref: 'TrainBuying'
      },
      seatnumber:{
        type: Object,
        required: true

      },
      hallDegree:{
        type: Object,
        required: true

      },
      hallNumber:{
        type: Object,
        required: true

      },
      trainCompartment:{
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
module.exports = mongoose.model('TrainTicket', trainTicketSchema)
