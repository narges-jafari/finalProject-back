const Flight = require('../../models/flight')
const User = require('../../models/user')

const { trasformFlight,trasformFlights } = require('./merg')
const { dateToString } = require('../../helpers/date')
const { timeToString} = require('../../helpers/time')

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
  searchFlight: async ( { originName ,destinationName,flightClass,date}) => {
    const flight= await Flight.find({originName,destinationName,flightClass,date})
    return flight
   
},

  createFlight: async (args, req) => {
    if (req.isAuth) {
      return 
    }

    const flight = new Flight({
      originName: args.flightInput.originName,
      destinationName: args.flightInput.destinationName,
      price: args.flightInput.price,
      date: dateToString(args.flightInput.date),
      flightClass: args.flightInput.flightClass,
      arrivalTime:timeToString(args.flightInput.arrivalTime),
      departureTime:timeToString(args.flightInput.departureTime),
      flightNumber: args.flightInput.flightNumber,
      airportOrigin: args.flightInput.airportOrigin,
      airportDestination: args.flightInput.airportDestination,
      airline:args.flightInput.airline,
      information: args.flightInput.information,
      airplaneModel:args.flightInput.airplaneModel,
      allowedLoggage:args.flightInput.allowedLoggage,
      capacity:args.flightInput.capacity,
      airplaneCompany:args.flightInput.airplaneCompany,
      creator: args.flightInput.creator,
    })
    let createdFlight
    try {
      const result = await flight
        .save()
      createdFlight = trasformFlight(result)
      const creator = await User.findById(result._doc.creator.toString())
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

  


