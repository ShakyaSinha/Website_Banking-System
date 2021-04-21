var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Banking_System", {useNewUrlParser: true, useUnifiedTopology: true});

var Connection = mongoose.connection;

var customerSchema = new mongoose.Schema({
    Name: String,
    Phone_Number: Number,
    Email: String,
    Current_Balance: Number,
});

var Customers = mongoose.model("Customers", customerSchema, "Customers");

module.exports = Customers;