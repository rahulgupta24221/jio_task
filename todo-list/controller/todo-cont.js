const task = require("../model/todo");




const getalltask = async(req,res)=>{
    let alltask;

    try{
        alltask = await task.find();
    }catch(err)
    {
        console.log(err)
    }

    if(!alltask)
      return res.status(404).json({meassage:"all task not found"});

      return res.status(200).json({alltask});
}
module.exports = getalltask;


const  addtask = async  (req,res)=>{
    const {title,descreption} = req.body;

    let exittitles;

    try{
        exittitles = await task.findOne({title});
    }catch(err)
    {
        console.log(err);
    }

    if(exittitles)
      return res.status(400).json({meassage:"task aleardy exits"});

    const newtask = new task({
        title,
        descreption,
        createdAt:Date.now()
    })

    try{
        await newtask.save();
        return res.status(200).json({newtask});
    }catch(err)
    {
       console.log(err);
    }

}
module.exports = addtask;


const taskupdate = async(req,res)=>{
    const {title,descreption} =req.body;
    const todoid = req.params.id;
    let up_todo;
    try{
        up_todo = await task.findByIdAndUpdate(todoid,{title,descreption});
    }catch(err)
    {
        console.log(err);
    }
    if(!up_todo)
    {
        return res.status(500).json({meassage:"not updated"});
    }

    return res.json(200).json({up_todo});
}
module.exports = taskupdate;


const taskdelete = async(req,res)=>{
    const {title,descreption} =req.body;
    const todoid = req.params.id;
    let del_todo;
    try{
        up_todo = await task.findByIdAndDelete(todoid,{title,descreption});
    }catch(err)
    {
        console.log(err);
    }
    if(!del_todo)
    {
        return res.status(500).json({meassage:"not updated"});
    }

    return res.json(200).json({del_todo});
}
module.exports = taskdelete;


