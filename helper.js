import {client} from "./index.js";

async function createStudent(student) {
    const result = await client.db("assignMentor").collection("student").insertOne(student);
    return result;
}

async function createMentor(mentor) {
    const result = await client.db("assignMentor").collection("mentor").insertOne(mentor);
    return result;
}



async function getAllStudent() {
    return await client
      .db("assignMentor")
      .collection("student")
      .find({})
      .toArray();
  }

  async function getAllMentor() {
    return await client
      .db("assignMentor")
      .collection("mentor")
      .find({})
      .toArray();
  }
export {createStudent, createMentor,getAllStudent,getAllMentor}