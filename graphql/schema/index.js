const { buildSchema } = require('graphql')

module.exports = buildSchema(`



type Flight{
  _id: ID!
  originName:String! ,
  destinationName: String!
price: Float!
date:String!
flightClass:String!
departureTime:String!
arrivalTime:String!
flightNumber:Int!
airportOrigin:String!
airportDestination:String!
information:[String!]
airplaneModel:String!
allowedLoggage:Int!
capacity:Int!
airplaneCompany:String!
creator:User!
}

input FlightInput{
  originName:String! ,
  destinationName: String!
price: Float!
date:String!
flightClass:String!
departureTime:String!
arrivalTime:String!
flightNumber:Int!
airportOrigin:String!
airportDestination:String!
information:[String!]
airplaneModel:String!
allowedLoggage:Int!
capacity:Int!
airplaneCompany:String!
creator:String!

}

type SeatNumber{
  _id: ID!
  number:Int!
  isDelete:Boolean!
  flight:Flight!

}

input SeatNumberInput{
  number:Int!
  flight:String!


}

type BusSeatNumber{
  _id: ID!
  number:Int!
  isDelete:Boolean!
  bus:Bus!
}

input BusSeatNumberInput{
  number:Int!
  bus:String!
}






type Train{
  _id: ID!
  originName:String!
      destinationName: String!
      departureTime:String!
      arrivalTime:String!
      date: String!
      railCompany:String!
      capacity:Int!
      trainNumber:Int!
      price:Float!
      railwayOrigin: String!
      railwayDestination: String! 
      hallType:String!          
      information:[String!]
      allowedLoggage:Int!  
      creator:User!
}

input TrainInput{
  originName:String!
  destinationName: String!
  departureTime:String!
  arrivalTime:String!
  date: String!
  railCompany:String!
  capacity:Int!
  trainNumber:Int!
  price:Float!
  railwayOrigin: String!
  railwayDestination: String!   
  allowedLoggage:Int!  
  hallType:String!      
  information:[String!]
  creator:String!
}

type SeatNumberTrain{
  _id: ID!
  number:Int!
  isDelete:Boolean!
  trainCompartment:Int!
  hallDegree:String!
  hallNumber:String!
  train:Train!

}

input SeatNumberTrainInput{
  number:Int!
  train:String!
  trainCompartment:Int!
  hallDegree:String!
  hallNumber:String!


}

type Bus{
  _id: ID!
  originName:String!
      destinationName: String!
      price:Float!
      busCompany:String!
      departureTime: String!
      arrivalTime: String!
      capacity:Int!
      busNumber:Int!
      originTerminal: String!
      destinationTerminal: String!
      information:[String!]
      date: String!
      creator:User!
}

type Hotel{
  _id: ID!
  city:String!
      star: Int!
      startDate:String!
      endDate:String!
      name:String!
      capacity:Int!
      address: String!
      creator:User!
      price:Float!
}

input HotelInput{

      city:String!
      star: Int!
      startDate:String!
      endDate:String!
      name:String!
      capacity:Int!
      address: String!
      creator:String!
      price:Float!
}

type Room{
  _id:ID!
  floor:Int!
  name1:String!
  name2:String
  roomNumber1:Int!
  roomNumber2:Int
  capacity:Int!
  information:[String!]
  price:Float!
  isDelete:Boolean!
  hotel:Hotel!

}

input RoomInput{
  floor:Int!
  isDelete:Boolean
  name1:String!
  name2:String
  roomNumber1:Int!
  roomNumber2:Int
  capacity:Int!
  information:[String!]
  price:Float!
  hotel:String!
}


type User{
  _id:ID!
  email :String!
  password: String
  username:String!
  role:String!
 

}

type AuthData{
  userId:ID!
  token:String!
  tokenExpiration:Int!

}



input BusInput{
  originName:String!
      destinationName: String!
      price:Float!
      busCompany:String!
      departureTime: String!
      arrivalTime: String!      
      capacity:Int!
      busNumber:Int!
      originTerminal: String!
      destinationTerminal: String!
      information:[String!]
      date: String!
      creator:String!
}

input UserInput{
email:String!
username:String!
password:String!
role:String!
}

type HotelBuying{
  _id:ID!
  hotel: Hotel!
  room:Room!
  user:User!
  isDelete:Boolean
  fullName:[String!]
  birthDate:[String!]
  gendere:[String!]
  nationalCode:[String!]
}

input HotelBuyInput{
  
  fullName:[String!]
  birthDate:[String!]
  gendere:[String!]
  nationalCode:[String!]
}

type AirplaneBuying{
  _id:ID!
  flight: Flight!
  user:User!
  price:Float!
  isDelete:Boolean
  fullName:[String!]
  birthDate:[String!]
  gendere:[String!]
  nationalCode:[String!]
}

type BusBuying{
  _id:ID!
  bus: Bus!
  user:User!
  price:Float!
  isDelete:Boolean
  fullName:[String!]
  birthDate:[String!]
  gendere:[String!]
  nationalCode:[String!]
}


type TrainBuying{
  _id:ID!
  train: Train!
  user:User!
  price:Float!
  isDelete:Boolean
  fullName:[String!]
  birthDate:[String!]
  gendere:[String!]
  nationalCode:[String!]
}

input TrainBuyingInput{
  
  fullName:[String!]
  birthDate:[String!]
  gendere:[String!]
  nationalCode:[String!]
  price:Float!
}








type TrainTicket{
  _id:ID!
  trainBuy: TrainBuying!
  seatnumber:[Int!]
  hallNumber:[String!]
  trainCompartment:[Int!]
  hallDegree:[String!]
  date:String!
  serialId:Int!
  codeId:Int!
  searchId:String!

}

input AirplaneBuyInput{
  
  fullName:[String!]
  birthDate:[String!]
  gendere:[String!]
  nationalCode:[String!]
  price:Float!
}


input BusBuyInput{
  
  fullName:[String!]
  birthDate:[String!]
  gendere:[String!]
  nationalCode:[String!]
  price:Float!
}

type HotelTicket{
  _id:ID!
  hotelBuy: HotelBuying!
  date:String!
  serialId:Int!
  codeId:Int!
  searchId:String!

}

input HotelTicketInput{
  date:String!
  serialId:Int!
  codeId:Int!
  searchId:String!


}

type FlightTicket{
  _id:ID!
  flightBuy: AirplaneBuying!
  seatnumber:[Int!]
  date:String!
  serialId:Int!
  codeId:Int!
  searchId:String!

}

input FlightTicketInput{
  date:String!
  serialId:Int!
  codeId:Int!
  searchId:String!
  seatnumber:[Int!]



}


type BusTicket{
  _id:ID!
  busBuy: BusBuying!
  seatnumber:[Int!]
  date:String!
  serialId:Int!
  codeId:Int!
  searchId:String!

}

input BusTicketInput{
  date:String!
  serialId:Int!
  codeId:Int!
  searchId:String!
  seatnumber:[Int!]



}

 



input TrainTicketInput{
  date:String!
  serialId:Int!
  codeId:Int!
  searchId:String!
  seatnumber:[Int!]
  hallNumber:[String!]
  trainCompartment:[Int!]
  hallDegree:[String!]
}






 



type RootQuery{
  flights:[Flight!]!
  trains:[Train!]!
  buses:[Bus!]!
  hotels:[Hotel!]!
  seatNumbers:[SeatNumber!]!
  trainSeatnumbers:[SeatNumberTrain!]!
  login(username:String!, password:String!):AuthData!
  user(creator:String):User!
  searchFlight(originName:String!,destinationName:String!,flightClass:String!,date:String!):[Flight]
  searchFlightbyId(id:ID!):Flight!
  searchBusbyId(id:ID!):Bus!

  searchFlightbyDate(date:String!):[Flight]!
  searchFlightbyName(originName:String!):[Flight]!
  searchBusbyName(originName:String!):[Bus]!


  searchBus(originName:String!,destinationName:String!,date:String!):[Bus]


  searchTrain(originName:String!,destinationName:String!,hallType:String!,date:String!):[Train]
  searchTrainbyId(id:ID!):Train!
  searchTrainbyDate(date:String!):[Train]!
  searchTrainbyName(originName:String!):[Train]!
  searchHotel(city:String!,startDate:String!,endDate:String!):[Hotel]
  searchHotelById(id:ID!):Hotel!
  searchHotelbyDate(startDate:String!):[Hotel]!
  searchHotelbyName(city:String!):[Hotel]!
  searchRoomByHotelId(hotel:String!):[Room!]
  searchRoomById(id:ID!):Room!
  searchHotelBuyById(id:ID!):HotelBuying!
  searchHotelTicket(hotelBuy:ID!,date:String!):HotelTicket
  searchHotelTicketById(id:ID!):HotelTicket
  searchHotelTicketByUserId(userId:String!):[HotelTicket!]!
  searchUserById(id:ID!):User
  allHotelTicket:[HotelTicket!]!
  getFlightSeatnumber(flight:String!,isDelete:Boolean!):[SeatNumber!]!



  
  getBusSeatnumber(bus:String!,isDelete:Boolean!):[BusSeatNumber!]!

  getTrainSeatnumber(train:String!,isDelete:Boolean!):[SeatNumberTrain!]!
  getAllFlightBuy:[AirplaneBuying!]
  getAllTrainBuy:[TrainBuying!]

  searchFlightTicketById(id:ID!):FlightTicket
  searchBusTicketById(id:ID!):BusTicket

  searchTrainTicketById(id:ID!):TrainTicket
  getAllFlightTicket:[FlightTicket!]!
  getAllBusTicket:[BusTicket!]!
  getAllTrainTicket:[TrainTicket!]!

  allFlightTicket:[FlightTicket!]!
  searchFlightTicketByUserId(userId:String!):[FlightTicket!]!
  searchTrainTicketByUserId(userId:String!):[TrainTicket!]!
  searchBusTicketByUserId(userId:String!):[BusTicket!]!


}

type RootMutation{
  createFlight(flightInput:FlightInput!) : Flight
  createTrain(trainInput:TrainInput!) : Train
  createBus(busInput:BusInput!) : Bus
  createUser(userInput:UserInput!) : User
  createHotel(hotelInput:HotelInput!): Hotel
  addSeatNumber(seatnumberInput:SeatNumberInput!): SeatNumber
  addSeatNumberBus(seatnumberInputBus:BusSeatNumberInput!): BusSeatNumber

  addSeatNumberTrain(seatnumberTrainInput:SeatNumberTrainInput!): SeatNumberTrain
  addRoomInfo(roomInput:RoomInput!):Room
  hotelBuy(hotelId: ID!,roomId: ID!,userId: ID!,hotelBuyInput:HotelBuyInput):HotelBuying!
  airplaneBuy(flightId: ID!,userId: ID!,airplaneBuyInput:AirplaneBuyInput):AirplaneBuying!
  airplaneBuys(flightId: [ID!],userId: ID!,airplaneBuyInput:AirplaneBuyInput):AirplaneBuying!
  busBuy(busId: ID!,userId: ID!,busBuyInput:BusBuyInput):BusBuying!

  makeHotelTicket(hotelBuy: ID!,hotelTicketInput:HotelTicketInput):HotelTicket!
  reservedRoom(id: ID! ,isDelete: Boolean!): Room
  updateRoomCapacity(id: ID! ,capacity: Int!): Room
  updateHotelCapacity(id: ID! ,capacity: Int!): Hotel
  makeFlightTicket(flightBuy: ID!,flightTicketInput:FlightTicketInput):FlightTicket!
  makeBusTicket(busBuy: ID!,busTicketInput:BusTicketInput):BusTicket!

  reservedFlightSeat(id: [String!] ,isDelete: Boolean!):SeatNumber
  reservedBusSeat(id: [String!] ,isDelete: Boolean!):BusSeatNumber

  reservedtraintSeat(id: [String!] ,isDelete: Boolean!):SeatNumberTrain
  updateFlightCapacity(id: ID! ,capacity: Int!): Flight
  updateBusCapacity(id: ID! ,capacity: Int!): Bus

  updateTrainCapacity(id: ID! ,capacity: Int!): Train
  trainBuy(trainId: ID!,userId: ID!,trainBuyingInput:TrainBuyingInput):TrainBuying!
  makeTrainTicket(trainBuy: ID!,trainTicketInput:TrainTicketInput):TrainTicket!



}

  schema{
      query:RootQuery
      mutation:RootMutation
  }
  
  `)
