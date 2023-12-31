import mongoose, { Schema } from "mongoose";

const CartOrderSchema = new Schema(
  {
    name: String,
    totalAmount: Number,  
    cartLength: Number, 
    titleWithPrice:String 
  },
  {
    timestamps: true,
  }
);

const CartOrderData = mongoose.models.customerorderdata || mongoose.model("customerorderdata", CartOrderSchema);

export default CartOrderData;
