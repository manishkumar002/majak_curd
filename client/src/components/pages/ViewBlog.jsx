
import React, { useState,useEffect } from 'react' 
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';  
function  VeiwBlog(){ 
  let token=JSON.parse(window.localStorage.getItem("token"))
const [fname,setFname]=useState('')
const [lname,setLname]=useState('')
const [email,setEmail]=useState('')
const [contact,setContact]=useState('')
const [img,setImg]=useState('')
const [location,setLocation]=useState('')
const[data,setData]=useState([]);
  function demo(){
    
    fetch(' http://localhost:8000/api/content',{
      method: 'GET', // or any other HTTP method
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then((result)=>{
      result.json().then((res)=>{
        setData(res)
      })
    })
  }
 useEffect(()=>{
  demo()
 },[])

 function del(id) {
   
  if (window.confirm('are you sure want to delete?')) {
    fetch(`http://localhost:8000/api/content/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => res.json()) // or res.json()
      .then((res) => {
        toast.success('Delete Record SuccessFully', {
          position: "top-center"
      })
        demo();
      });
  } 
 
  else {
      toast.error('Record Not Delete', {
          position: 'top-center'
      })
  }
}

function edit(id){ 
  console.log(id)
  window.localStorage.setItem('stt',JSON.stringify(id._id))
    setFname(id.fname)
    setLname(id.lname)
    setEmail(id.email)
    setImg(id.img)
    setContact(id.contact)
    setLocation(id.location) 
    }

  function handleupdate(e){
    e.preventDefault();
   
    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("img", img);
    formData.append("location", location);
    let id=JSON.parse(window.localStorage.getItem("stt")) 
    console.log(id)
      fetch(`http://localhost:8000/api/content/${id}`, {
        method: "PUT",
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      })
        .then((res) => {
          return res.json();
        })
        .then(() => {
          alert("Content Updated Successfully");
        demo()
        })
        .catch((err) => {
          console.log(err);
        });

  }  
 
        return (
  
            <div className="container ">
                   <table className="table">
                    <thead className="thead-dark">
                    <tr style={{background:'#302b63'}}>
      <th>Id</th>
      <th>FNAME</th>
      <th>LNAME</th>
     <th>EMAIL</th>
    <th>NUMBER</th>
    <th>IMAGE</th>
  <th>LOCATION</th> 
     <th>Edit</th>
     <th>Delete</th>
    </tr>
                    </thead>
                    <tbody>
                   
                         {data.map((item,index)=>
                            <tr>
                                 <td>{index+1}</td>
        <td>{item.fname}</td>
        <td>{item.lname}</td>
        <td>{item.email}</td>
        <td>{item.contact}</td>
        <td><img src={`http://localhost:8000/api/img/${item.img}`} height='30px' width="40px" alt='path not found'/></td>
        <td>{item.location}</td> 
         
        
         <td>
         
<button type="button" onClick={()=>edit(item)}  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Edit
</button>

 
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={handleupdate}>
      <input type="text" value={fname}  onChange={(e)=>setFname(e.target.value)}  className='form-control w-100 '  placeholder='Enter Your FirstName' /><br/>
      <input type="text" value={lname}  onChange={(e)=>setLname(e.target.value)}   className='form-control w-100 '  placeholder='Enter Your LastName' /><br/>
      <input type="text"  value={email}  onChange={(e)=>setEmail(e.target.value)}   className='form-control w-100 '  placeholder='Enter Your Email' /><br/>
      <input type="text" value={contact}  onChange={(e)=>setContact(e.target.value)}    className='form-control w-100 '  placeholder='Enter Your Mobile' /><br/>
      <input type="file" onChange={(e)=>setImg(e.target.files[0])}      className='form-control w-100 '  placeholder='Enter Your profile' /><br/>
      <input type="text"  value={location}  onChange={(e)=>setLocation(e.target.value)}   className='form-control w-100 '  placeholder='Enter Your location' /><br/>
      <input type="submit"   className='form-control' value="UPDATE"  style={{background:'#fdc700'}} /><br />
  
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         
      </div>
    </div>
  </div>
</div>
          
          </td>        
          <td><button onClick={()=>del(item._id)} className='btn btn-info'>Delete</button></td>    
           
                            </tr>
                          )}   
                       
                    </tbody>   
                </table>
                <ToastContainer/> 
            </div>
        );
    }
  
export default VeiwBlog;

