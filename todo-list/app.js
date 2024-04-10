const express =  require('express');

const mongoose = require("mongoose");
const { route } = require('./router/todo');

const app = express();

app.use(express.json());


app.use(route);


mongoose.connect("mongodb://localhost:27017/nitin").then(()=>{
    console.log("connected sucessfully");
}).catch(()=>{
    console.log("not connected");
})




app.listen(5000);