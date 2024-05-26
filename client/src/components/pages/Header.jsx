 
import React, { useEffect } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
function Header() {
  let token=JSON.parse(window.localStorage.getItem("token"))
  let navigate=useNavigate()
  function logout(){
    window.localStorage.removeItem('token');
    
    navigate('/login')
    window.location.reload()
  }
  return (
   <>
   {token?<> 
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
     <b  style={{"color":"#ffc801"}}>TASK</b>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" float-end id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/addblog'>
            AddBlog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/viewblog'>
          ViewBlog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" onClick={logout} aria-current="page" to='/login'>
         LogOut 
          </Link>
        </li>
        
      </ul>
       
    </div>
  </div>
</nav>

  </> :
  <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
     <b  style={{"color":"#ffc801"}}>TASK</b>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/login'>
           SignIn
          </Link>
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
  </>
  }
   </>
  );
}

export default Header;
