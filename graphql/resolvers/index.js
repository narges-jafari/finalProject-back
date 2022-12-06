const authResolver = require('./auth')
const flightResolver = require('./flight')
const trainResolver = require('./train')
const busResolver = require('./bus')
const hotelResolver = require('./hotel')
const seatNumberResolver=require('./seatNumber')
const uploadfileResolver=require('./uploadfile')

// const bookingResolver =require('./booking')

const rootRsolver = {
  ...authResolver,
  ...flightResolver,
  ...trainResolver,
  ...busResolver,
  ...hotelResolver,
  ...seatNumberResolver,
  ...uploadfileResolver
}

module.exports = rootRsolver
