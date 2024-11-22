import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    username: {
        type: String,
        required: true,
      },
    carName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    nbrJrs: {
      type: Number,
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