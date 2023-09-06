const epress = require("express");

const mongoose = require("mongoose");

const router = require("express").Router();

const addstudents = require("../models/addStudent");

const createAddStudent = async (req, res) => {
  console.log(req.body);

  const newAddStudent = new addstudents({
    mentor_name: req.body.mentor_name,
    student_name: req.body.student_name,
    Roll: req.body.Roll,
    subject: req.body.subject,
    contact_no: req.body.contact_no,
    Address: req.body.Address,
  });

  try {
    await newAddStudent.save();

    res.Status(200).json(newAddStudent);
  } catch (error) {
    res.Status(400).json({ message: error.message });
  }
};

const getAddStudent = async (req, res) => {
  try {
    const addStudent = await addstudents.find();
    res.status(200).json(addStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateStudents = async (req, res) => {
  const _id = req.params._id;
  try {
    await addstudents.findOneAndUpdate(
      {
        _id: req.params._id,
      },
      {
        mentor_name: req.body.mentor_name,
        student_name: req.body.student_name,
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

const deleteaddStudents = async (req, res) => {
  const _id = req.params._id;
  try {
    await addstudents.findOneAndRemove({
      _id: _id,
    });
    res.status(201).json({ _id: _id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.getAddStudent = getAddStudent;
module.exports.createAddStudent = createAddStudent;
module.exports.updateStudents = updateStudents;
module.exports.deleteaddStudents = deleteaddStudents;
