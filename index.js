const express = require('express');
const app = express();
const port = 4000;
let http = require('http');
let core = require('cors');
let server = http.Server(app);

app.use(express.json());

// mongodb connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/apis', (err) => {
    if(!err) console.log('MongoDB Connection Succeeded');
    else console.log('Error In MongoDB Connection : ', JSON.stringify(err, undefined, 2));
});

// router
const router = require('./routers/list_router');

// res.header("Access-Control-Allow-Origin", "*");

var allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(core());
app.use('/',[allowCrossDomain], router)


// server port
server.listen( port, () => {
    console.log('server is running on port : ' + port)
})


