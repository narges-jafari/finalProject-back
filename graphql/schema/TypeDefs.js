const  gql =require('apollo-server-express'); 

const flightTypeDef =require ('./flightTypeDef')
const userTypeDef = require ('./userTypeDef')

const baseTypeDefs = gql`
  scalar Upload
  scalar BigInt
  """
  String "YYYY-MM-DD"
  """
  scalar Date

  type Query
  type Mutation
`

const TypeDefs = [
    flightTypeDef,
    baseTypeDefs,
    userTypeDef
]

module.exports = TypeDefs
