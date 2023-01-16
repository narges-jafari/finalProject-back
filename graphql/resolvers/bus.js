const Bus = require('../../models/bus')
const User = require('../../models/user')

const { trasformBus,trasformBuyBus,trasformTicketBus } = require('./merg')
const { dateToString } = require('../../helpers/date')
const busBuying = require('../../models/busBuying.jsx')
const BusTicket = require('../../models/busTicket')

module.exports = {
  buses: async () => {
    try {
      const buses = await Bus.find()
      return buses.map(bus => {
        return trasformBus(bus)
      })
    } catch (err) {
      throw err
    }
  },
  searchBus: async ({ originName, destinationName, date }) => {
    const bus = await Bus.find({ originName, destinationName, date })
    return bus
  },

  searchBusbyId: async (args) => {
    // await connect();
      const result = await Bus.findById(args.id).then((res) => {
        if (res) {
          return res
        }
      })
      return result
    },
  createBus: async (args, req) => {
    if (!req.isAuth) {
      // throw new Error('not login ')
    }



    const bus = new Bus({
      originName: args.busInput.originName,
      destinationName: args.busInput.destinationName,
      price: args.busInput.price,
      busCompany: args.busInput.busCompany,
      arrivalTime: args.busInput.arrivalTime,
      departureTime: args.busInput.departureTime,
      capacity: args.busInput.capacity,
      busNumber: args.busInput.busNumber,
      originTerminal: args.busInput.originTerminal,
      destinationTerminal: args.busInput.destinationTerminal,
      information: args.busInput.information,
      date: args.busInput.date,
      creator:args.busInput.creator
    })
    let createdBus
    try {
      const result = await bus
        .save()
      createdBus = trasformBus(result)
      const creator = await User.findById(result._doc.creator.toString())
      if (!creator) {
        throw new Error('user not found')
      }
      creator.createBuses.push(bus)
      await creator.save()
      return createdBus
    } catch (err) {
      throw err
    }
  },
  busBuy :async (args,req) =>{
    if(!req.isAuth){

    }
  const fetchbus = await Bus.findById({_id:args.busId})
  const fetchUser = await User.findById({_id:args.userId})

  const buying =new busBuying({
    bus:fetchbus,
    user:fetchUser,
   isDelete:false,
   fullName:args.busBuyInput.fullName,
   birthDate:args.busBuyInput.birthDate,
   gendere:args.busBuyInput.gendere,
   nationalCode:args.busBuyInput.nationalCode,
   price:args.busBuyInput.price,

  })
  const result= await buying.save()
  return trasformBuyBus(result)


},
updateBusCapacity: async (args) => {
  const result=await Bus.findOneAndUpdate({_id:args.id  },{capacity:args.capacity},{new:true}).then((res) => {
    if (res) {
      return res
    }
  })
  return result

},
searchBusTicketById: async (args) => {
  const result = await BusTicket.findById(args.id).then((res) => {
    if (res) {
      return res
    }
  })
  if(result){

      
    return trasformTicketBus(result)
  }else return(
null)
},
searchBusbyName: async ({ originName }) => {
  try {
    const buses = await Bus.find({ originName })
    return buses.map(bus => {
      return trasformBus(bus)
    })
  } catch (err) {
    throw err
  }
},
getAllBusTicket:async()=>{
  const results = await BusTicket.find()
  return results.slice(-2).map(train => {
    return trasformTicketBus(train)
  })

},

searchAllBusTicke:async()=>{
  const results = await BusTicket.find()
  return results.map(train => {
    return trasformTicketBus(train)
  })

},

searchBusTicketByUserId: async ({userId}) => {

  const results = await BusTicket.find({ userId })
if(results){
return results.slice(-2).map(train => {
  return trasformTicketBus(train)
})
}else return(
console.log('yes',no)
)
    
  },
allBusTicketbyDate: async ({ date }) => {
    try {
      const buses = await BusTicket.find({ date })
      return buses.map(bus => {
        return trasformTicketBus(bus)
      })
    } catch (err) {
      throw err
    }
  },  


makeBusTicket :async (args,req) =>{
  if(!req.isAuth){

  }
const fetchData = await busBuying.findById({_id:args.busBuy})

const ticket =new BusTicket({
  busBuy:fetchData,
 date:args.busTicketInput.date,
 serialId:args.busTicketInput.serialId,
 codeId:args.busTicketInput.codeId,
 searchId:args.busTicketInput.searchId,
 seatnumber:args.busTicketInput.seatnumber

})
const result= await ticket.save()
return trasformTicketBus(result)



},


}
