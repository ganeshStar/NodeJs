const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = new Schema({
    name: {
        type: String
    },
    email : {
        type: String
    },
    phoneNumber : {
        type: String
    }
});

module.exports = mongoose.model('Customer', Customer);