let hotelModel = require('./model/hotel');
let roomModel = require('./model/room');
let customerModel = require('./model/customer');
let orderModel = require('./model/order');

//Create hotels in hotel table as hotel master table
module.exports.saveHotel = (req, res) => {
    if (req.body.hotelName == "" || req.body.hotelName == undefined) {
        res.status(400).json({ 'Error': 'The hotel name is required.Please provide hotel name.' });
        return;
    }
    let hotelItem = new hotelModel(req.body);
    hotelModel.find(req.body, function (error, values) {
        if (error) {
            res.json(error);
        } else {
            if (values != undefined && values.length > 0) {
                res.status(409).json({ 'Error': 'The hotel name already exists. Please try another name.' });
            } else {
                hotelItem.save()
                    .then(value => {
                        res.status(200).json({ 'Hotel': 'The hotel added successfully.' });
                    })
                    .catch(err => {
                        res.status(500).json({ 'Error': 'An error occurred while processing this request.' });
                    });
            }
        }
    });
};

//Create rooms in room table as room master table
module.exports.saveRoom = (req, res) => {
    if (req.body.roomName == "" || req.body.roomName == undefined) {
        res.status(400).json({ 'Error': 'The room name is required.Please provide room name.' });
        return;
    }
    let roomItem = new roomModel(req.body);
    roomModel.find(req.body, function (error, values) {
        if (error) {
            res.json(error);
        } else {
            if (values != undefined && values.length > 0) {
                res.status(409).json({ 'Error': 'The room name already exists. Please try another name.' });
            } else {
                roomItem.save()
                    .then(value => {
                        res.status(200).json({ 'Room': 'The room added successfully.' });
                    })
                    .catch(err => {
                        res.status(500).json({ 'Error': 'An error occurred while processing this request.' });
                    });
            }
        }
    });
};

//Create customer and order details
//paramerts 
//customer details as name,email,phone number
//Hotel details as hodelid which is refrence of hotel table in order table
//Room details as rommid which is refrence of room table in order table
module.exports.saveOrder = (req, res) => {
    if (
        req.body.phoneNumber == "" || req.body.phoneNumber == undefined
        || req.body.name == "" || req.body.name == undefined
        || req.body.checkInDate == "" || req.body.checkInDate == undefined
        || req.body.checkOutDate == "" || req.body.checkOutDate == undefined
        || req.body.hotelId == "" || req.body.hotelId == undefined
        || req.body.roomId == "" || req.body.roomId == undefined
        || req.body.noOfGuest==null || req.body.noOfGuest == "" || req.body.noOfGuest == undefined || req.body.noOfGuest == 0) {
        res.status(400).json({ 'Error': 'Please provide name,phone number,check-in date,check-out date,hotel,no.of guest and room.These parameters are required.' });
        return;
    }
    

    hotelModel.find({ "_id": req.body.hotelId }, function (error, values) {
        if (error) {
            res.status(400).json({ 'Error': 'Invalid hotel id.' });
        }
        else {
            if (values.length == 0) {
                res.status(404).json({ 'Error': 'The hotel not found.' });
            }
            else {
                roomModel.find({ "_id": req.body.roomId }, function (roomError, roomValues) {
                    if (roomError) {
                        res.status(400).json({ 'Error': 'Invalid room id.' });
                    }
                    else {
                        if (values.length == 0) {
                            res.status(404).json({ 'Error': 'The room not found.' });
                        }
                        else {
                            var customer = new customerModel({ name: req.body.name, email: req.body.email, phoneNumber: req.body.phoneNumber });
                            customer.save();
                            let orderItem = new orderModel({
                                checkInDate: req.body.checkInDate, checkOutDate: req.body.checkOutDate, customerId: customer._id,
                                hotelId: req.body.hotelId, roomId: req.body.roomId, totalAmount: req.body.totalAmount, noOfGuest: req.body.noOfGuest
                            });
                            orderItem.save()
                                .then(value => {
                                    res.status(200).json({ 'Order': 'An order created successfully.' });
                                })
                                .catch(err => {
                                    res.status(500).json({ 'Error': 'An error occurred while processing this request.' });
                            });
                        }
                    }
                });
            }
        }
    });
};
