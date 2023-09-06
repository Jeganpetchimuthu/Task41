const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  Roll_no: {
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

const student = mongoose.model("student", studentSchema);

module.express = student;
