const express = require('express');
const router = require('./router/user-route');

const mongoose = require('mongoose');
const todo_router = require('./router/book.route');
const passport = require('./auth/auth');


const app = express();

app.use(passport.initialize());
const localauthmiddle = passport.authenticate('local',{session:false});


app.use(express.json());


app.use('/api/user',router);
app.use('/api/book',todo_router)



mongoose.connect('mongodb+srv://rajmani26022001:Gupta%4024221@rahul.mankzhe.mongodb.net/todo').then(()=>{
         console.log("connected sucessfully");
     }).catch((err)=>{
         console.log(err);
    })




app.listen(4000);