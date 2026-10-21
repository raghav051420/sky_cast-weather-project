import React, { useState } from 'react'

export default function Arithematic() {
    const [A,setA]=useState(0);
    const [B,setB]=useState(0);
    const [C,setC]=useState(0);

    const handerSubmit = (props) =>{
      document.title=props.title;
         var ans=parseInt(A)+parseInt(B);
         setC(ans);
    }

  return (
    
    <>
    <div className='container'>
        <h1 className='text-center'>ARTHEMATIC OPERATION</h1>
        <h2 className='text-center'>result: {C}</h2>
        <div className='row justify-content-center shadow p-3'>
                <div className='col-md-6'>
                    <div className='row mt-5'>
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
                              <input type="button" className="btn btn-primary btn-lg" id="txt3" value="SUBMIT" placeholder="name@example.com" onClick={handerSubmit}/>
                           </div>
                           
                    </div>
                </div>
               

            </div>
        
  </div>
    </>
  )
}
