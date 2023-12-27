import connect from "@/DB/db";
import CartOrderData from "@/models/Cart";
import { NextResponse } from "next/server";


export async function POST(req, res) {
  const {name, totalAmount, cartLength, titleWithPrice} = await req.json();
  await connect();
  await CartOrderData.create({name, totalAmount, cartLength, titleWithPrice});
  return NextResponse.json({message:`Data created ${name}${totalAmount}${cartLength}${titleWithPrice}`},{status:201})
}
