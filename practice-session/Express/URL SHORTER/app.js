const express = require("express");
const  mongoose = require('mongoose');
const urlRoute = require("./routes/url");
mongoose.set('strictQuery', true);

const app = express();
const PORT = 9001;


mongoose.connect('mongodb+srv://rajmani26022001:Gupta%4024221@rahul.mankzhe.mongodb.net/shortURL').then(() => {
    console.log("connected sucessfully");
}).catch((err) => {
    console.log(err);
})

app.use(express.json());

app.use("/url", urlRoute);


app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
