const SeatNumberTrain = require('../../models/seatNumberTrain')
const Train = require('../../models/train')
const { trasformSeatNumberTrain } = require('./merg')

module.exports = {
  trainSeatnumbers: async () => {
    try {
      const seatnumbers = await SeatNumberTrain.find()
      return seatnumbers.map(train => {
        return trasformSeatNumberTrain(train)
      })
    } catch (err) {
      throw err
    }
  },
<<<<<<< HEAD
  getTrainSeatnumber:async({train,isDelete})=>{
    try {
      const trains = await SeatNumberTrain.find({train,isDelete})
      return trains.map(train => {
        return trasformSeatNumberTrain(train)
      })
    } catch (err) {
      throw err
    }
  },
=======
>>>>>>> 860eb8492d6f0aaaba5664bb560ac201509f560c

  addSeatNumberTrain: async (args, req) => {
    if (req.isAuth) {
      return
    }

    const seatNumber = new SeatNumberTrain({

      number: args.seatnumberTrainInput.number,
      train: args.seatnumberTrainInput.train,
      hallType: args.seatnumberTrainInput.hallType,
      hallDegree: args.seatnumberTrainInput.hallDegree,
      hallNumber: args.seatnumberTrainInput.hallNumber,
      trainCompartment: args.seatnumberTrainInput.trainCompartment,
      isDelete: false

    })
    let createdSeatnumber
    try {
      const result = await seatNumber
        .save()
      createdSeatnumber = trasformSeatNumberTrain(result)
      const train = await Train.findById(result._doc.train.toString())
      if (!train) {
        throw new Error('train not found')
      }
      train.seats.push(seatNumber)
      await train.save()
      return createdSeatnumber
    } catch (err) {
      throw err
    }
<<<<<<< HEAD
  },  
  reservedtraintSeat: async (args) => {
    const result=await SeatNumberTrain.updateMany({_id:args.id  },{isDelete:args.isDelete},{new:true}).then((res) => {
      if (res) {
        return console.log(true,res)
      }
    })
    return console.log(true,result)
  
  
  },
=======
  }
>>>>>>> 860eb8492d6f0aaaba5664bb560ac201509f560c
}
