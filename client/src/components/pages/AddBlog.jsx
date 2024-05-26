
import "../styles/Addblog.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function AddBlog() {
  let navigate=useNavigate()
  let token=JSON.parse(window.localStorage.getItem("token"))
  const [fname,setFname]=useState('')
  const [lname,setLname]=useState('')
  const [email,setEmail]=useState('')
  const [contact,setContact]=useState('')
  const [img,setImg]=useState('')
  const [location,setLocation]=useState('')
  function handleAdd(e){
    e.preventDefault(); 
    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("img", img);
    formData.append("location", location);
    let id=JSON.parse(window.localStorage.getItem("stt")) 
      fetch(`http://localhost:8000/api/content`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      })
        .then((res) => {
          return res.json();
        })
        .then(() => {
          alert("Content Added Successfully");
          navigate("/viewblog")
        })
        .catch((err) => {
          console.log(err);
        });

  } 

  return (
    <>
    <div className='container-fluid  py-4'>
    <div className='row'>
      <div className="col-sm-3"></div>
      
      <div className='col-sm-4 py-5'>
        <img src="https://img.freepik.com/free-vector/blogging-concept-illustration_114360-4480.jpg?w=1060&t=st=1687179733~exp=1687180333~hmac=1f4a16781ceae33fdb25c5d084b4b0f941e77ca41f5c19446a23c0250eb2f493" style={{height:'500px',width:'500px'}}/>
      </div>
      <div className='col-sm-4 blo'>
        <center className='py-3'><h3 style={{color:'black'}}>Add<u style={{color:'#fdc700'}}>Blog</u></h3></center>
        <form onSubmit={handleAdd}>
      <input type="text" value={fname}  onChange={(e)=>setFname(e.target.value)}  className='form-control w-100 '  placeholder='Enter Your FirstName' /><br/>
      <input type="text" value={lname}  onChange={(e)=>setLname(e.target.value)}   className='form-control w-100 '  placeholder='Enter Your LastName' /><br/>
      <input type="text"  value={email}  onChange={(e)=>setEmail(e.target.value)}   className='form-control w-100 '  placeholder='Enter Your Email' /><br/>
      <input type="text" value={contact}  onChange={(e)=>setContact(e.target.value)}    className='form-control w-100 '  placeholder='Enter Your Mobile' /><br/>
      <input type="file" onChange={(e)=>setImg(e.target.files[0])}      className='form-control w-100 '  placeholder='Enter Your profile' /><br/>
      <input type="text"  value={location}  onChange={(e)=>setLocation(e.target.value)}   className='form-control w-100 '  placeholder='Enter Your location' /><br/>
      <input type="submit"   className='form-control' value="Submit"  style={{background:'#fdc700'}} /><br />
  
      </form><br />
      </div>
      <div className="col-sm-1"></div>
    </div>
    </div>
    </>
  )
}
