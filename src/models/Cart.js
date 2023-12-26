import mongoose, { Schema } from "mongoose";

const CartOrderSchema = new Schema(
  {
    name: String,
    totalAmount: Number,  
    cartLength: Number, // Add cartLength to the schema
    titleWithPrice:String // Add titleWithPrice to the schema
  },
  {
    timestamps: true,
  }
);

const CartOrderData = mongoose.models.customerorderdata || mongoose.model("customerorderdata", CartOrderSchema);

export default CartOrderData;
