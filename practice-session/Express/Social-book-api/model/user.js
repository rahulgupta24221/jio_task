const mongodb =  require('mongoose');

const userschema  = new mongodb.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        unique:true,
        required:true
    },

    password:{
        type:String,
        required:true
    },
     book:[{
        type:mongodb.Types.ObjectId,// it is generating a new objectOID for new user;
        ref:"bookitem",
        required:true
    }]


})


module.exports = user =mongodb.model("user",userschema);;