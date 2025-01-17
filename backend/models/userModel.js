const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add name"],
    }, 
    password: {
      type: String,
      required: [true, "Please add password"],
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Please add email"],
      lowercase: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    ad_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ad",
      },
    ],
    like_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    favorite_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Favorite",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
