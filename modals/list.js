const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
let schema = new Scheme({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true},
    number: {type: String},
    address: {type: String},
    createData: { type: Date, default: Date.now},

});

module.exports = mongoose.model('List', schema);