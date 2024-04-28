const mongodb =  require("mongoose");

const todotask  = new mongodb.Schema({

    title:{
        type:String,
        required:true
    },

    author:{
        type:String,
        required:true
    },
    published:{
        type:Number,
        required:true
    },
    user:{
        type:mongodb.Types.ObjectId,
        ref:"user",
        required:true
    }

})


module.exports = todoitem = mongodb.model("todoitem",todotask);

// todoitem is collection name;