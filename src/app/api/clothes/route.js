// Importing NextResponse from next/server for handling responses
import { NextResponse } from "next/server";
// Importing the connect function from the DB module
import connect from "@/DB/db";
// Importing the Data model from the models directory
import Data from "@/models/Data";

// Exporting an async function to handle GET requests
export const GET = async (req) => {
  try{
    // Establishing a connection to the database
    await connect();
    // Fetching all documents from the 'clothesdatas' collection
    const clothesdatas = await Data.find();
    // Returning the fetched data as a JSON string with a status of 200
    return new NextResponse(JSON.stringify(clothesdatas),{status:200})
  }catch(error){
    // If there's an error in fetching the data, return an error message with a status of 500
    return new NextResponse("error in fetching data"+error,{status:500})
  }
}
