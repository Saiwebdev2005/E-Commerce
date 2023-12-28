import mongoose,{Schema} from "mongoose";

function getCollectionForUser(userName) {
  const schema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    totalAmount: Number,
    cartLength: Number,
    titleWithPrice: String,
    createdAt: Date,
    updatedAt: Date,
    __v: Number
  }, { collection: userName });

  return mongoose.models[userName] || mongoose.model(userName, schema);
}

export default getCollectionForUser;
