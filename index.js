import express from 'express';
import {MongoClient } from "mongodb";
import dotenv from "dotenv";
import {mentorStudentRouter} from './routes/mentorStudent.js';

//to read data from env file we will use dotenv
dotenv.config();
const app = express();
const mongoClient = process.env.MONGO_URL;
const port = process.env.PORT || 3000;


async function createConnection() {
    const client = new MongoClient(mongoClient);
    await client.connect();
    console.log("Mongo is connect 👍✨✨");
    return client;
  }
  export const client = await createConnection();

 
  app.use(express.json());
  app.use("/mentorStudent", mentorStudentRouter);

//api to listen to port
app.listen(port,(err)=>{
    if(err){
        console.log(`Error in listening port ${err}`);
    }
    else{
    console.log(`server is running on port ${port}`);
    }
});