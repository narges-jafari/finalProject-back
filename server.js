const express = require('express')
const bodyParser = require('body-parser')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const {ApolloServer} = require("apollo-server-express");
const {
  // ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,

} = require("apollo-server-core");


const typeDefs = require('./graphql/schema/index')
const resolver = require('./graphql/resolvers/index')
const isAuth = require('./middleware/is-auth')

const app = express()


// app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Control-Type,Authorization')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  next()
})

app.use(isAuth)



const corsOptions = {
  credentials: true,
  origin: ["http://localhost:4000/graphql ", "http://localhost:3000"],
};


mongoose.connect(
  "mongodb://localhost:27017/",
  {
    dbName: "tripno",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)

// schema: graphQlSchema,
// rootValue: graphQlResolvers,
async function startServer() {
    const server = new ApolloServer({ schema:typeDefs, rootValue:resolver
    ,  plugins: [
        
        ApolloServerPluginLandingPageGraphQLPlayground(),
        // ApolloServerPluginDrainHttpServer()
      ],
      // context: async ({ req }) => {
      //   const user = await req.isAuth
      //   return {
      //     user
      //   }
      // },
     })
    await server.start()
    server.applyMiddleware({ app ,cors: corsOptions  })
    
}




app.listen({ port: "4000" }, () => {
    console.log("Server ready at http://localhost:4000/graphql")
  
});
startServer();

