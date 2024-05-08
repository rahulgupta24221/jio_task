const mongodb =  require("mongoose");

const bookschema  = new mongodb.Schema({

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


module.exports = bookitem = mongodb.model("todoitem",bookschema);

// todoitem is collection name;