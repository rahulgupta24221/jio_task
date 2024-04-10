const mongodb =  require("mongoose");

const signupschema  = new mongodb.Schema({

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
        type:Number,
        required:true
    }

})

const signup = mongodb.model("signup",signupschema);

module.exports = signup;