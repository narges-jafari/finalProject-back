const Flight = require('../../models/flight')
const Train = require('../../models/train')
const Bus = require('../../models/bus')
const Hotel = require('../../models/hotel')



const User = require('../../models/user')
const { dateToString } = require('../../helpers/date')

const trasformFlight = async flight => {
  return {
    ...flight._doc,
    _id: flight.id,
    date: dateToString(flight._doc.date),
    creator: user.bind(this, flight._doc.creator)
  }
}

const trasformTrain = async train => {
  return {
    ...train._doc,
    _id: train.id,
    date: dateToString(train._doc.date),
    creator: user.bind(this, train._doc.creator)
  }
}
const trasformBus = async bus => {
  return {
    ...bus._doc,
    _id: bus.id,
    date: dateToString(bus._doc.date),
    creator: user.bind(this, bus._doc.creator)
  }
}

const trasformHotel = async hotel => {
  return {
    ...hotel._doc,
    _id: hotel.id,
    date: dateToString(hotel._doc.date),
    creator: user.bind(this, hotel._doc.creator)
  }
}
const flights = async flightId => {
  try {
    const flights = await Flight.find({ _id: { $in: flightId } })
    return flights.map(flight => {
      return trasformFlight(flight)
    })
  } catch (err) {
    throw err
  }
}
const trains = async trainId => {
  try {
    const trains = await Train.find({ _id: { $in: trainId } })
    return trains.map(train => {
      return trasformTrain(train)
    })
  } catch (err) {
    throw err
  }
}
const buses = async busId => {
  try {
    const buses = await Bus.find({ _id: { $in: busId } })
    return buses.map(bus => {
      return trasformBus(bus)
    })
  } catch (err) {
    throw err
  }
}

const hotels = async hotelId => {
  try {
    const hotels = await Hotel.find({ _id: { $in: hotelId } })
    return hotels.map(hotel => {
      return trasformHotel(hotel)
    })
  } catch (err) {
    throw err
  }
}

//   const singleFlights = async flightId =>{
//     try{
//       const flight= await Flight.findById(flightId)
//       return trasformFlight(flight)

//     }catch(err){
//       throw err
//     }
//   }

const user = async userId => {
  try {
    const user = await User.findById(userId)

    return {
      ...user._doc,
      _id: user.id,
      createFlights: flights.bind(this, user._doc.createFlights),
      createTrains: trains.bind(this, user._doc.createTrains),
      createBuses: buses.bind(this, user._doc.createBuses),
      createHotels: hotels.bind(this, user._doc.createHotels)




    }
  } catch (err) {
    throw err
  }
}
exports.trasformFlight = trasformFlight
exports.trasformTrain = trasformTrain
exports.trasformBus = trasformBus
exports.trasformHotel = trasformHotel

