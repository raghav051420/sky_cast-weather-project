import React from 'react'
import { Link } from 'react-router-dom'

export default function Skynav({
  city,
  setCity,
  searchHandler
}) {
  return (
    <>
   
     <div className='container_nav d-flex justify-content-between align-items-center' style={{minWidth:"100%", height:"60px",top:'0',backgroundColor:"#0b4ebe",zIndex:'1000',position:"sticky"}}>
         <div className='logo_text d-flex ms-3 gap-2'>
             <img src="/images/sun.png" alt="Sun" style={{width:"35px",height:'35px'}} />
          <h3 style={{margin:'0px',color:"white"}}><b>SkyCast</b></h3>
          <input className="form-control" list="datalistOptions" id="exampleDataList" style={{width:"60%",marginLeft:"400px", paddingRight:"170px",marginTop:"2px", height:"45px"}} placeholder="Search city..." onChange={(e)=>{setCity(e.target.value)}}/>
          <button type="button" className="btn btn-primary "  style={{height:"45px",marginTop:"2px"}} onClick={searchHandler}>Search</button>
          <datalist id="datalistOptions">
            <option value="San Francisco"/>
            <option value="New York"/>
            <option value="Seattle"/>
            <option value="Los Angeles"/>
            <option value="Chicago"/>
         </datalist>
         </div>
         
          <div className='navbar' style={{lineHeight:"1"}}>
           
          <nav className="navbar navbar-expand-sm " >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{color:"white"}} >Home</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Forecast" style={{color:"white"}}>Forecast</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" style={{color:"white"}}>About</Link>
            </li>
           
            
        </ul>
        </div>
      </div>
    </nav>
        </div>
        </div>
      
    </>
  )
}
