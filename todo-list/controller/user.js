const user = require("../model/signup");
const bcrypt = require("bcryptjs"); 




const getalluser = async(req,res)=>{
    let users;
    try{
        users = await user.find();
    }catch(err)
    {
        console.log(err);
    }
    if(!users)
      return res.status(404).json("not found");

    return res.status(200).json({users});
}

module.exports = getalluser;


const signup =  async(req,res)=>{
 const {name,email,password} = req.body;

 let exituser;

  try{

    exituser = await user.findone(email);
  }catch(err)
  {
    console.log(err);
  }

  if(exituser)
    return res.status(400).json("exits user");

   const hashpassword = bcrypt.hashSync(password);
   
    const User = new user({
        name,
        email,
        password:hashpassword
    }) 

    try{
        User.save();
      return res.status(200).json({User});
    }catch(err)
    {
        console.log(err);
    }

}

module.exports = signup;

const login = async(req,res)=>{
    const {email,password} = req.body;
    let userverify;

    try{
        userverify = await user.findone(email);
    }catch(err)
    {
        console.log(err);
    }
    if(!userverify)
      return res.status(404).json("not exit a user");

    const ispasscorrect = bcrypt.compareSync(password,userverify.password)

    if(!ispasscorrect)
      return res.status(400).json({meassage:"incoreect password"});

    return res.status(200).json({meassage:"login successfully"});

    
}

module.exports = login;