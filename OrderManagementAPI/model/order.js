const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Order = new Schema({
    checkInDate: {
        type: Date
    },
    checkOutDate: {
        type: Date
    },
    customerId:{type:mongoose.Schema.Types.ObjectId, ref:'Customer'},
    hotelId:{type:mongoose.Schema.Types.ObjectId, ref:'Hotel'},
    roomId:{type:mongoose.Schema.Types.ObjectId, ref:'Room'},
    noOfGuest:{type:Number},
    totalAmount:{type:Number}
});
module.exports = mongoose.model('Order', Order);