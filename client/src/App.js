import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./components/pages/Header"
import SignUp from "./components/pages/SignUp"
import Login from "./components/pages/Login"
import AddBlog from "./components/pages/AddBlog"
import ViewBlog from "./components/pages/ViewBlog" 
import './App.css';
 
function App() {
  return (
    <>
    <div className="">
    <BrowserRouter>
      <Header/>
   
      <Routes>
        <Route path="/sign" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
       <Route path="/addblog" element={<AddBlog/>}/>
        <Route path="/viewblog" element={<ViewBlog/>}/>
        
      </Routes> 
       </BrowserRouter> 
    </div>
    
    </>
  )
}

export default App;
