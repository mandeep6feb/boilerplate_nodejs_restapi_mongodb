const mongoose = require('mongoose');
const Scheme = mongoose.Schema;
let schema = new Scheme({
    fname: {type: String},
    lname: {type: String},
    email: {type: String},
    number: {type: String},
    address: {type: String},
});

module.exports = mongoose.model('List', schema);