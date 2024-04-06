import connect from "@/DB/db";
import getCollectionForUser from "@/models/Collection"; // import the function
import { NextResponse } from "next/server";

export default async function GET(req, res) {
  try {
    const collectionName = req.headers['x-user-name']; // this should now be 'mu-sicks'

    await connect();

    // Create a model for the user's collection
    const Collection = getCollectionForUser(collectionName);

    // Fetch all documents from the user's collection
    const data = await Collection.find({});
    if (!data.length) {
      console.log('No documents found in collection');

    }
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    console.log(`Collection name received is ${collectionName}`)
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}
