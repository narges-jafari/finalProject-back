const SeatNumber = require('../../models/seatNumber')
const Flight = require('../../models/flight')
const { trasformSeatNumber } = require('./merg')

module.exports = {
  events: async () => {
    try {
      const events = await SeatNumber.find()
      return events.map(event => {
        return {
          ...event._doc,
          _id: event.id

        }
      })
    } catch (err) {
      console.log(err)
      throw err
    }
  },
  getFlightSeatnumber:async({flight,isDelete})=>{
    try {
      const flights = await SeatNumber.find({flight,isDelete})
      return flights.map(flight => {
        return trasformSeatNumber(flight)
      })
    } catch (err) {
      throw err
    }
  },


  addSeatNumber: async (args, req) => {
    if (req.isAuth) {
      return
    }

    const seatNumber = new SeatNumber({

      number: args.seatnumberInput.number,
      flight: args.seatnumberInput.flight,
      isDelete: false

    })
    let createdSeatnumber
    try {
      const result = await seatNumber
        .save()
      createdSeatnumber = trasformSeatNumber(result)
      const flight = await Flight.findById(result._doc.flight.toString())
      if (!flight) {
        throw new Error('flight not found')
      }
      flight.seats.push(seatNumber)
      await flight.save()
      return createdSeatnumber
    } catch (err) {
      throw err
    }
  },
  reservedFlightSeat: async (args) => {
    const result=await SeatNumber.updateMany({_id:args.id  },{isDelete:args.isDelete},{new:true}).then((res) => {
      if (res) {
        return console.log(true,res)
      }
    })
    return console.log(false,result)
  
  
  },
}
