
  const  gql = require('apollo-server-express'); 

const userTypeDef = gql`
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
  input UserInput{
    email:String!
    username:String!
    password:String!
    fullName : String!
    birthdate : String!
    nationalcode : String!
    }
    

  extend type Query {
    login(username:String!, password:String!):AuthData!

  }

  extend type Mutation {
    createUser(userInput:UserInput!) : User
}
`
module.exports = userTypeDef

