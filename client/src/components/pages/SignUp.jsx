import React, { useState, } from 'react'
import {useNavigate} from "react-router-dom"
import "../styles/SignUp.css"


export default function SignUp() {
const [name,setName]=useState("")
const  [email,setEmail]=useState("")
const [contact,setMobile]=useState("")
const [password,setPassword]=useState("")
const navigate=useNavigate()
  const data = {name, email,contact, password };

 
   function register(){
    console.log(data );
    fetch("http://localhost:8000/api/instructor", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json();
        }
      })
      .then((result) => {
        //console.log(result);
        if (result.status === true && result.code === 200) {
          console.log(result.status);
          
          navigate('/login');
          window.location.reload(true)
        } else {
          alert(result.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  
   }

  return (
    <>
   <div className='container-fluid a py-3'>
      <div className='row'>
        <div className='col-sm-2'></div>
       <div className='col-sm-4 py-5'>
       <h2><u style={{color:'#fdc700'}}>Sign</u>Up..??</h2>
      <input type="text"  className='form-control w-100 '    onChange={(e)=>setName(e.target.value)}  placeholder='Enter Your name' /><br/>
      <input type="email"  className='form-control w-100 '    onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter Your Email' /><br/>
      <input type="number"   className='form-control w-100 '    onChange={(e)=>setMobile(e.target.value)} placeholder='Enter Your Mobile' /><br/>
      <input type="password"  className='form-control w-100 '    onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Your password' /><br/>
      <div>
        <button  className='form-control  w-100' onClick={register} style={{background:'#fdc700'}}>SignUp</button>
        </div>
        <br/>
        <h6 className='text-light'><b style={{color:'black'}}>I have an already Account.?  </b><a href='/login'>Login</a></h6>
      
      </div>
      <div className='col-sm-6'>
        <img src="data:image/jpeg;base64,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" style={{height:'500px'}}/>
        </div> 
      </div>
   </div>
    </>
  )
}