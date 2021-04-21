var express = require('express');
var router = express.Router();
var customerModel = require("../public/javascripts/Customers");

/* GET home page. */
router.get('/', function(req, res){
  res.render("index");
});

router.get("/Customers", function(req, res){
  customerModel.find({}, function(err, Data){
    if(err)
    {
      throw err;
    }
    res.render("Customers", {Records: Data});
  });
});

var Email_ID;

router.get("/Customer/:Email", function(req, res){
  Email_ID = req.params.Email;
  customerModel.find({Email: req.params.Email}, function(err, Data){
    if(err)
    {
      throw err;
    }
    res.render("Customer-Data", {Record: Data[0]});
  });
});

router.post("/Customer", function(req, res){
  customerModel.updateOne({Email: Email_ID}, {$inc: {Current_Balance: req.body.Amount}}, function(err, data){
    if(err)
    {
      throw err;
    }
    else
    {
      customerModel.find({Email: Email_ID}, function(err, Data){
        if(err)
        {
          throw err;
        }
        res.render("Customer-Data", {Record: Data[0]});
      });
    }
  });
});

module.exports = router;