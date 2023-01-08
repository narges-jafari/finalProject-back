const Train = require('../../models/train')
const User = require('../../models/user')
const TrainBuying=require('../../models/trainBuy.jsx')

const TrainTicket=require('../../models/ticketTrain.jsx')
const { trasformTrain,trasformBuyTrain,trasformTicketTrain } = require('./merg')

module.exports = {
  trains: async () => {
    try {
      const trains = await Train.find()
      return trains.map(train => {
        return trasformTrain(train)
      })
    } catch (err) {
      throw err
    }
  },
  searchTrain: async ({ originName, destinationName, hallType, date }) => {
    const train = await Train.find({ originName, destinationName, hallType, date })
    return train
  },
  searchTrainbyId: async (args) => {
  // await connect();
    const result = await Train.findById(args.id).then((res) => {
      if (res) {
        return res
      }
    })
    return result
  },
  searchTrainbyDate: async ({ date }) => {
    try {
      const trains = await Train.find({ date })
      return trains.map(train => {
        return trasformTrain(train)
      })
    } catch (err) {
      throw err
    }
  },
  searchTrainTicketById: async (args) => {
    const result = await TrainTicket.findById(args.id).then((res) => {
      if (res) {
        return res
      }
    })
    if(result){

        
      return trasformTicketTrain(result)
    }else return(
null)
  },
  searchTrainTicketByUserId: async ({userId}) => {

    const results = await TrainTicket.find({ userId })
if(results){
  return results.slice(-1).map(train => {
    return trasformTicketTrain(train)
  })
}else return(
console.log('yes',no)
)
      
    },
  searchTrainbyName: async ({ originName }) => {
    try {
      const trains = await Train.find({ originName })
      return trains.map(train => {
        return trasformTrain(train)
      })
    } catch (err) {
      throw err
    }
  },
  createTrain: async (args, req) => {
    if (!req.isAuth) {
      // throw new Error('not login ')
    }

    const train = new Train({
      originName: args.trainInput.originName,
      destinationName: args.trainInput.destinationName,
      date: args.trainInput.date,
      arrivalTime: args.trainInput.arrivalTime,
      departureTime: args.trainInput.departureTime,
      // hallNumber: args.trainInput.hallNumber,
      railCompany: args.trainInput.railCompany,
      hallType: args.trainInput.hallType,
      // hallDegree:args.trainInput.hallDegree,
      capacity: args.trainInput.capacity,
      trainNumber: args.trainInput.trainNumber,
      railwayOrigin: args.trainInput.railwayOrigin,
      railwayDestination: args.trainInput.railwayDestination,
      information: args.trainInput.information,
      price: args.trainInput.price,
      allowedLoggage: args.trainInput.allowedLoggage,
      creator: args.trainInput.creator
    })
    let createdTrain
    try {
      const result = await train
        .save()
      createdTrain = trasformTrain(result)
      const creator = await User.findById(result._doc.creator.toString())
      if (!creator) {
        throw new Error('user not found')
      }
      creator.createTrains.push(train)
      await creator.save()
      return createdTrain
    } catch (err) {
      throw err
    }
  },
  trainBuy :async (args,req) =>{
    if(!req.isAuth){

    }
  const fetchTrain = await Train.findById({_id:args.trainId})
  const fetchUser = await User.findById({_id:args.userId})

  const buying =new TrainBuying({
    train:fetchTrain,
    user:fetchUser,
   isDelete:false,
   fullName:args.trainBuyingInput.fullName,
   birthDate:args.trainBuyingInput.birthDate,
   gendere:args.trainBuyingInput.gendere,
   nationalCode:args.trainBuyingInput.nationalCode,
   price:args.trainBuyingInput.price,

  })
  const result= await buying.save()
  return trasformBuyTrain(result)


},
makeTrainTicket :async (args,req) =>{
  if(!req.isAuth){

  }
const fetchData = await TrainBuying.findById({_id:args.trainBuy})


const ticket =new TrainTicket({
  trainBuy:fetchData,
  date:args.trainTicketInput.date,
  serialId:args.trainTicketInput.serialId,
  codeId:args.trainTicketInput.codeId,
  searchId:args.trainTicketInput.searchId,
  seatnumber:args.trainTicketInput.seatnumber,
  hallNumber:args.trainTicketInput.hallNumber,
  trainCompartment:args.trainTicketInput.trainCompartment,
  hallDegree:args.trainTicketInput.hallDegree

})
const result= await ticket.save()

if(result){
  return result
}else 
return console.log(false)



},

updateTrainCapacity: async (args) => {
  const result=await Train.findOneAndUpdate({_id:args.id  },{capacity:args.capacity},{new:true}).then((res) => {
    if (res) {
      return res
    }
  })
  return result

},

}
