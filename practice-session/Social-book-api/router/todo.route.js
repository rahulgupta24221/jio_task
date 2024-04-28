const express = require("express");
const todo_router = express.Router();
const { getalluser } = require("../controller/user-cont");
const { addtask, updatetask, del_task, getuserbyid } = require("../controller/todo-cont");



todo_router.get('/',getalluser);



todo_router.post('/addtask', addtask);


todo_router.put('/update/:id', updatetask);


todo_router.delete('/delete/:id', del_task);


todo_router.get('/user/:id',getuserbyid)


module.exports = todo_router;

