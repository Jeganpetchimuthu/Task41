const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  mentorName: {
    type: String,
    required: true,
  },
  Roll: {
    type: String,
    required: true,
  },
  subject: {
    type: Array,
    required: true,
  },
  contact_no: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
});

const mentor = mongoose.model("mentor", mentorSchema);

module.express = mentor;
