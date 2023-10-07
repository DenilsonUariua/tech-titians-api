const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    contactNumber: String,
    username: String,
    userType: { type: String, default: "" },
    deleted: { type: Boolean, default: false },
    active: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
