var express = require('express');
var router = express.Router();
var empModel=require('../modules/employee');
var employee=empModel.find({});



router.post("/",function(req,res,next){

  var empDetails = new empModel({

    name:req.body.name,
    email:req.body.email,
    etype:req.body.etype,
    hourlyrate:req.body.hourlyrate,
    totalHour:req.body.totalHour


  });
empDetails.save(function(err,res1){

  if(err) throw err;

  employee.exec(function(err,data){
    if(err) throw err;
    
    res.render('index.ejs',{title:'Emplyee Records',records:data});
      
      });
 
});

});

/* GET home page. */
router.get('/', function(req, res, next) {

//set DEBUG=myapp:* & npm start


  employee.exec(function(err,data){
if(err)throw err;

res.render('index.ejs',{title:'Emplyee Records',records:data});
  
  });
  
});

module.exports = router;
