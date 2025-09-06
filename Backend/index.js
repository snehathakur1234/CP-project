const express = require('express');
const { Model } = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./Models/db');
const bodyParser = require('body-parser');
const AuthRouter = require('./Routes/AutheRouter');
const {saveForm} = require('../Backend/Controllers/Fetch');

const PORT =process.env.PORT || 5000;

app.get('/ping',(req,res)=>res.send("Pong"));


app.use(bodyParser.json());
app.use(cors());
app.use('/auth',AuthRouter);


app.listen(PORT,()=>{
    console.log('Server is running on',PORT)
});