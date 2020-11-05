const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Hotel = new Schema({
    hotelName: {
        type: String
    }
});

module.exports = mongoose.model('Hotel', Hotel);