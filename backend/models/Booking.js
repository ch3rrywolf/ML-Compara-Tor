import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
        type: String,
        required: true,
      },
    lastName: {
      type: String,
      required: true,
    }, 
    userEmail: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    description: {
        type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);