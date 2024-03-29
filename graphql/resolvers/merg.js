const Flight = require('../../models/flight')
const Train = require('../../models/train')
const Bus = require('../../models/bus')
const Hotel = require('../../models/hotel')
const SeatNumber = require('../../models/seatNumber')
const BusSeatNumber = require('../../models/busSeatNumber')
const SeatNumberTrain = require('../../models/seatNumberTrain')
const Room = require('../../models/room')
const HotelBuying =require('../../models/hotelBuy')
const AirplaneBuying=require('../../models/airplaneBuying')
const TrainBuying=require('../../models/trainBuy.jsx')
const User = require('../../models/user')
const busBuying = require('../../models/busBuying.jsx')

const trasformFlight = async flight => {
  return {
    ...flight._doc,
    _id: flight.id,
    date: flight._doc.date,
    creator: user.bind(this, flight._doc.creator)
  }
}

const trasformBuyHotel=async  hotel=>{
  return{
    ...hotel._doc,
    _id:hotel.id,
    user: user.bind(this,hotel._doc.user),
    room: singleRoom.bind(this,hotel._doc.room),
    hotel: singleHotel.bind(this,hotel._doc.hotel),    
  }

}

const trasformBuyFlight=async  flight=>{
  return{
    ...flight._doc,
    _id:flight.id,
    user: user.bind(this,flight._doc.user),
    flight: singleFlight.bind(this,flight._doc.flight),    
  }

}


const trasformBuyBus=async  bus=>{
  return{
    ...bus._doc,
    _id:bus.id,
    user: user.bind(this,bus._doc.user),
    bus: singleBus.bind(this,bus._doc.bus),    
  }

}
const trasformBuyTrain=async  train=>{
  return{
    ...train._doc,
    _id:train.id,
    user: user.bind(this,train._doc.user),
    train: singleTrain.bind(this,train._doc.train),    
  }

}



const singleFlight = async flightId =>{
  try{
    const flight= await Flight.findById(flightId)
    return trasformFlight(flight)

  }catch(err){
    throw err
  }
}


const singleBus = async busId =>{
  try{
    const bus= await Bus.findById(busId)
    return trasformBus(bus)

  }catch(err){
    throw err
  }
}
const singleTrain = async trainId =>{
  try{
    const train= await Train.findById(trainId)
    return trasformTrain(train)

  }catch(err){
    throw err
  }
}






const trasformTicketHotel=async  buy=>{
  return{
    ...buy._doc,
    _id:buy.id,
    hotelBuy: singlehotelBuy.bind(this,buy._doc.hotelBuy),    
  }
}




const singlehotelBuy = async hotelId =>{
  try{
    const hotelRoom= await HotelBuying.findById(hotelId)
    return trasformBuyHotel(hotelRoom)

  }catch(err){
    throw err
  }
}


const trasformTicketFlight=async  buy=>{
  return{
    ...buy._doc,
    _id:buy.id,
    flightBuy: singleflightBuy.bind(this,buy._doc.flightBuy),    
  }
}

const trasformTicketBus=async  buy=>{
  return{
    ...buy._doc,
    _id:buy.id,
    busBuy: singlebusBuy.bind(this,buy._doc.busBuy),    
  }
}
const trasformTicketTrain=async  buy=>{
  return{
    ...buy._doc,
    _id:buy.id,
    trainBuy: singleTrainBuy.bind(this,buy._doc.trainBuy),    
  }
}


const singleTrainBuy = async trainBuy =>{
  try{
    const train= await TrainBuying.findById(trainBuy)
    return trasformBuyTrain(train)

  }catch(err){
    throw err
  }
}


const singleflightBuy = async flightId =>{
  try{
    const flight= await AirplaneBuying.findById(flightId)
    return trasformBuyFlight(flight)

  }catch(err){
    throw err
  }
}

const singlebusBuy = async busId =>{
  try{
    const bus= await busBuying.findById(busId)
    return trasformBuyBus(bus)

  }catch(err){
    throw err
  }
}





const singleRoom = async roomId =>{
  try{
    const room= await Room.findById(roomId)
    return trasformRoom(room)

  }catch(err){
    throw err
  }
}
const singleHotel = async hotelId =>{
  try{
    const hotel= await Hotel.findById(hotelId)
    return trasformHotel(hotel)

  }catch(err){
    throw err
  }
}


