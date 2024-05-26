const mongoose = require("mongoose");
const InstructorRegisterSchema = new mongoose.Schema({
     
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
       required:true
    }, 
      contact:{
        type:Number,
        required:true
    }, 
    password:{
        type:String,
        default:12345
        
    } 
});


module.exports = mongoose.model('InstructorRegister',InstructorRegisterSchema);
 