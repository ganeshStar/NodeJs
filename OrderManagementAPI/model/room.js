const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Room = new Schema({
    roomName: {
        type: String
    }
});
module.exports = mongoose.model('Room', Room);