import express from 'express';



const app = express();
const port = 3000


const createMentor = [
    {
      "name": "Rahul",
      "tech": "React"
    },
    {
      "name": "Remya",
      "tech": "React"
    },
    {
      "name": "Vismaya",
      "tech": "Angular"
    },
    {
      "name": "Susmitha",
      "tech": "Angular"
    },
    {
      "name": "Venu",
      "tech": "Node"
    }
  ];

  const createStudent =
  [
    {
      "name": "Leksmi",
      "phone": 9961669888
    },
    {
      "name": "Arya",
      "phone": 9961669000
    },
    {
      "name": "Vandana",
      "phone": 9961669001
    },
    {
      "name": "Drishya",
      "phone": 9961669789
    }
  ]
//createMentor
app.post('/createMentor', (req, res) => {
    const createMentor = req.body;
    res.send(createMentor);
})

//createStudent
app.post('/createStudent', (req, res) => {
    const createStudent = req.body;
    res.send(createStudent);
})
//api to listen to port
app.listen(port,(err)=>{
    if(err){
        console.log(`Error in listening port ${err}`);
    }
    else{
    console.log(`server is running on port ${port}`);
    }
});