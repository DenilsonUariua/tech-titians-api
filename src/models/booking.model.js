const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    fullname: String,
    activityName: String,
    submitter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    activityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "activities",
    },
    contactNumber: String,
    dateOfActivity: String,
    locationOfActivity: String,
    timeOfActivity: String,
    venueOfActivity: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("bookings", bookingSchema);
