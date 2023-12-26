import connect from "@/DB/db";
import CartOrderData from "@/models/Cart";
import { NextResponse } from "next/server";


export  async function POST(req, res) {
 const {name,totalAmount,cart,title_with_price}=await req.json();
 await connect();
 await CartOrderData.create({name,totalAmount,cart,title_with_price});
 return NextResponse.json({message:`Data created ${name}${totalAmount}${cart}${title_with_price}`},{status:201})
}