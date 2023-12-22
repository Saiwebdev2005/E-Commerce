// Importing mongoose module
import mongoose from "mongoose";

// Function to establish a connection to MongoDB
const connect = async() => {
  try{
    // Attempt to connect to MongoDB using the connection string from environment variables
    // The options passed are to use the new URL string parser and the unified topology
    await mongoose.connect(process.env.MONGODB_URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
    // If the connection is successful, log a success message
    console.log("Mongo connection successful")
  }catch(error){
    // If there's an error in connecting to the database, throw an error
    throw new Error("Error in connect DB")
  }
}

// Export the connect function as a module
export default connect;
