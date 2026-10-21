import axios from "axios";
import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Nav from "./components/Nav"
import Arithematic from './components/Arithematic'
import React_t1 from './components/React_t1'
import Store from './components/Store'
import Newsapp from "./components/Newsapp";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Weather from "./components/Weather";
import Testing from "./components/Testing";
import Skynav from "./components/Skynav";
import Forecast from "./components/Forecast";
import Productinfo from "./components/Productinfo";
// import Add from "./components/add";
function App() {
  const API_KEY = "966a094b220e439aa31114414262110";
  const [count, setCount] = useState(0)
    const [data,setData]=useState({});
    const [city, setCity] = useState("");
    const searchHandler = async ()=>{
        try{
          var url =`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5`
          const response = await axios.get(url);
           setData(response.data);
           console.log(response.data);
           
        }
        catch(error){
            console.log(error);
          
        }
    }
     useEffect(()=>{
      const fetchData=async()=>{
        try{
           const response=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Yamunanagar&days=5`);
           setData(response.data);
           console.log(response.data);
        }
        catch(error){
            console.log(error);
        }
      };
       fetchData();

     },[])
  return (
    <>
      {/* <BrowserRouter>
      <Navbar/>
      <Routes>
        
     <Route path="/" element={<Home title="Home"/>}/>
    
           <Route path="/Contact-Us" element={<Contacts title="contacts"/>}/>
           <Route path="/Products" element={<Store title="Store"/>}/>
            <Route path="/Addition" element={<Arithematic title="Arithematic"/>}/>
            <Route path="/Testing" element={<Testing title="testing"/>}/>
           <Route path="/product info" element={<Productinfo title="product info"/>}/> 
           <Route path="/Add" element={<Add />}/>
      </Routes>
      </BrowserRouter>*/}
       <BrowserRouter>
        <Skynav
        city={city}
        setCity={setCity}
        searchHandler={searchHandler}
      />
      <Routes>
       
        <Route path="/" element={<Weather data={data}/>}/>
        <Route path="/Forecast" element={<Forecast data={data}/>}/>
        <Route path="/About" element={<About data={data}/>}/>
      </Routes>
      </BrowserRouter> 
        
    
    </>
  )
}

export default App
