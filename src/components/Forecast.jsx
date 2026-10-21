import React from 'react'
import {
  WiDaySunny,WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
  WiHumidity,
  WiStrongWind,
  WiBarometer,
  WiSunrise,
  WiSunset,
  WiNightClear,
  WiCloudy,
  WiDayCloudy,
  WiDayRain,
  WiNightAltCloudy,
  WiDust,
  WiRaindrop,
  WiNightPartlyCloudy
} from "react-icons/wi";

import {
  FaLocationDot,
  FaEye
} from "react-icons/fa6";

import {
  IoSearch
} from "react-icons/io5";
export default function Forecast({data}) {
     let icon=<WiDaySunny size={80} color='#fe8913'/>
     const hours = data.forecast?.forecastday?.[0]?.hour || [];  
        if(hours[0]?.condition.text==="Clear"){
         icon=<WiNightClear size={80} color="#6C63FF"/>;
         
        }
        else if(hours[0]?.condition.text==="sunny"){
         icon=<WiDaySunny size={80} color='#fe8913'/>;
        }
         else if(hours[0]?.condition.text.includes("Cloudy")){
         icon=<WiDayCloudy size={70} color='#FFC107'/>;
        }
         else if(hours[0]?.condition.text.includes("rain")){
         icon=<WiRain size={80} color='#90D5FF'/>;
        }
  return (
    
    <>
    <div className='d-flex flex-column' style={{margin:"30px"}}>
        <h1>Forecast</h1>
        <h5>Plan ahead with accurate weather updates</h5>

    </div>
    <div className='todayfor' style={{width:'60%',backgroundColor:'#fbfbfc',height:"200px",margin:"10px auto",borderRadius:'20px 20px 20px 20px'}} >
          <div className='heading' style={{margin:'10px'}}>
             
             <h3 style={{float:"right",fontSize:"20px", color:'#4064a3'}}><img src="public\images\pin.png" alt="" style={{width:"15px",height:"15px"}}/> {data.location?.name}, {data.location?.country}</h3>
            <h3> 
             
             <img src="public\images\clock.png" alt="" style={{height:"25px",width:"25px"}} /> 
          
          <b> Today's Forecast</b></h3>
         
          </div>
    <div className='d-flex mb-3 gap-3' style={{marginLeft:"0px"}}>
        
           <div className='d-flex mb-3 gap-3' style={{marginLeft:"0px"}}></div>
        <div className="card d-flex flex-column" style={{width:'240px',border:"none",height:"90px",marginRight:'0px'}}>
        <h5 style={{marginLeft:'30px'}}>{hours[1]?.time?.split(" ")[1]}AM</h5>
      <center>{icon}
         
    <h5 className="card-title mb-8" style={{paddingTop:"0px",marginRight:"5px"}}><b>{hours[1]?.temp_c}°C</b></h5>
     
      </center>
 
</div>
  <div className="card d-flex flex-column" style={{width:'240px',border:"none",height:"90px",marginRight:'0px'}}>
        <h5 style={{marginLeft:'30px'}}>{hours[2]?.time?.split(" ")[1]}AM</h5>
      <center>{icon}
         
    <h5 className="card-title mb-8" style={{paddingTop:"0px",marginRight:"5px"}}><b>{hours[2]?.temp_c}°C</b></h5>
     
      </center>
 
</div>
 <div className="card d-flex flex-column" style={{width:'240px',border:"none",height:"90px",marginRight:'0px'}}>
        <h5 style={{marginLeft:'30px'}}>{hours[3]?.time?.split(" ")[1]}AM</h5>
      <center>{icon}
         
    <h5 className="card-title mb-8" style={{paddingTop:"0px",marginRight:"5px"}}><b>{hours[3]?.temp_c}°C</b></h5>
     
      </center>
 
</div>
 <div className="card d-flex flex-column" style={{width:'240px',border:"none",height:"90px",marginRight:'0px'}}>
        <h5 style={{marginLeft:'30px'}}>{hours[4]?.time?.split(" ")[1]}AM</h5>
      <center>{icon}
         
    <h5 className="card-title mb-8" style={{paddingTop:"0px",marginRight:"5px"}}><b>{hours[4]?.temp_c}°C</b></h5>
     
      </center>
 
</div>
 <div className="card d-flex flex-column" style={{width:'240px',border:"none",height:"90px",marginRight:'0px'}}>
        <h5 style={{marginLeft:'30px'}}>{hours[5]?.time?.split(" ")[1]}AM</h5>
      <center>{icon}
         
    <h5 className="card-title mb-8" style={{paddingTop:"0px",marginRight:"5px"}}><b>{hours[5]?.temp_c}°C</b></h5>
     
      </center>
 
</div>
 <div className="card d-flex flex-column" style={{width:'240px',border:"none",height:"90px",marginRight:'0px'}}>
        <h5 style={{marginLeft:'30px'}}>{hours[6]?.time?.split(" ")[1]}AM</h5>
      <center>{icon}
         
    <h5 className="card-title mb-8" style={{paddingTop:"0px",marginRight:"5px"}}><b>{hours[6]?.temp_c}°C</b></h5>
     
      </center>
 
</div>
    </div>
    </div>

        <div className='next-5day'>    
      <table className="table" style={{width:"60%",margin:"0 auto 40px",borderRadius:"20px 20px 20px 20px"}}>
     
      <tbody>
          
         <tr>
          <th><h3 style={{color:"#465387"}}>
          
            <b>5-Day Forecast</b></h3></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
            {data.forecast?.forecastday?.map((items,index)=>{
            let nicon=<WiDaySunny size={60} color='#fe8913'/>;
            const cond = items.day?.condition?.text?.toLowerCase()||"";
    if(cond?.includes("cloudy")){
      nicon=<WiDayCloudy size={60} color='#FFC107'/>;
    }
    else if(cond?.includes("sunny")){
      nicon=<WiDaySunny size={60} color='#fe8913'/>;
    }
    else if(cond?.includes("rain")){
      nicon=<WiRain size={60} color='#90D5FF'/>;
    }
    else if(cond?.includes("clear")){
      nicon=<WiNightClear size={60} color="#6C63FF"/>;
    }
      return (
            <tr key={index}>
                <td>{items.date}</td>
                <td>{nicon}</td>
                <td>{items.day.condition.text}</td>
                <td>{items.day.avgtemp_c}°C</td>
            </tr>
        );
          })}
      
      </tbody>
    </table>
        </div>
    </>
  )
}
