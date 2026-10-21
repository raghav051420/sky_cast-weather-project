import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Newsapp() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
      try{
      const response= await axios.get("https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=us&max=50&apikey=f90f7ebb0758e18b80ee16976d033868");
    setData(response.data.articles);
    console.log(response.data.articles);
console.log(response.data.totalResults);
console.log(response.data.articles.length);
    {/*const response=await fetch("https://fakestoreapi.com/products/1");
    const dats=response.json()*/}
    
      }
      catch(error){
        console.log(error);
      }
   
    };
    fetchData();
  },[])
  return (
    <>
    <div className='row justify_content-center'>
        <h1 style={{color:"blue",marginTop:"30px" } } className='text-center ' >
            DISPLAY STORE RECORDS
        </h1>
      
    </div>
      <div className='container '>
          <div className='row g-2'>
            {data.map((items)=>{
                return(      
                <div className='col-md-3'>   
            <div className="card" style={{width: "18rem"}}>
  <img src={items.image} className="card-img-top " alt="..."/>
  <div className="card-body g-2 ">
    <h5 className="card-title">{items.title}</h5>
    <p className="card-text">{items.description}</p>
    <a href="#" className="btn btn-primary" onClick={()=>{
      items.url;
    }}>readmore</a>
  </div>
</div>
</div>)
            })}

   
          </div>
        </div>
    </>
  )
}
