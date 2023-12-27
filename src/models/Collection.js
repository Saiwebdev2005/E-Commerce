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

  function createCollectionForUser(userName) {
  return mongoose.models[userName] || mongoose.model(userName, CartOrderSchema);
}
export default createCollectionForUser;