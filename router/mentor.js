const express = require("express");
const mentorAction = require("../controller/mentor");

const router = express.Router();

router.get("/", mentorAction.getMentors);
router.post("/", mentorAction.createMentors);
router.post("/:id", mentorAction.updateMentors);
router.post("/:id", mentorAction.deleteMentors);

module.exports = router;
