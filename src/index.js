const express = require('express');
const app = express();
const route = require('../src/routes/route')
app.use(express.json());
const mongoose = require('mongoose')

require('dotenv').config();

const {PORT , MONGODB_URL} = process.env;

mongoose.set('strictQuery' , true);

mongoose.connect(
    MONGODB_URL ,
    { useNewUrlParser : true }
)
.then(()=>{
    console.log("Server Connected with MongoDb")
})
.catch((error)=>{
    console.log("Error in connection", error.message)
})

app.use('/',route);

app.listen(PORT , ()=>{
    console.log(`Server running at ${PORT}`)
})
