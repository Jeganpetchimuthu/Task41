const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const dbUrl = "mongodb://0.0.0.0:27017";

mongoose.connect(dbUrl, { useNewUrlParser: false });

const con = mongoose.connection;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

try {
  con.on("open", () => {
    console.log("MongDB connected !!!");
  });
} catch (error) {
  console.log("Error:" + error);
}

const port = 4001;

const studentRouter = require("./router/student");

app.use("/student", studentRouter);

const mentorRouter = require("./router/mentor");

app.use("/mentors", mentorRouter);

const addStudentRouter = require("./router/addStudents");

app.use("/addstudents", addStudentRouter);

app.listen(port, () => {
  console.log("The port is Running on " + port);
});
