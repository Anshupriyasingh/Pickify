import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
    // ✅ New: Size Field (Multiple Sizes Supported)
    size: {
      type: [String], // Array of sizes
      enum: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], // UK size chart
      default: ["10"], // Default size in UK sizing
    },
    
  // ✅ New: Brand Field
  brand: {
    type: String,
    required: true,
  },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);