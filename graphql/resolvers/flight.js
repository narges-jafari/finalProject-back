const Flight = require('../../models/flight')
const User = require('../../models/user')
const AirplaneBuying=require('../../models/airplaneBuying')
const FlightTicket=require('../../models/ticketFlight')

const { trasformFlight,trasformBuyFlight,trasformTicketFlight } = require('./merg')

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
  searchFlight: async ({ originName, destinationName, flightClass, date }) => {
    const flight = await Flight.find({ originName, destinationName, flightClass, date })
    return flight
  },
  searchFlightbyDate: async ({ date }) => {
    try {
      const flights = await Flight.find({ date })
      return flights.map(flight => {
        return trasformFlight(flight)
      })
    } catch (err) {
      throw err
    }
  },
  searchFlightbyName: async ({ originName }) => {
    try {
      const flights = await Flight.find({ originName })
      return flights.map(flight => {
        return trasformFlight(flight)
      })
    } catch (err) {
      throw err
    }
  },
  searchFlightbyId: async (args) => {
  // await connect();
    const result = await Flight.findById(args.id).then((res) => {
      if (res) {
        return res
      }
    })
    return result
  },
<<<<<<< HEAD

  allFlightTicket: async () => {
    const results = await FlightTicket.find()
    return results.slice(-1).map(hotel => {
      return trasformTicketFlight(hotel)
    })
  },
  searchFlightTicketByUserId: async ({userId}) => {

    const results = await FlightTicket.find({ userId })
if(results){
return results.map(hotel => {
  return trasformTicketFlight(hotel)
})
}else return(
console.log('yes',no)
)
      
    },
=======
>>>>>>> 860eb8492d6f0aaaba5664bb560ac201509f560c
  searchFlightTicketById: async (args) => {
    const result = await FlightTicket.findById(args.id).then((res) => {
      if (res) {
        return res
      }
    })
    if(result){

        
      return trasformTicketFlight(result)
    }else return(
null)
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
      capacity: args.flightInput.capacity,
      arrivalTime: args.flightInput.arrivalTime,
      departureTime: args.flightInput.departureTime,
      flightClass: args.flightInput.flightClass,
      flightNumber: args.flightInput.flightNumber,
      airportOrigin: args.flightInput.airportOrigin,
      airportDestination: args.flightInput.airportDestination,
      information: args.flightInput.information,
      airplaneModel: args.flightInput.airplaneModel,
      allowedLoggage: args.flightInput.allowedLoggage,
      airplaneCompany: args.flightInput.airplaneCompany,
      creator: args.flightInput.creator
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
  },
  airplaneBuy :async (args,req) =>{
    if(!req.isAuth){

    }
  const fetchFlight = await Flight.findById({_id:args.flightId})
  const fetchUser = await User.findById({_id:args.userId})

  const buying =new AirplaneBuying({
    flight:fetchFlight,
    user:fetchUser,
   isDelete:false,
   fullName:args.airplaneBuyInput.fullName,
   birthDate:args.airplaneBuyInput.birthDate,
   gendere:args.airplaneBuyInput.gendere,
   nationalCode:args.airplaneBuyInput.nationalCode,
   price:args.airplaneBuyInput.price,

  })
  const result= await buying.save()
  return trasformBuyFlight(result)


},
makeFlightTicket :async (args,req) =>{
  if(!req.isAuth){

  }
const fetchData = await AirplaneBuying.findById({_id:args.flightBuy})

const ticket =new FlightTicket({
  flightBuy:fetchData,
 date:args.flightTicketInput.date,
 serialId:args.flightTicketInput.serialId,
 codeId:args.flightTicketInput.codeId,
 searchId:args.flightTicketInput.searchId,
 seatnumber:args.flightTicketInput.seatnumber

})
const result= await ticket.save()
return trasformTicketFlight(result)
<<<<<<< HEAD



},
updateFlightCapacity: async (args) => {
  const result=await Flight.findOneAndUpdate({_id:args.id  },{capacity:args.capacity},{new:true}).then((res) => {
    if (res) {
      return res
    }
  })
  return result

},


=======



},
updateFlightCapacity: async (args) => {
  const result=await Flight.findOneAndUpdate({_id:args.id  },{capacity:args.capacity},{new:true}).then((res) => {
    if (res) {
      return res
    }
  })
  return result

},


>>>>>>> 860eb8492d6f0aaaba5664bb560ac201509f560c
}
