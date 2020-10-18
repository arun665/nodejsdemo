const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://mongodb:Arun1117@cluster0.spwl1.mongodb.net/mongodb?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
var conn=mongoose.connection;

const employeeSchema = new mongoose.Schema({
    name: String,
    email:String,
    etype:String,
    hourlyrate:Number,
    totalHour:Number

  })

  const employeeModel = mongoose.model('Employee', employeeSchema);

  module.exports=employeeModel;
