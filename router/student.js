const express = require("express");
const studenAction = require("../controller/student");

const router = express.Router();

router.post("/", studenAction.createStudent);

module.exports = router;
