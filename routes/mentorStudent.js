import express from "express";
import {
  getAllStudent,
  getAllMentor,
  createStudent,
  createMentor,
} from "../helper.js";

const router = express.Router();

//createMentor
//API Should be called like /mentorStudent/createMentor - router/name
router.post("/createMentor", async function (req, res) {
  const createMentor = req.body;
  const result = await createMentor(createMentor);

  res.send(result);
});

//createStudent
//API Should be called like /mentorStudent/createStudent
router.post("/createStudent", async function (req, res) {
  const createStudent = req.body;
  const result = await createStudent(createStudent);
  res.send(result);
});

//API Should be called like /mentorStudent/getAllStudent
router.get("/getAllStudent", async function (req, res) {
  console.log("get all student");
  const result = await getAllStudent();
  res.send(result);
});

router.get("/getAllMentor", async function (req, res) {
  console.log("get all Mentors");
  const result = await getAllMentor();
  res.send(result);
});

export const mentorStudentRouter = router;
