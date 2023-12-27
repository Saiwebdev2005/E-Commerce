import connect from "@/DB/db";
import createCollectionForUser from "@/models/Collection";// import the function
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const {name, totalAmount, cartLength, titleWithPrice} = await req.json();
  await connect();

  // Use the function to get the model for this user
  const CartCollectionData = createCollectionForUser(name);

  // Now CartOrderData is a model for the collection named after the user
  await CartCollectionData.create({name, totalAmount, cartLength, titleWithPrice});

  return NextResponse.json({message:`Data created ${name}${totalAmount}${cartLength}${titleWithPrice}`},{status:201})
}
