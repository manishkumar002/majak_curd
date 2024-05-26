const mongoose = require("mongoose");
const ContentSchema = new mongoose.Schema({
      
      fname: {
        type: String,
        required: true,
      },
      
      lname: {
        type: String,
        required: true,
      },
      contact: {
        type: Number,
        required: true,
      },
     
      email: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      }
     
    
}); 
module.exports = mongoose.model('Content_tbl',ContentSchema);
 