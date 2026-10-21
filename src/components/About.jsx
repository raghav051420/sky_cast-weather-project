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
export default function About({data}) {
   let pic="/images/cloud1.webp";
      

      
     if(data.current?.condition?.text?.toLowerCase().includes("Cloudy")){
      pic="/images/cloud1.webp";
     }
     else if(data.current?.condition?.text?.includes("sunny")){
      pic="/images/sun2.jpg";
     }
     else if(data.current?.condition?.text?.includes("rain")){
      pic="/images/rain.jpg";
     }
     
  return (
    <>
    <div className='container d-flex ' style={{height:"400px",margin:'20px auto',width:"90%"}}>
     <div style={{width:'50%'}}>
     <div className='d-flex gap-5' style={{height:"35%",width:'50%'}}>
       <p style={{fontSize:"80px", fontWeight:"500"}}>About</p>
        <p style={{fontSize:"80px", fontWeight:"500",color:"#0b4ebe"}}>SkyCast{'\n'}</p>
        
      </div>
     
      <img src="public\images\minus.png" alt="" style={{marginLeft:"5px",Bottom:"20px",width:"80px" ,height:"30px"}} />
       <div style={{fontWeight:"600"}}>
        <p>SkyCast is a simple and reliable weather application that</p><p> gives you real-time weather updates and accurate forecasts</p>
      <p> for any city in the world.</p> 
      <br />
      <p>💙 Stay updated. Stay prepared.</p>
       </div>
       </div>
       <div style={{width:"50%",height:"100%"}}>
        <div className='background' style={{ display: "flex",
    justifyContent: "flex-end", // bottom
    alignItems: "flex-start",   // left
    flexDirection: "column",
    padding: "30px",
    boxSizing: "border-box",  width: "100%",height: "100%", borderradius:"",backgroundImage:`url(${pic})`,borderRadius:'20px',backgroundRepeat:'no-repeat'  ,backgroundSize: "cover"}}>
         <h1 style={{fontSize:"100px",color:"#D6EAF8",textShadow:"1px 1px 2px black"}}>{data.current?.temp_c}°C</h1>
         <h1 style={{margin:'10px',color:'#D6EAF8',fontSize:'30px',textShadow:"1px 1px 2px black"}}>{data?.location?.name}, {data?.location?.country}</h1>
           
            <h1 style={{margin:'10px',color:"#87CEFA",textShadow:"1px 1px 2px black"}}>{data?.current?.condition?.text}</h1>
        </div>
       </div>
    </div>
    
    <div
  className="row3 d-flex justify-content-center gap-3"
  style={{ width: "60%", margin: "30px auto" }}
>
  {/* Humidity */}
  <div
    style={{
      width: "25%",
      height: "200px",
      backgroundColor: "#fbfbfc",
      borderRadius: "10px",
      boxShadow: "0 8px 25px rgba(64, 144, 255, 0.18)",
      padding: "20px",
      textAlign: "center",
    }}
  >
    <WiHumidity size={75} color="#2196F3" />
    <h5><b>Humidity</b></h5>
    <p style={{ color: "#6c757d", fontSize: "14px", marginTop: "10px" }}>
      Monitor the air moisture level for better daily comfort.
    </p>
  </div>

  {/* Wind */}
  <div
    style={{
      width: "25%",
      height: "200px",
      backgroundColor: "#fbfbfc",
      borderRadius: "10px",
      boxShadow: "0 8px 25px rgba(64, 144, 255, 0.18)",
      padding: "20px",
      textAlign: "center",
    }}
  >
    <WiStrongWind size={75} color="#9cd6a9" />
    <h5><b>Wind</b></h5>
    <p style={{ color: "#6c757d", fontSize: "14px", marginTop: "10px" }}>
      Track live wind speed and breeze conditions instantly.
    </p>
  </div>

  {/* Visibility */}
  <div
    style={{
      width: "25%",
      height: "200px",
      backgroundColor: "#fbfbfc",
      borderRadius: "10px",
      boxShadow: "0 8px 25px rgba(64, 144, 255, 0.18)",
      padding: "20px",
      textAlign: "center",
    }}
  >
    <FaEye size={35} color="#6C63FF" />
    <h5 style={{ marginTop: "20px" }}><b>Visibility</b></h5>
    <p style={{ color: "#6c757d", fontSize: "14px", marginTop: "10px" }}>
      Check how clearly you can see in current weather conditions.
    </p>
  </div>

  {/* Pressure */}
  <div
    style={{
      width: "25%",
      height: "200px",
      backgroundColor: "#fbfbfc",
      borderRadius: "10px",
      boxShadow: "0 8px 25px rgba(64, 144, 255, 0.18)",
      padding: "20px",
      textAlign: "center",
    }}
  >
    <WiBarometer size={75} color="#fe8913" />
    <h5><b>Pressure</b></h5>
    <p style={{ color: "#6c757d", fontSize: "14px", marginTop: "10px" }}>
      View the current atmospheric pressure in your location.
    </p>
  </div>
</div>
<div className='d-flex gap-5 m-5'>
<table
  className="table table-hover"
  style={{
    width: "40%",
    marginLeft:"90px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(64,144,255,0.18)"
  }}
>
  <thead style={{ backgroundColor: "#0b4ebe", color: "white" }}>
    <tr>
      <th>Technology</th>
      <th>Purpose</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>⚛️ React.js</td>
      <td>Builds the user interface with reusable components.</td>
    </tr>

    <tr>
      <td>🌦️ WeatherAPI</td>
      <td>Provides real-time weather and 5-day forecast data.</td>
    </tr>

    <tr>
      <td>📡 Axios</td>
      <td>Fetches weather data from the API.</td>
    </tr>

    <tr>
      <td>🎨 Bootstrap</td>
      <td>Creates a responsive and clean layout.</td>
    </tr>

    <tr>
      <td>🎯 React Icons</td>
      <td>Displays beautiful weather and UI icons.</td>
    </tr>

    <tr>
      <td>💻 JavaScript (ES6)</td>
      <td>Handles application logic and interactivity.</td>
    </tr>

    <tr>
      <td>🎨 CSS</td>
      <td>Styles the application with a modern design.</td>
    </tr>
  </tbody>
</table>
<div style={{borderRadius:"20px",width:'40%',height:"600px"}}>
<div style={{width:"100%",minHeight:"40%"}}>
  <h1><b>Why SkyCast?</b></h1>
  <img src="public\images\minus.png" alt="" style={{height:"20px",width:'60px',margin:'10px'}}/>
  <p style={{margin:'10px'}}><b>SkyCast is built to deliver weather information in the simplest 
    way possible. Whether you're planning your day or a week ahead, SkyCast helps you 
    make better decisions with accurate and up-to-date forecasts.</b></p>
</div>
<div style={{width:"100%",height:"55%"}}>
<div style={{height:"100%",width:'100%',borderRadius:"20px",backgroundImage:"url('public/images/Untitled design.png')",backgroundRepeat:'no-repeat'  ,backgroundSize: "cover"}}></div>
</div>
</div>
</div>

<div className='footer' style={{width:'90%',height:"100px",margin:'0 auto 20px',backgroundColor:'#ecf4fd', opacity:'0.9',boxShadow:"1px 1px 2px gray",borderRadius:'20px'}}>
  <p style={{marginLeft:'500px',marginTop:'100px',fontSize:'20px'}}>☁ Accurate weather. Anytime. Anywhere.</p>
  <p style={{marginLeft:'540px',fontSize:'20px'}}>Thank you for choosing SkyCast!</p>
</div>

    
    </>
  )
}
