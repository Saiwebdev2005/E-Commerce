// Importing mongoose module
import mongoose from "mongoose";
// Destructuring Schema from mongoose
const { Schema } = mongoose;

// Creating a new schema for the data
const dataSchema = new Schema({
  id: {
    type: Number, // The type of the id is number
    required: true // This field is required
  },
  image: {
    type: String, // The type of the image is string
    required: true // This field is required
  },
  title: {
    type: String, // The type of the title is string
    required: true // This field is required
  },
  description: {
    type: String, // The type of the description is string
    required: true // This field is required
  },
  gender: {
    type: String, // The type of the gender is string
    required: true // This field is required
  },
  price: {
    type: String, // The type of the price is string
    required: true // This field is required
  }
}, { timestamps: true }); // This option adds createdAt and updatedAt fields to the schema

// Exporting the model. If the model 'clothesdatas' already exists, it uses that. Otherwise, it creates a new model.
export default mongoose.models.clothesdatas || mongoose.model('clothesdatas', dataSchema);
