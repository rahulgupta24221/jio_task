const express = require('express')
const app = express();

require('dotenv').config();
const passport = require('./auth');
const mongoose = require('mongoose');

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); // req.body
const PORT = process.env.PORT || 3000;




app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session: false})

app.get('/', function (req, res) {
    res.send('Welcome to our Hotel');
})

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);


mongoose.connect('mongodb+srv://rajmani26022001:Gupta%4024221@rahul.mankzhe.mongodb.net/hotel').then(()=>{
         console.log("connected sucessfully");
     }).catch((err)=>{
         console.log(err);
    })

  
app.listen(PORT, ()=>{
    console.log('listening on port 3000');
})