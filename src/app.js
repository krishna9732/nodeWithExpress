const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
require('./db/conn');
const Student = require("./models/students")

app.use(express.json());



app.get('/',(req,res)=>{
res.send('Welcome to our page!.........')
})

app.get('/students',async (req,res)=>{
   let studentData = await Student.find({});
    res.json(studentData);
})
app.post('/students',(req,res)=>{
    const user = new Student(req.body);
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
})

app.listen(port,()=>{
console.log(`Server is running at ${port}`)
})