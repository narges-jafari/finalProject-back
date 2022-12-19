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
// searchFlightbyId: async ( args) => {
//   const flight= await Flight.findById(args._id)
//   return flight
// },
searchFlightbyId: async (args) => {
  // await connect();
  const result = await Flight.findById(args.id).then((res) => {
      if (res) {
          return res;
      }
  })
  return result;


},


  createFlight: async (args, req) => {
    if (req.isAuth) {
      return 
    }

    const flight = new Flight({
      originName: args.flightInput.originName,
      destinationName: args.flightInput.destinationName,
      price: args.flightInput.price,
      date: args.flightInput.date,
      capacity:args.flightInput.capacity,
      arrivalTime:args.flightInput.arrivalTime,
      departureTime:args.flightInput.departureTime,
      flightClass: args.flightInput.flightClass,
      flightNumber: args.flightInput.flightNumber,
      airportOrigin: args.flightInput.airportOrigin,
      airportDestination: args.flightInput.airportDestination,
      information: args.flightInput.information,
      airplaneModel:args.flightInput.airplaneModel,
      allowedLoggage:args.flightInput.allowedLoggage,
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

  


