const epress = require("express");

const mongoose = require("mongoose");

const router = require("express").Router();

const mentors = require("../models/mentor");

const createMentor = async (req, res) => {
  console.log(req.body);

  const newMentors = new mentors({
    mentorName: req.body.mentorName,
    Roll: req.body.Roll,
    subject: req.body.subject,
    contact_no: req.body.contact_no,
    Address: req.body.Address,
  });

  try {
    await newMentors.save();

    res.Status(200).json(newMentors);
  } catch (error) {
    res.Status(400).json({ message: error.message });
  }
};

const getMentors = async (req, res) => {
  try {
    const mentor = await mentors.find();
    res.status(200).json(mentor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateMentors = async (req, res) => {
  const _id = req.params._id;
  try {
    await mentors.findOneAndUpdate(
      {
        _id: req.params._id,
      },
      {
        mentorName: req.body.mentorName,
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

const deleteMentors = async (req, res) => {
  const _id = req.params._id;
  try {
    await mentors.findOneAndRemove({
      _id: _id,
    });
    res.status(201).json({ _id: _id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.getMentors = getMentors;
module.exports.updateMentors = updateMentors;
module.exports.deleteMentors = deleteMentors;
module.exports.createMentors = createMentor;
