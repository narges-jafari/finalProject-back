const Train = require('../../models/train')
const User = require('../../models/user')

const { trasformTrain } = require('./merg')
const { dateToString } = require('../../helpers/date')

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
  }

}
