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
  result
    ? res.send(result)
    : res.status(400).send({ error: "Mentor not created" });
});

//createStudent
//API Should be called like /mentorStudent/createStudent
router.post("/createStudent", async function (req, res, err) {
  const createStudent = req.body;
  const result = await createStudent(createStudent);
  result
    ? res.send(result)
    : res.status(400).send({ error: "Student Creation Failed" });
  res.send(result);
});

//API Should be called like /mentorStudent/getAllStudent
router.get("/getAllStudent", async function (req, res) {
  console.log("get all student");
  const result = await getAllStudent();
  result
    ? res.send(result)
    : res.status(400).send({ error: "Unable to fetch the results" });
  res.send(result);
});

router.get("/getAllMentor", async function (req, res) {
  console.log("get all Mentors");
  const result = await getAllMentor();
  result
    ? res.send(result)
    : res.status(400).send({ error: "Unable to fetch the results" });
});

export const mentorStudentRouter = router;
