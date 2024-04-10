const express = require("express");
const { getalluser, signup, login } = require("../controller/user");
const {addtask,taskupdate,getalltask,taskdelete} = require("../controller/todo-cont");
const route = express.Router();



route.get('/user', getalluser);
route.post('/user/signup', signup);
route.post('/user/login',login );
route.get('/task',getalltask);
route.post('/todo/addtask',addtask);
route.put('/todo/update:id',taskupdate);
route.delete('/todo/delete',taskdelete);


module.exports = route;

