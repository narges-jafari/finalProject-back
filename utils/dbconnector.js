import mongoose from 'mongoose'
export default async function dbConnector (databaseName) {
    await mongoose.connect(`mongodb://localhost:27017/${databaseName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
  