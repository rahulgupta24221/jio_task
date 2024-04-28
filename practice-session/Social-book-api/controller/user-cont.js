
const user = require('../model/user');

async function getalluser(req,res){
    let users;
    try{
        users = await user.find();
    }catch(err)
    {
        console.log(err);
    }
    if(!users)
      return res.status(404).json("not found");

    return res.status(200).json({users})
}


async function signup_user(req,res){
    const { name, email, password,todo } = req.body;

  let exituser;

  try {

    exituser = await user.findone({ email });
  } catch (err) {
    console.log(err);
  }

  if (exituser)
    return res.status(400).json("exits user");


  const User = new user({
    name,
    email,
    password,
    todo:[]
  })

  try {
    User.save();
    return res.status(200).json({ User });
  } catch (err) {
    console.log(err);
  }

}


 async function login (req, res) {
  const { email, password } = req.body;
  try {

    const userverify = await user.findOne({ email });
    if (!userverify)
      return res.status(404).json("not exit a user");


    let ispasscorrect = true;
    if (password === userverify.password)
      ispasscorrect = true;
    else
      ispasscorrect = false;
  
    if (ispasscorrect) {
      //return res.status(400).json({meassage:"incoreect password"});
      return res.status(200).json({ meassage: "login successfully" });
    }

    return res.status(400).json({ meassage: "incoreect password" });

  } catch (err) {
    console.log(err);
  }


}


module.exports = {getalluser,signup_user,login};
