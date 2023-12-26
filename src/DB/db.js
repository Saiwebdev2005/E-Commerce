import mongoose from "mongoose";

let isConnected;

const connect = async() => {
  if (isConnected) {
    console.log('Using existing database connection');
    return Promise.resolve();
  }

  try{
    const db = await mongoose.connect(process.env.MONGODB_URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    });

    isConnected = db.connections[0].readyState;
    console.log("Mongo connection successful");
  }catch(error){
    console.error(error);
    throw new Error(`Error in connect DB: ${error.message}`);
  }
}

export default connect;
