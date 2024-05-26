const express=require('express'); 
const app=express();
const bodyParser=require("body-parser");
const cors=require('cors'); 
 const env=require('dotenv')
 
const PORT=process.env.PORT || 8000;
const   adminRouter=require('./Routers/admin/adminRouter') 
app.use(bodyParser.json()); 
app.use(express.json());
app.use(cors()
        ) ;
  env.config()
require('./config/db'); 
app.use("/api",adminRouter);  

app.use("/api/img", express.static("./public/upload")); 

app.listen(PORT, () => {
    console.log("Hi Amit your server is running at  this :" + PORT)
})







