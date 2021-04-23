var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Shakya:Shakya@cluster-1.jlvev.mongodb.net/Banking_System?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});

var Connection = mongoose.connection;

var customerSchema = new mongoose.Schema({
    Name: String,
    Phone_Number: Number,
    Email: String,
    Current_Balance: Number,
});

var Customers = mongoose.model("Customers", customerSchema, "Customers");

module.exports = Customers;