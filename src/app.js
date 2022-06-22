const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/test?authSource=admin",{ useUnifiedTopology: false }).then((res) =>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("No connection",e);
})

app.get('/',(req,res)=>{
res.send('Welcome to our page!.........')
})
app.post('/students',(req,res)=>{
    res.send("hello krishna! how are you")
})

app.listen(port,()=>{
console.log(`Server is running at ${port}`)
})