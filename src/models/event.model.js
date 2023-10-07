const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    categories: String,
    name: String,
    eventDate: String,
    contactNumber: String,
    eventVenue: String,
    title: String,
    description: String,
    preRegistration: { type: Boolean, default: false },
    organisers: [{ name: String, contactNumber: String }],
    verified: { type: Boolean, default: false },
    location: String,
    eventSpeakers: [{ name: String, contactNumber: String }],
    participantsMaxNumber: Number,
    entertainment: [{ name: String, contactNumber: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("events", userSchema);
