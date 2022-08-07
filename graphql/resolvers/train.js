const Train = require('../../models/train')
const User = require('../../models/user')

const { trasformTrain } = require('./merg')
const { dateToString } = require('../../helpers/date')

module.exports = {
  trains: async () => {
    try {
      const trains = await Train.find()
      return trains.map(train => {
        return trasformtrain(train)
      })
    } catch (err) {
      throw err
    }
  },
  createTrain: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('not login ')
    }

    const train = new Train({
        originName: args.trainInput.originName,
        destinationName: args.trainInput.destinationName,
        price: args.trainInput.price,
        railCompany: args.trainInput.railCompany,
        time: args.trainInput.time,
        capacity: args.trainInput.capacity,
        trainNumber: args.trainInput.trainNumber,
        railwayOrigin: args.trainInput.railwayOrigin,
        railwayDestination: args.trainInput.railwayDestination,
        information: args.trainInput.information,
        date: dateToString(args.trainInput.date),
        creator: '62ebac44e2492fd084f4454c'
    })
    let createdTrain
    try {
      const result = await train
        .save()
      createdTrain = trasformTrain(result)
      const creator = await User.findById('62ebac44e2492fd084f4454c')
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
