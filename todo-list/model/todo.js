const mongodb =  require("mongoose");

const todotask  = new mongodb.Schema({

    title:{
        type:String,
        required:true
    },

    descreption:{
        type:String,
        required:true
    },
    done: {
        type: Boolean,
        default: false  //task is not yet completed
    },
    createdAt: {
        type: Date,
        default: Date.now //Automatically sets the current date and time when a new document is created
    }
})

const todoitem = mongodb.model("todoiten",todotask);

module.exports = todoitem;