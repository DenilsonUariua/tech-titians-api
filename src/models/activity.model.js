const mongoose = require("mongoose");
const { activityCategories } = require("../enums/activty-categories");

const activitySchema = new mongoose.Schema(
  {
    nameOfActivity: String,
    descriptionOfActivity: String,
    dateOfActivity: String,
    categoryOfActivity: { enum: activityCategories },
    locationOfActivity: String,
    timeOfActivity: String,
    personOfferingActivity: {
      name: String,
      email: String,
      institution: String,
      contactNumber: String,
      designation: String,
    },
    targetAudience: [String],
    numberOfParticipants: Number,
    hostInstitution: String,
    resourcesRequired: String,
    budget: String,
    fundingSource: String,
    venueOfActivity: String,
    eventImage: String,
  },

  { timestamps: true }
);

module.exports = mongoose.model("activities", activitySchema);
