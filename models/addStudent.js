const mongoose = require("mongoose");

const addStudentSchema = new mongoose.Schema({
  mentor_name: {
    type: String,
    required: true,
  },
  student_name: {
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

const addStudent = mongoose.model("addStudent", addStudentSchema);

module.express = addStudent;
