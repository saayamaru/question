const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require('cors');
const corsOptions ={
    origin: process.env.core_origin, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

//config
app.use(cors(corsOptions));
dotenv.config();
app.use(express.json());

//mongodb connect
const database = process.env.MONGOLAB_URI;
mongoose.connect(database, {
        dbName: 'PreTest',
        useUnifiedTopology: true
    })
    .then(() => { 
        console.log('connect!')
    })
    .catch(err => console.log(err));




//BodyParsing
app.use(express.urlencoded({
    extended: false
}));

//router
app.set('view engine', 'ejs');
app.use('/user', require('./routes/user.routes'));
app.use('/question', require('./routes/question.routes'));

//port
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("Server don start for port: " + PORT))