const trasformTrain = async train => {
  return {
    ...train._doc,
    _id: train.id,
    date: train._doc.date,
    creator: user.bind(this, train._doc.creator)
  }
}
const trasformBus = async bus => {
  return {
    ...bus._doc,
    _id: bus.id,
    date: bus._doc.date,
    creator: user.bind(this, bus._doc.creator)
  }
}

const trasformHotel = async hotel => {
  return {
    ...hotel._doc,
    _id: hotel.id,
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

const trasformSeatNumber = async seatnumber => {
  return {
    ...seatnumber._doc,
    _id: seatnumber.id,
    flight: flightInfo.bind(this, seatnumber._doc.flight)
  }
}

const seatnumbers = async seatnumberId => {
  try {
    const seatnumbers = await SeatNumber.find({ _id: { $in: seatnumberId } })
    return seatnumbers.map(seatnumber => {
      return trasformSeatNumber(seatnumber)
    })
  } catch (err) {
    throw err
  }
}
const flightInfo = async flightInfoId => {
  try {
    const flightInfo = await Flight.findById(flightInfoId)

    return {
      ...flightInfo._doc,
      _id: flightInfo.id,
      seats: seatnumbers.bind(this, flightInfo._doc.seats)
    }
  } catch (err) {
    throw err
  }
}


const trasformSeatNumberBus = async seatnumber => {
  return {
    ...seatnumber._doc,
    _id: seatnumber.id,
    bus: busInfo.bind(this, seatnumber._doc.bus)
  }
}

const busseatnumbers = async seatnumberBusId => {
  try {
    const busSeatnumbers = await BusSeatNumber.find({ _id: { $in: seatnumberBusId } })
    return busSeatnumbers.map(seatnumber => {
      return trasformSeatNumberBus(seatnumber)
    })
  } catch (err) {
    throw err
  }
}
const busInfo = async busInfoId => {
  try {
    const busInfo = await Bus.findById(busInfoId)

    return {
      ...busInfo._doc,
      _id: busInfo.id,
      seats: busseatnumbers.bind(this, busInfo._doc.seats)
    }
  } catch (err) {
    throw err
  }
}


const trasformRoom = async room => {
  return {
    ...room._doc,
    _id: room.id,
    hotel: hotelInfo.bind(this, room._doc.hotel)
  }
}

const roomsInfo = async roomId => {
  try {
    const rooms = await Room.find({ _id: { $in: roomId } })
    return rooms.map(room => {
      return trasformRoom(room)
    })
  } catch (err) {
    throw err
  }
}
const hotelInfo = async hotelInfoId => {
  try {
    const hotelInfo = await Hotel.findById(hotelInfoId)

    return {
      ...hotelInfo._doc,
      _id: hotelInfo.id,
      rooms: roomsInfo.bind(this, hotelInfo._doc.rooms)
    }
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
const trasformSeatNumberTrain = async seatnumberTrain => {
  return {
    ...seatnumberTrain._doc,
    _id: seatnumberTrain.id,
    train: trainInfo.bind(this, seatnumberTrain._doc.train)
  }
}

const seatnumbersTrain = async seatnumberId => {
  try {
    const seatnumbers = await SeatNumberTrain.find({ _id: { $in: seatnumberId } })
    return seatnumbers.map(seatnumber => {
      return trasformSeatNumberTrain(seatnumber)
    })
  } catch (err) {
    throw err
  }
}
const trainInfo = async trainInfoId => {
  try {
    const trainInfo = await Train.findById(trainInfoId)

    return {
      ...trainInfo._doc,
      _id: trainInfo.id,
      seats: seatnumbersTrain.bind(this, trainInfo._doc.seats)
    }
  } catch (err) {
    throw err
  }
}

exports.trasformFlight = trasformFlight
exports.trasformTrain = trasformTrain
exports.trasformBus = trasformBus
exports.trasformHotel = trasformHotel
exports.trasformSeatNumber = trasformSeatNumber
exports.trasformSeatNumberTrain = trasformSeatNumberTrain
exports.trasformRoom = trasformRoom
exports.trasformBuyHotel=trasformBuyHotel
exports.trasformTicketHotel=trasformTicketHotel
exports.trasformBuyFlight=trasformBuyFlight
exports.trasformTicketFlight=trasformTicketFlight
exports.trasformBuyTrain=trasformBuyTrain
exports.trasformTicketTrain=trasformTicketTrain
exports.trasformSeatNumberBus=trasformSeatNumberBus
exports.trasformBuyBus=trasformBuyBus
exports.trasformTicketBus=trasformTicketBus
