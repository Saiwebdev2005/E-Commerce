import mongoose, { Schema } from "mongoose";


const CustomerOrderSchema = new Schema(
  {
    name: String,
    totalAmount: Number,
    cart:Number,
    title_with_price : String
  },
  {
    timestamps: true,
  }
);

const CustomerOrderData = mongoose.models.customerorderdata || mongoose.model("customerorderdata", CustomerOrderSchema);

export default CustomerOrderData;
