const Room = require('../../models/room')
const Hotel = require('../../models/hotel')
const { trasformRoom } = require('./merg')
const ObjectId = require('mongodb');
const mongoose = require('mongoose')


module.exports = {
  searchRoomByHotelId: async ({ hotel }) => {
    try {
      const flights = await Room.find({ hotel })
      return flights.map(flight => {
        return trasformRoom(flight)
      })
    } catch (err) {
      throw err
    }
  },
  searchRoomById: async (args) => {
    // await connect();
    const result = await Room.findById(args.id).then((res) => {
      if (res) {
        return res
      }
    })
    return result
  },

  addRoomInfo: async (args, req) => {
    if (req.isAuth) {
      return
    }

    const roomInfo = new Room({

      name1: args.roomInput.name1,
      name2: args.roomInput.name2,
      floor: args.roomInput.floor,
      roomNumber1: args.roomInput.roomNumber1,
      roomNumber2: args.roomInput.roomNumber2,
      capacity: args.roomInput.capacity,
      information: args.roomInput.information,
      price: args.roomInput.price,
      hotel: args.roomInput.hotel,
      isDelete: false

    })
    let createdRoom
    try {
      const result = await roomInfo
        .save()
      createdRoom = trasformRoom(result)
      const hotel = await Hotel.findById(result._doc.hotel.toString())
      if (!hotel) {
        throw new Error('hotel not found')
      }
      hotel.rooms.push(roomInfo)
      await hotel.save()
      return createdRoom
    } catch (err) {
      throw err
    }
  },
//   updateRoomCapacity:async (argument) => {
//     const studentStuff = {
//         id: argument.id,
//         capacity: argument.capacity,
//     }
//     await Room.updateMany(studentStuff)
//     const studentObj = Room.findById(argument.id);

//     return studentObj
// }

// updateRoomCapacity:async(args) =>{
//   const id = await Room.findById({_id:args.id})
// return console.log(id,'llll')

// }
updateRoomCapacity: async (args) => {
  const result=await Room.findOneAndUpdate({_id:args.id  },{capacity:args.capacity},{new:true}).then((res) => {
    if (res) {
      return res
    }
  })
  return result
},

reservedRoom: async (args) => {
  const result=await Room.findOneAndUpdate({_id:args.id  },{isDelete:args.isDelete},{new:true}).then((res) => {
    if (res) {
      return res
    }
  })
  return result


},

   
}



