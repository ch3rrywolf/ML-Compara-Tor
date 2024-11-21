import mongoose from "mongoose";

const voitureSchema = new mongoose.Schema(
  {
    carName: {
      type: String,
      required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    category: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    transmistion: {
      type: String,
      required: true,
    },
    toit: {
      type: String,
      required: true,
    },
    carburant: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },

    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
    agence: {
        type: String,
        required: true,
    },
    local: {
        type: String,
        required: true,
    },
    agenceLogo: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Voiture", voitureSchema);
