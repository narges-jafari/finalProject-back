const Hotel = require('../../models/hotel')
const User = require('../../models/user')

const { trasformHotel } = require('./merg')
const { dateToString } = require('../../helpers/date')

module.exports = {
  hotels: async () => {
    try {
      const hotels = await Hotel.find()
      return hotels.map(hotel => {
        return trasformHotel(hotel)
      })
    } catch (err) {
      throw err
    }
  },
  createHotel: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('not login ')
    }

    const hotel = new Hotel({
        city:args.hotelInput.city,
            star: args.hotelInput.star,
            name:args.hotelInput.name,
            capacity:args.hotelInput.capacity,
            address:args.hotelInput.address,
            information:args.hotelInput.information,
        date: dateToString(args.hotelInput.date),
        creator: '62ebac44e2492fd084f4454c'
    })
    let createdHotel
    try {
      const result = await hotel
        .save()
      createdHotel = trasformHotel(result)
      const creator = await User.findById('62ebac44e2492fd084f4454c')
      if (!creator) {
        throw new Error('user not found')
      }
      creator.createHotels.push(hotel)
      await creator.save()
      return createdHotel
    } catch (err) {
      throw err
    }
  }

}
