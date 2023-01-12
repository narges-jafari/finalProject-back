const authResolver = require('./auth')
const flightResolver = require('./flight')
const trainResolver = require('./train')
const busResolver = require('./bus')
const hotelResolver = require('./hotel')
const hotelRoomResolver = require('./room')
const seatNumberResolver = require('./seatNumber')
const seatNumberTrainResolver = require('./trainSeatNumbers')
const seatNumberBusResolver = require('./busSeatNumber')

const rootRsolver = {
  ...authResolver,
  ...flightResolver,
  ...trainResolver,
  ...busResolver,
  ...hotelResolver,
  ...seatNumberResolver,
  ...seatNumberTrainResolver,
  ...hotelRoomResolver,
  ...seatNumberBusResolver
}

module.exports = rootRsolver
