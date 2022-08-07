const { buildSchema } = require('graphql')

module.exports = buildSchema(`



type Flight{
  _id: ID!
  originName:String! ,
  destinationName: String!
price: Float!
flightClass:String!
time:String!
capacity:Int!
flightNumber:Int!
airportOrigin:String!
airportDestination:String!
information:String!
date:String!
creator:User!
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
  firstName : String!
  lastName : String!
  phoneNumber : String!
  username:String!

}

type AuthData{
  userId:ID!
  token:String!
  tokenExpiration:Int!
}

input FlightInput{
  originName:String! 
  destinationName: String!
price: Float!
flightClass:String!
time:String!
capacity:Int!
flightNumber:Int!
airportOrigin:String!
airportDestination:String!
information:String!
date:String!

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
firstName : String!
lastName : String!
phoneNumber : String!
}

type RootQuery{
  flights:[Flight!]!
  trains:[Train!]!
  buses:[Bus!]!
  hotels:[Hotel!]!
  login(email:String!, password:String!):AuthData!

}

type RootMutation{
  createFlight(flightInput:FlightInput!) : Flight
  createTrain(trainInput:TrainInput!) : Train
  createBus(busInput:BusInput!) : Bus
  createUser(userInput:UserInput!) : User
  createHotel(hotelInput:HotelInput): Hotel



}

  schema{
      query:RootQuery
      mutation:RootMutation
  }
  
  `)