import connect from "@/DB/db";
import createCollectionForUser from "@/models/Collection"; // import the function
import { NextResponse } from "next/server";

export async function GET(req, res) {
  try {
    const userName = req.headers['x-user-name']; // get the username from the headers

    // Convert userName to lowercase
    const lowerCaseUserName = userName.toLowerCase();

    await connect();

    // Use the function to get the model for this user
    const CartCollectionData = createCollectionForUser(lowerCaseUserName);

    // Now CartCollectionData is a model for the collection named after the user
    const data = await CartCollectionData.find({}); // find all documents in the collection

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    console.log(`User name received is ${lowerCaseUserName}`)
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
