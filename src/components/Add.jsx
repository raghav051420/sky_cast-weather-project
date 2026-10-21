import axios from 'axios';
import React, { useState } from 'react'

export default function Add() {
    const [a,setA]=useState();
    const [b,setB]=useState();
    const [r,setR]=useState();
    const [error,setError]=useState([]);
    const handlerSubmit=async()=>{
        const response=await axios.post("http://localhost:3000/add",{
            a:a,
            b:b
        });
        const data=response.data;
        
        console.log(data);
        if(data["result"]!==undefined){
              setR(data.result);
    setError([]);}
        else{
            setError(data.error);
        }
    }

  return (
    <>
    <h1 className="text-center">Addition of Two Numbers</h1>
     <div className='container'>
       <div style={{color: "red", fontSize: "25px"}}>
    {error.map((v, i) => (
        <div key={i}>{v}</div>
    ))}
</div>
        <h1 className='text-center'>ARTHEMATIC OPERATION</h1>
        <h2 className='text-center'>result: {r}</h2>
        <div className='row justify-content-center shadow p-3'>
                <div className='col-md-6'>
                    <div className='row mt-5 justify-content-center'>
                           <div className="col-md-4">
                              <label htmlFor="txt1" className="form-label">ENTER FIRST NO.</label>
                           </div>
                           <div className="col-md-4">
                              <input type="number" className="form-control" id="txt1" placeholder="name@example.com" 
                              onChange={(e)=>{
                                  setA(e.target.value);
                              }}/>
                           </div>
                           
                    </div>
                     <div className='row mt-5'>
                           <div className="col-md-4">
                              <label htmlFor="txt2" className="form-label">ENTER second NO.</label>
                           </div>
                           <div className="col-md-4">
                              <input type="number" className="form-control" id="txt2" placeholder="name@example.com"
                              onChange={(e)=>{
                                  setB(e.target.value);
                              }}/>
                           </div>
                           
                    </div>
                      <div className='row mt-5 justify-content-center'>
                           <div className="col-md-4">
                              <input type="button" className="btn btn-primary btn-lg" id="txt3" value="SUBMIT" placeholder="name@example.com" onClick={handlerSubmit}/>
                           </div>
                           
                    </div>
                </div>
               

            </div>
        
  </div>
    </>
  )
}
