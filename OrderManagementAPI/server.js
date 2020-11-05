const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const orderApiRoutes = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const PORT = 4000;

orderApiRoutes.use('/api-docs', swaggerUi.serve);
orderApiRoutes.get('/api-docs', swaggerUi.setup(swaggerDocument));

app.use(cors());
app.use(bodyParser.json());

exports.connectDatabase = function(){
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/orderManagement', { useNewUrlParser: true, useUnifiedTopology: true }).catch((ee)=>{
            console.log("Database connection failed.please ensure.");
        });
        const connection = mongoose.connection;

        connection.once('open', function () {
            console.log("MongoDB database connection established successfully");    
        });
    
    } catch (error) {
        console.log("Error : ", error);
    }
}

 
this.connectDatabase();

let repository = require('./repository');

//Create hotels in hotel table as hotel master table
orderApiRoutes.route('/createHotel').post(function (req, res) {
   repository.saveHotel(req,res);
});

//Create rooms in room table as room master table
orderApiRoutes.route('/createRoom').post(function (req, res) {
   repository.saveRoom(req,res);
});

//Create customer and order details
orderApiRoutes.route('/createOrder').post(function (req, res) {
    repository.saveOrder(req, res);
});

app.use('/api', orderApiRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});