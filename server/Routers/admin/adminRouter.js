   
const express=require("express");
const Router=express.Router();
const { 
    createCategory,
   putCategory,
   getCategory,
    deleteCategory,
    getSingleCategory,
    loginInstrucor,
  createInstructor,  }=require('../../controllers/admin/AdminController') 
const img_upload=require('../../multer/admin/fileupload')
 
 const {requireSignIn}=require('../../middlewares/authMiddleware')
  
Router.route('/content/:_id').put(img_upload.single('img'),requireSignIn,putCategory);
Router.route('/content/:_id').delete(requireSignIn,deleteCategory); 
Router.route('/content/:_id').get(requireSignIn,getSingleCategory); 
Router.route('/content').post(img_upload.single('img'),createCategory);
Router.get('/content',requireSignIn,getCategory)
 

Router.route('/instructorlogin').post(loginInstrucor);
Router.route('/instructor').post(createInstructor);

 
   module.exports=Router; 