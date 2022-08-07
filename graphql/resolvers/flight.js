const Flight = require('../../models/flight')
const User = require('../../models/user')

const { trasformFlight } = require('./merg')
const { dateToString } = require('../../helpers/date')

module.exports = {
  flights: async () => {
    try {
      const flights = await Flight.find()
      return flights.map(flight => {
        return trasformFlight(flight)
      })
    } catch (err) {
      throw err
    }
  },
  createFlight: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('not login ')
    }

    const flight = new Flight({
      originName: args.flightInput.originName,
      destinationName: args.flightInput.destinationName,
      price: args.flightInput.price,
      flightClass: args.flightInput.flightClass,
      time: args.flightInput.time,
      capacity: args.flightInput.capacity,
      flightNumber: args.flightInput.flightNumber,
      airportOrigin: args.flightInput.airportOrigin,
      airportDestination: args.flightInput.airportDestination,
      information: args.flightInput.information,
      date: dateToString(args.flightInput.date),
      creator: '62ebac44e2492fd084f4454c'
    })
    let createdFlight
    try {
      const result = await flight
        .save()
      createdFlight = trasformFlight(result)
      const creator = await User.findById('62ebac44e2492fd084f4454c')
      if (!creator) {
        throw new Error('user not found')
      }
      creator.createFlights.push(flight)
      await creator.save()
      return createdFlight
    } catch (err) {
      throw err
    }
  }

}
