const mongoose = require("mongoose");
const express = require('express');
const app = express();

const DB = 'mongodb+srv://rushda:maidease@maideasecluster.uuxkdmg.mongodb.net/?retryWrites=true&w=majority';
mongoose.set("strictQuery", false);
mongoose.connect(DB,{
    useNewUrlParser: true
}).then(() =>{
    console.log('connecttion successful');
}).catch((err) => console.log('no connecttion'));