const express = require("express");

const mongoose = require("mongoose");

const Router = express.Router();

const students = require("../models/student");

const createStudent = async (req, res) => {
  console.log(req.body);

  const newStudent = new students({
    studentName: req.body.studentName,
    Roll: req.body.Roll,
    subject: req.body.subject,
    contact_no: req.body.contact_no,
    Address: req.body.Address,
  });

  try {
    await newStudent.save();

    res.Status(200).json(newStudent);
  } catch (error) {
    res.Status(400).json({ message: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const Student = await students.find();
    res.status(200).json(Student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateStudents = async (req, res) => {
  const _id = req.params._id;
  try {
    await students.findOneAndUpdate(
      {
        _id: req.params._id,
      },
      {
        studentName: req.body.studentName,
        Roll: req.body.Roll,
        subject: req.body.subject,
        contact_no: req.body.contact_no,
        Address: req.body.Address,
      }
    );
    res.status(201).json({ _id: _id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteStudents = async (req, res) => {
  const _id = req.params._id;
  try {
    await students.findOneAndRemove({
      _id: _id,
    });
    res.status(201).json({ _id: _id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.getStudent = getStudent;

module.exports.updateStudents = updateStudents;
module.exports.deleteStudents = deleteStudents;

module.exports.createStudent = createStudent;
