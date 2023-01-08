const Bus = require('../../models/bus')
const User = require('../../models/user')

const { trasformBus } = require('./merg')
const { dateToString } = require('../../helpers/date')

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
  createBus: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('not login ')
    }

    const bus = new Bus({
      originName: args.busInput.originName,
      destinationName: args.busInput.destinationName,
      price: args.busInput.price,
      busCompany: args.busInput.busCompany,
      time: args.busInput.time,
      capacity: args.busInput.capacity,
      busNumber: args.busInput.busNumber,
      originTerminal: args.busInput.originTerminal,
      destinationTerminal: args.busInput.destinationTerminal,
      information: args.busInput.information,
      date: dateToString(args.busInput.date),
      creator: '62ebac44e2492fd084f4454c'
    })
    let createdBus
    try {
      const result = await bus
        .save()
      createdBus = trasformBus(result)
      const creator = await User.findById('62ebac44e2492fd084f4454c')
      if (!creator) {
        throw new Error('user not found')
      }
      creator.createBuses.push(bus)
      await creator.save()
      return createdBus
    } catch (err) {
      throw err
    }
  }

}
