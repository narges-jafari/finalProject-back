const Hotel = require('../../models/hotel')
const User = require('../../models/user')
const HotelTicket = require('../../models/ticketHotel.jsx')
const Room = require('../../models/room')
const HotelBuying=require('../../models/hotelBuy')
const { trasformHotel,trasformBuyHotel,trasformTicketHotel,trasformTicketHotels } = require('./merg')

module.exports = {
  searchHotel: async ({ city, startDate, endDate }) => {
    const hotel = await Hotel.find({ city, startDate, endDate })
    return hotel
  },

  allHotelTicket: async () => {
    const results = await HotelTicket.find()
    return results.slice(-1).map(hotel => {
      return trasformTicketHotel(hotel)
    })
  },

  searchHotelTicketById: async (args) => {
    const result = await HotelTicket.findById(args.id).then((res) => {
      if (res) {
        return res
      }
    })
    if(result){

        
      return trasformTicketHotel(result)
    }else return(
null)
  },
  searchHotelTicket: async ({hotelBuy,date}) => {
    const result = await HotelTicket.findOne({hotelBuy,date}).then((res) => {
          if (res) {
            return res
          }else null
        })
        if(result){

        
        return trasformTicketHotel(result)
      }else return(
null)
  },
  searchHotelTicketByUserId: async ({userId}) => {

      const results = await HotelTicket.find({ userId })
if(results){
  return results.map(hotel => {
    return trasformTicketHotel(hotel)
  })
}else return(
  console.log('yes',no)
  )
        
      },
  searchHotelbyDate: async ({ startDate }) => {
    try {
      const hotels = await Hotel.find({ startDate })
      return hotels.map(hotel => {
        return trasformHotel(hotel)
      })
    } catch (err) {
      throw err
    }
  },
  searchHotelbyName: async ({ city }) => {
    try {
      const hotels = await Hotel.find({ city })
      return hotels.map(hotel => {
        return trasformHotel(hotel)
      })
    } catch (err) {
      throw err
    }
  },
  searchHotelById: async (args) => {
    // await connect();
    const result = await Hotel.findById(args.id).then((res) => {
      if (res) {
        return res
      }
    })
    return result
  },
  
  searchHotelBuyById: async (args) => {
    try {
      const result = await HotelBuying.findById(args.id)
        return trasformBuyHotel(result)
      
    } catch (err) {
      throw err
    }
  },


  createHotel: async (args, req) => {
    if (!req.isAuth) {
    }

    const hotel = new Hotel({
      city: args.hotelInput.city,
      star: args.hotelInput.star,
      name: args.hotelInput.name,
      capacity: args.hotelInput.capacity,
      address: args.hotelInput.address,
      startDate: args.hotelInput.startDate,
      endDate: args.hotelInput.endDate,
      price: args.hotelInput.price,
      creator: args.hotelInput.creator
    })
    let createdHotel
    try {
      const result = await hotel
        .save()
      createdHotel = trasformHotel(result)
      const creator = await User.findById(result._doc.creator.toString())
      if (!creator) {
        throw new Error('user not found')
      }
      creator.createHotels.push(hotel)
      await creator.save()
      return createdHotel
    } catch (err) {
      throw err
    }
  },
  hotelBuy :async (args,req) =>{
    if(!req.isAuth){

    }
  const fetchHotel = await Hotel.findById({_id:args.hotelId})
  const fetchRoom = await Room.findById({_id:args.roomId})
  const fetchUser = await User.findById({_id:args.userId})

  const buying =new HotelBuying({
    hotel:fetchHotel,
    user:fetchUser,
    room:fetchRoom,
   isDelete:false,
   fullName:args.hotelBuyInput.fullName,
   birthDate:args.hotelBuyInput.birthDate,
   gendere:args.hotelBuyInput.gendere,
   nationalCode:args.hotelBuyInput.nationalCode,

  })
  const result= await buying.save()
  return trasformBuyHotel(result)


},
makeHotelTicket :async (args,req) =>{
  if(!req.isAuth){

  }
const fetchData = await HotelBuying.findById({_id:args.hotelBuy})

const ticket =new HotelTicket({
  hotelBuy:fetchData,
 date:args.hotelTicketInput.date,
 serialId:args.hotelTicketInput.serialId,
 codeId:args.hotelTicketInput.codeId,
 searchId:args.hotelTicketInput.searchId

})
const result= await ticket.save()
return trasformTicketHotel(result)



},
updateHotelCapacity: async (args) => {
  const result=await Hotel.findOneAndUpdate({_id:args.id  },{capacity:args.capacity},{new:true}).then((res) => {
    if (res) {
      return res
    }
  })
  return result

},


}
