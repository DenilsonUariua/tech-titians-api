const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    fullname: String,
    contactNumber: String,
    eventName: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("bookings", bookingSchema);
