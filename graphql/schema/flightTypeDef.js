const  gql = require('apollo-server-express'); 

const flightTypeDef = gql`
type Flight{
    _id: ID!
    originName:String! ,
    destinationName: String!
  price: Float!
  seatNumbers:[Int!]
  creator:User!
  }
  input FlightInput{
    originName:String! 
    destinationName: String!
  price: Float!
  seatNumbers:[Int!]
  
  }

  input seatNumbersInput{
    number:[Int!]
  }
  extend type Query {
    flights:[Flight!]!
  }

  extend type Mutation {
    createFlight(flightInput:FlightInput!) : Flight
  }
`
module.exports =  flightTypeDef

