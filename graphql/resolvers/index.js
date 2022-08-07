const authResolver = require('./auth')
const flightResolver = require('./flight')
const trainResolver = require('./train')
const busResolver = require('./bus')
const hotelResolver = require('./hotel')



// const bookingResolver =require('./booking')

const rootRsolver = {
  ...authResolver,
  ...flightResolver,
  ...trainResolver,
  ...busResolver,
  ...hotelResolver
}

module.exports = rootRsolver
