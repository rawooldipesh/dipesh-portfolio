import mongoose from 'mongoose'

// We store the connection in a global variable
// This prevents creating a new connection on every API call
// Next.js runs API routes as serverless functions - without this
// you'd open hundreds of DB connections and crash your free tier

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in .env.local')
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
  // If we already have a connection, return it
  if (cached.conn) {
    return cached.conn
  }

  // If no connection exists, create one
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose
    })
  }

  cached.conn = await cached.promise
  return cached.conn
}

export default connectDB