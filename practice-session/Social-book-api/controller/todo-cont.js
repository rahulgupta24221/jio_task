const todoitem = require('../model/todo');
const User = require('../model/user')
const Mongoose = require('mongoose')



async function getalltask (req, res){
    let alltask;

    try {
        alltask = await todoitem.find();
    } catch (err) {
        console.log(err)
    }

    if (!alltask)
        return res.status(404).json({ meassage: "all task not found" });

    return res.status(200).json({ alltask });
};

async function addtask (req, res) {
    const { title, author,published, user } = req.body;

    let existuser

    try {
        existuser = await User.findById(user);
    } catch (err) {
        console.log(err);
    }

    if (!existuser)
        return res.status(400).json({ meassage: "unable to find the id of user" });

    const newtask = new todoitem({
        title,
        author,
        published,
        user
    })

    try {
        // it is start session of mongodb
        const session = await Mongoose.startSession();
        // start transcation 
        session.startTransaction();
        // save the newtask
        await newtask.save(session);
        // save the newtask in the todo array
        existuser.todo.push(newtask);
        //save exitst user
        await existuser.save(session)
        // commit and end of transaction
        await session.commitTransaction();


    } catch (err) {
        console.log(err);
        return res.status(400).json({ meassage: "something err" });
    }

    return res.status(200).json({ newtask });
}

 async function updatetask (req, res)  {
    const { title, author,published } = req.body;
    const todoid = req.params.id;
    try {
        let up_todo = await todoitem.findByIdAndUpdate(todoid, { title, author,published });
        if (!up_todo) {
            return res.status(500).json({ meassage: "not updated" });
        }

        return res.json(200).json({ up_todo });

    } catch (err) {
        console.log(err);
    }

}

 async function del_task (req, res) {
    const id = req.params.id;

    try {
        //which tells Mongoose to populate the user field of the deleted post with the corresponding User document.
        let del_item = await todoitem.findByIdAndDelete(id).populate("user");
        // it is deleting a item in todo of user 
        await del_item.user.todo.pull(del_item);
        // save the data in user
        await del_item.user.save();



        if (!del_item)
            return res.status(404).json({ meassage: "not deleted" });

        return res.status(200).json({ del_item });


    } catch (err) {
        console.log(err);
    }
}


 async function getuserbyid(req, res) {
    const userid = req.params.id;

    try {
        let exituser = await User.findById(userid).populate("todo");
        if (!exituser)
            return res.status(404).json({ meassage: "not found user id" });

        return res.status(200).json({ exituser });
    } catch (err) {
        console.log(err);
    }
}


module.exports = {getalltask,addtask,updatetask,del_task,getuserbyid};