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




input searchFlightInput{
  originName:String!
  
}

type SeatNumber{
  _id: ID!
  number:Int
  state:Int
  trainCompartment:Int
  isDelete:Boolean!
  flight:Flight!

}

input SeatNumberInput{
  number:Int
  state:Int
  trainCompartment:Int
  flight:String


}





type Train{
  _id: ID!
  originName:String!
      destinationName: String!
      price:Float!
      railCompany:String!
      time: String!
      capacity:Int!
      trainNumber:Int!
      railwayOrigin: String!
      railwayDestination: String!
      information:String!
      date: String!
      creator:User!
}

type Bus{
  _id: ID!
  originName:String!
      destinationName: String!
      price:Float!
      busCompany:String!
      time: String!
      capacity:Int!
      busNumber:Int!
      originTerminal: String!
      destinationTerminal: String!
      information:String!
      date: String!
      creator:User!
}

type Hotel{
  _id: ID!
  city:String!
      star: String!
      date:String!
      name:String!
      capacity:Int!
      address: String!
      information:String!
      creator:User!
}

type User{
  _id:ID!
  email :String!
  password: String
  fullName : String!
  username:String!
  birthdate:String!
  nationalcode:String!

}

type AuthData{
  userId:ID!
  token:String!
  tokenExpiration:Int!
}


input TrainInput{
  originName:String!
      destinationName: String!
      price:Float!
      railCompany:String!
      time: String!
      capacity:Int!
      trainNumber:Int!
      railwayOrigin: String!
      railwayDestination: String!
      information:String!
      date: String!
}
input BusInput{
  originName:String!
      destinationName: String!
      price:Float!
      busCompany:String!
      time: String!
      capacity:Int!
      busNumber:Int!
      originTerminal: String!
      destinationTerminal: String!
      information:String!
      date: String!
}
input HotelInput{

  city:String!
      star: String!
      date:String!
      name:String!
      capacity:Int!
      address: String!
      information:String!
}

input UserInput{
email:String!
username:String!
password:String!
fullName : String!
birthdate : String!
nationalcode : String!
}


type RootQuery{
  flights:[Flight!]!
  trains:[Train!]!
  buses:[Bus!]!
  hotels:[Hotel!]!
  seatNumbers:[SeatNumber!]!
  login(username:String!, password:String!):AuthData!
  user(creator:String):User!
  searchFlight(originName:String!,destinationName:String!,flightClass:String!,date:String!):[Flight]
  searchFlightbyId(id:ID!):Flight!

}

type RootMutation{
  createFlight(flightInput:FlightInput!) : Flight
  createTrain(trainInput:TrainInput!) : Train
  createBus(busInput:BusInput!) : Bus
  createUser(userInput:UserInput!) : User
  createHotel(hotelInput:HotelInput): Hotel
  addSeatNumber(seatnumberInput:SeatNumberInput!): SeatNumber

}

  schema{
      query:RootQuery
      mutation:RootMutation
  }
  
  `)
