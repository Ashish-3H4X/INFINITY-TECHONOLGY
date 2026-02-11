import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    regNo: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
