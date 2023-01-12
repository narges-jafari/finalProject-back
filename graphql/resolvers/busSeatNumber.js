const BusSeatNumber = require('../../models/busSeatNumber')
const Bus = require('../../models/bus')
const { trasformSeatNumberBus } = require('./merg')

module.exports = {
  getBusSeatnumber:async({bus,isDelete})=>{
    try {
      const result = await BusSeatNumber.find({bus,isDelete})
      return result.map(bus => {
        return trasformSeatNumberBus(bus)
      })
    } catch (err) {
      throw err
    }
  },


addSeatNumberBus: async (args, req) => {
    if (req.isAuth) {
      return
    }

    const seatNumber = new BusSeatNumber({

      number: args.seatnumberInputBus.number,
      bus: args.seatnumberInputBus.bus,
      isDelete: false

    })
    let createdSeatnumber
    try {
      const result = await seatNumber
        .save()
      createdSeatnumber = trasformSeatNumberBus(result)
      const bus = await Bus.findById(result._doc.bus.toString())
      if (!bus) {
        throw new Error('bus not found')
      }
      bus.seats.push(seatNumber)
      await bus.save()
      return createdSeatnumber
    } catch (err) {
      throw err
    }
  },
  reservedBusSeat: async (args) => {
    const result=await BusSeatNumber.updateMany({_id:args.id  },{isDelete:args.isDelete},{new:true}).then((res) => {
      if (res) {
        return console.log(true,res)
      }
    })
    return console.log(false,result)
  
  
  },



}
