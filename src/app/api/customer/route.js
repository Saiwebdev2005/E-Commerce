import connect from "@/DB/db";
import CustomerOrderData from "@/models/CustomerOrderData";
import { NextResponse } from "next/server";


export  async function POST(req, res) {
 const {name,totalAmount,fuck,cart,title_with_price}=await req.json();
 await connect();
 await CustomerOrderData.create({name,totalAmount,fuck,cart,title_with_price});
 return NextResponse.json({message:`Data created ${name}${totalAmount}${cart}${title_with_price}`},{status:201})
}
