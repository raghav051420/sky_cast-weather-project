import React, { useState } from 'react'



export default function React_t1() {
  const [t1,sett1]=useState("");
  const [t2,sett2]=useState("");
  const [t3,sett3]=useState("");
  const [t4,sett4]=useState("");
  const [t5,sett5]=useState("");
  const [t6,sett6]=useState("");
  const [t7,sett7]=useState("");
  const [t8,sett8]=useState("");
  const [t9,sett9]=useState("");
  const [t10,sett10]=useState("");
  
  const handlersubmit=()=>{
       var totalPurchase=parseInt(t1)*parseInt(t2);
       sett5(totalPurchase)
       var totalSales=parseInt(t3)*parseInt(t4);
       sett6(totalSales)
       var stocksLeft=Number(t1)-Number(t3);
       sett7(stocksLeft)
       var valueOfSales=Number(t2)*Number(t3);
       sett8(valueOfSales)
       var profit=totalSales-valueOfSales;
       sett9(profit)
       var profitPer=(profit/valueOfSales)*100;
       sett10(profitPer)
  }
  const handlerclear=()=>{
    sett1("");
    sett2("");
    sett3("");
    sett4("");
    sett5("");
    sett6("");
    sett7("");
    sett8("");
    sett9("");
    sett10("");
    
  }
  return (
    <>
    <div className='' style={{marginLeft:"45%"}}>
        <h1>STOCK CALCULATOR</h1>
    </div>
    {/*<div className='d-flex flex-wrap'>*/}
      <div className='row1 d-flex flex-wrap justify-content-center'>
        <div className='row align-items-center mt-4 p-3  justify-content-center'>
            <div class="col-auto" >
    <label htmlFor="pq" className="col-form-label" style={{color:"black",fontWeight:"bold"}} >enter purchase qty</label>
  </div>
  <div class="col-md-3 pd-5">
    <input type="number" id="pq" 
    className="form-control" aria-describedby="passwordHelpInline" style={{width:"150px",border:"2px solid black "}} value={t1} onChange={(e)=>{
       sett1(e.target.value);
       
    }} />
  </div>
  </div>
  
  <div className='row align-items-center mt-4 p-3  justify-content-center'>
            <div class="col-auto" >
    <label htmlFor="pp" className="col-form-label" style={{color:"black",fontWeight:"bold"}}>enter purchase price</label>
  </div>
  <div class="col-md-3 pd-5">
    <input type="number" id="pp" 
    className="form-control" aria-describedby="passwordHelpInline" style={{width:"150px",border:"2px solid black "}} value={t2} onChange={(e)=>{
       sett2(e.target.value);
        }} />
  </div>
  </div>

  <div className='row align-items-center mt-4 p-3  justify-content-center'>
            <div class="col-auto" >
    <label htmlFor="tp" className="col-form-label">Total purchase</label>
  </div>
  <div class="col-md-3 ms-3">
    <input type="number" id="tp" 
    className="form-control" aria-describedby="passwordHelpInline" style={{width:"150px",border:"2px solid black "}} value={t5} readOnly={true}/>
  </div>
  </div>
</div>
  <div className='row1 d-flex flex-wrap justify-content-center'>
  <div className='row align-items-center mt-4 p-3  justify-content-center'>
            <div class="col-auto" >
    <label htmlFor="sq" className="col-form-label" style={{color:"black",fontWeight:"bold"}}>Enter Sales Qty</label>
  </div>
  <div class="col-md-3 ms-3">
    <input type="number" id="sq" 
    className="form-control" aria-describedby="passwordHelpInline" style={{width:"150px",border:"2px solid black "}} value={t3} onChange={(e)=>{
       sett3(e.target.value);
    }} />
  </div>
  </div>

  
  <div className='row align-items-center mt-4 p-3  justify-content-center'>
            <div class="col-auto" >
    <label htmlFor="sp" className="col-form-label" style={{color:"black", fontWeight:"bold"}}>Enter Sales Price</label>
  </div>
  <div class="col-md-3 ms-3">
    <input type="number" id="sp" 
    className="form-control" aria-describedby="passwordHelpInline" style={{width:"150px",border:"2px solid black "}} value={t4} onChange={(e)=>{
       sett4(e.target.value);
    }}/>
  </div>
  </div>

  
  <div className='row align-items-center mt-4 p-3  justify-content-center'>
            <div class="col-auto" >
    <label htmlFor="ts" className="col-form-label">Total Sales</label>
  </div>
  <div class="col-md-3 ms-3">
    <input type="number" id="ts" 
    className="form-control" aria-describedby="passwordHelpInline" style={{width:"150px",border:"2px solid black ", marginLeft:"35px"}} value={t6} onChange={(e)=>{
       sett6(e.target.value);
    }} readOnly={true}/>
  </div>
  </div>
</div>
  
   <div className='row1 d-flex flex-wrap justify-content-center'>
  <div className='row align-items-center mt-4 p-3  justify-content-center'>
            <div class="col-auto" >
    <label htmlFor="sl" className="col-form-label" style={{ marginLeft:"20px"}}>Stocks Left</label>
  </div>
  <div class="col-md-3 ms-3">
    <input type="number" id="sl" 
    className="form-control" aria-describedby="passwordHelpInline" style={{width:"150px",border:"2px solid black "}} value={t7} readOnly={true}/>
  </div>
  </div>

  
  <div className='row align-items-center mt-4 p-3  justify-content-center'>
            <div class="col-auto" >
    <label htmlFor="sl" className="col-form-label"  >value of stocks</label>
  </div>
  <div class="col-md-3 ms-3">
    <input type="number" id="sl" 
    className="form-control" aria-describedby="passwordHelpInline" style={{width:"150px",border:"2px solid black "}} value={t8} readOnly={true}/>
  </div>
  </div>
  </div>
  
   <div className='row1 d-flex flex-wrap justify-content-center'>
  <div className='row align-items-center mt-4 p-3  justify-content-center'>
            <div class="col-auto" >
    <label htmlFor="p" className="col-form-label" style={{pddingLeft:"20px"}}>profit</label>
  </div>
  <div class="col-md-3 ms-3">
    <input type="number" id="p" 
    className="form-control" aria-describedby="passwordHelpInline" style={{width:"150px",border:"2px solid black ", marginLeft:"30px"}} value={t9}  readOnly={true}/>
  </div>
  </div>

  
  <div className='row align-items-center mt-4 p-3  justify-content-center' >
            <div class="col-auto" >
    <label htmlFor="prp" className="col-form-label" style={{marginLeft:"20px"}}>profit percentage</label>
  </div>
  <div class="col-md-3 ms-3">
    <input type="number" id="prp" 
    className="form-control" aria-describedby="passwordHelpInline" style={{width:"150px",border:"2px solid black "}} value={t10} readOnly={true}/>
  </div>
  </div>
  </div>
 
{/*</div>*/}
    <div className='container '>
      <input class="btn btn-primary btn-lg" style={{height:"45px",marginTop:"30px", marginLeft:"50%"}} type="submit" value="Submit" onClick={handlersubmit} ></input>
      <button type="button" class="btn btn-danger btn-lg" style={{marginLeft:"20px",marginTop:"30px"}} onClick={handlerclear}>CLEAR</button>
    </div>
    </>
  )
}
