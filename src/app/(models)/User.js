import mongoose,{Schema} from "mongoose"; // Make sure to import mongoose correctlyonst URI = 

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise;
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
},
{
  timestamps:true,
})
const User = mongoose.models.User || mongoose.model("User",userSchema);
export default User;
