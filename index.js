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

// modal schema
let List = require('./modal');

// routers
app.get('/list',async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        var result = await List.find().exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
})
app.get('/list/:id',async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        var order = await List.findById(req.params.id).exec();
        res.send(order);
    } catch (error) {
        res.status(500).send(error);
    }
})
app.delete('/list/:id',async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        var result = await List.deleteOne({ _id: req.params.id }).exec();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
})
app.patch('/list/:id',async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        var list = await List.findById(req.params.id).exec();
        list.set(req.body);
        var result = await List.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
})
app.post('/createList', async (req, res) => {
    console.log(req.body)
    res.header("Access-Control-Allow-Origin", "*");
    try {
        var list = new List(req.body);
        var result = await list.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.use(core());

// server port
server.listen( port, () => {
    console.log('server is running on port : ' + port)
})


