const express = require("express");
const addStudentsAction = require("../controller/addstudents");

const router = express.Router();

router.get("/", addStudentsAction.getAddStudent);
router.post("/", addStudentsAction.createAddStudent);
router.post("/:id", addStudentsAction.updateStudents);
router.post("/:id", addStudentsAction.deleteaddStudents);

module.exports = router;
