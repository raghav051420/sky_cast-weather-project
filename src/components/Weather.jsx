import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  WiDaySunny,
  WiCloud,
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
  WiNightPartlyCloudy,
  WiSmog,
} from "react-icons/wi";

import { FaLocationDot, FaEye } from "react-icons/fa6";

import { IoSearch } from "react-icons/io5";
export default function Weather({ data }) {
  const style = {
    height: "400px",
    backgroundImage: 'url("images/rain.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "10px 10px 10px 10px",
    width: "60%",
    margin: "5px auto",
  };
  const date = data?.location?.localtime?.split(" ")[0] || "";
  const time = data?.location?.localtime?.split(" ")[1] || "";
  const hours = data?.forecast?.forecastday?.[0]?.hour || [];
  let pic = "images/cloud1.webp";

  if (hours[0]?.condition.text?.includes("Cloudy")) {
    pic = "images/cloud1.webp";
  } else if (hours[0]?.condition.text?.includes("sunny")) {
    pic = "images/sun2.jpg";
  } else if (hours[0]?.condition.text?.includes("rain")) {
    pic = "images/rain.jpg";
  }

  let icon = <WiDaySunny size={60} color="#fe8913" />;

  if (hours[0]?.condition.text === "Clear") {
    icon = <WiNightClear size={60} color="#6C63FF" />;
  } else if (hours[0]?.condition.text === "sunny") {
    icon = <WiDaySunny size={60} color="#fe8913" />;
  } else if (hours[0]?.condition.text.includes("Cloudy")) {
    icon = <WiDayCloudy size={60} color="#FFC107" />;
  } else if (hours[0]?.condition.text.includes("rain")) {
    icon = <WiRain size={60} color="#90D5FF" />;
  } else if (
    hours[0]?.condition.text.includes("haze") ||
    hours[0]?.condition.text.includes("smoke") ||
    hours[0]?.condition.text.includes("mist") ||
    hours[0]?.condition.text.includes("fog")
  ) {
    icon = <WiSmog size={60} color="gray" />;
  }
  return (
    <>
      <div
        className="dashboard"
        style={{
          height: "450px",
          backgroundImage: `url(${pic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "10px 10px 10px 10px",
          width: "70%",
          margin: "0px auto",
        }}
      >
        <div className="city">
          <h3 style={{ marginTop: "50px", marginLeft: "40px", color: "white" }}>
            {data?.location?.name}, {data?.location?.country}
          </h3>
        </div>
        <div className="date">
          <h4 style={{ color: "white", marginLeft: "40px" }}>
            {" "}
            <b>
              {date} | {time}
            </b>
          </h4>
        </div>
        <div className="temp">
          <div
            style={{
              color: "white",
              marginLeft: "40px",
              fontSize: "100px",
              paddingBottom: "10px",
            }}
          >
            {data.current?.temp_c}°C
          </div>
        </div>
        <div
          className="condition"
          style={{
            marginLeft: "45px",
            color: "#D6EAF8",
            textShadow: "1px 1px 2px gray",
          }}
        >
          <h3>
            <b>{data.current?.condition?.text}</b>
          </h3>
        </div>
        <div
          className="sunrise d-flex gap-4"
          style={{ color: "#D6EAF8", marginTop: "110px" }}
        >
          <div className="d-flex" style={{ textShadow: "1px 1px 2px gray" }}>
            <WiSunrise size={60} color="#FFC107" />
            <h5 style={{ marginTop: "20px" }}>
              Sunrise: {data?.forecast?.forecastday?.[0]?.astro?.sunrise}
            </h5>
          </div>
          <div className="d-flex" style={{ textShadow: "1px 1px 2px gray" }}>
            <WiSunset size={60} color="#fe8913" />
            <h5 style={{ marginTop: "20px" }}>
              Sunset: {data?.forecast?.forecastday?.[0]?.astro?.sunset}
            </h5>
          </div>
        </div>
      </div>

      <div
        className="row3 d-flex justify-content-center gap-5"
        style={{ width: "60%", height: "200px", margin: "30px auto" }}
      >
        <div
          className="col1"
          style={{
            width: "25%",
            height: "175px",
            backgroundColor: "#fbfbfc",
            opacity: "0.9",
            borderRadius: "10px 10px 10px 10px",
            boxShadow: " 0 8px 25px rgba(64, 144, 255, 0.18)",
            paddingTop: "5px",
            paddingLeft: "70px",
          }}
        >
          <WiHumidity size={90} color="#2196F3" />
          <b>Humidity</b>
          <h2 style={{ marginLeft: "8px", paddingBottom: "0px" }}>
            <b>{data.current?.humidity}%</b>
          </h2>
        </div>
        <div
          className="col2"
          style={{
            width: "25%",
            height: "175px",
            backgroundColor: "#fbfbfc",
            opacity: "0.9",
            borderRadius: "10px 10px 10px 10px",
            boxShadow: " 0 8px 25px rgba(64, 144, 255, 0.18)",
          }}
        >
          <center>
            <WiStrongWind size={90} color="#9cd6a9" />
          </center>
          <h5>
            <center>Wind</center>
          </h5>
          <h3>
            <center>
              <b>{data.current?.wind_kph} km/h</b>
            </center>
          </h3>
        </div>
        <div
          className="col3"
          style={{
            width: "25%",
            height: "175px",
            backgroundColor: "#fbfbfc",
            opacity: "0.9",
            borderRadius: "10px 10px 10px 10px",
            boxShadow: " 0 8px 25px rgba(64, 144, 255, 0.18)",
            paddingTop: "30px",
          }}
        >
          <center>
            <FaEye size={35} color="#6C63FF" />
          </center>
          <h5 style={{ marginTop: "20px" }}>
            <center>Visiblity</center>
          </h5>
          <h3>
            <center>
              <b>{data.current?.vis_km} km</b>
            </center>
          </h3>
        </div>
        <div
          className="col3"
          style={{
            width: "25%",
            height: "175px",
            backgroundColor: "#fbfbfc",
            opacity: "0.9",
            borderRadius: "10px 10px 10px 10px",
            boxShadow: " 0 8px 25px rgba(64, 144, 255, 0.18)",
            paddingTop: "8px",
          }}
        >
          <center>
            <WiBarometer size={80} color="#fe8913" />
          </center>
          <h5>
            <center>Pressure</center>
          </h5>
          <h3>
            <center>
              <b>{data.current?.pressure_mb} hPa</b>
            </center>
          </h3>
        </div>
      </div>

      <div
        className="todayfor"
        style={{
          width: "60%",
          backgroundColor: "#fbfbfc",
          height: "200px",
          margin: "10px auto",
          borderRadius: "20px 20px 20px 20px",
        }}
      >
        <div className="heading" style={{ margin: "10px" }}>
          <h3 style={{ float: "right", fontSize: "20px", color: "#4064a3" }}>
            <img
              src=" \images\pin.png"
              alt=""
              style={{ width: "15px", height: "15px" }}
            />{" "}
            {data.location?.name}, {data.location?.country}
          </h3>
          <h3>
            <img
              src=" \images\clock.png"
              alt=""
              style={{ height: "25px", width: "25px" }}
            />

            <b> Today's Forecast</b>
          </h3>
        </div>
        <div className="d-flex mb-3 gap-3" style={{ marginLeft: "0px" }}>
          <div
            className="d-flex mb-3 gap-3"
            style={{ marginLeft: "0px" }}
          ></div>
          <div
            className="card d-flex flex-column"
            style={{
              width: "240px",
              border: "none",
              height: "90px",
              marginRight: "0px",
            }}
          >
            <h5 style={{ marginLeft: "30px" }}>
              {hours[1]?.time?.split(" ")[1]}AM
            </h5>
            <center>
              {icon}

              <h5
                className="card-title mb-8"
                style={{ paddingTop: "0px", marginRight: "5px" }}
              >
                <b>{hours[1]?.temp_c}°C</b>
              </h5>
            </center>
          </div>
          <div
            className="card d-flex flex-column"
            style={{
              width: "240px",
              border: "none",
              height: "90px",
              marginRight: "0px",
            }}
          >
            <h5 style={{ marginLeft: "30px" }}>
              {hours[2]?.time?.split(" ")[1]}AM
            </h5>
            <center>
              {icon}

              <h5
                className="card-title mb-8"
                style={{ paddingTop: "0px", marginRight: "5px" }}
              >
                <b>{hours[2]?.temp_c}°C</b>
              </h5>
            </center>
          </div>
          <div
            className="card d-flex flex-column"
            style={{
              width: "240px",
              border: "none",
              height: "90px",
              marginRight: "0px",
            }}
          >
            <h5 style={{ marginLeft: "30px" }}>
              {hours[3]?.time?.split(" ")[1]}AM
            </h5>
            <center>
              {icon}

              <h5
                className="card-title mb-8"
                style={{ paddingTop: "0px", marginRight: "5px" }}
              >
                <b>{hours[3]?.temp_c}°C</b>
              </h5>
            </center>
          </div>
          <div
            className="card d-flex flex-column"
            style={{
              width: "240px",
              border: "none",
              height: "90px",
              marginRight: "0px",
            }}
          >
            <h5 style={{ marginLeft: "30px" }}>
              {hours[4]?.time?.split(" ")[1]}AM
            </h5>
            <center>
              {icon}

              <h5
                className="card-title mb-8"
                style={{ paddingTop: "0px", marginRight: "5px" }}
              >
                <b>{hours[4]?.temp_c}°C</b>
              </h5>
            </center>
          </div>
          <div
            className="card d-flex flex-column"
            style={{
              width: "240px",
              border: "none",
              height: "90px",
              marginRight: "0px",
            }}
          >
            <h5 style={{ marginLeft: "30px" }}>
              {hours[5]?.time?.split(" ")[1]}AM
            </h5>
            <center>
              {icon}

              <h5
                className="card-title mb-8"
                style={{ paddingTop: "0px", marginRight: "5px" }}
              >
                <b>{hours[5]?.temp_c}°C</b>
              </h5>
            </center>
          </div>
          <div
            className="card d-flex flex-column"
            style={{
              width: "240px",
              border: "none",
              height: "90px",
              marginRight: "0px",
            }}
          >
            <h5 style={{ marginLeft: "30px" }}>
              {hours[6]?.time?.split(" ")[1]}AM
            </h5>
            <center>
              {icon}

              <h5
                className="card-title mb-8"
                style={{ paddingTop: "0px", marginRight: "5px" }}
              >
                <b>{hours[6]?.temp_c}°C</b>
              </h5>
            </center>
          </div>
        </div>
      </div>

      <div className="next-5day">
        <table
          className="table"
          style={{
            width: "60%",
            margin: "0 auto 40px",
            borderRadius: "20px 20px 20px 20px",
          }}
        >
          <tbody>
            <tr>
              <th>
                <h3 style={{ color: "#465387" }}>
                  <b>5-Day Forecast</b>
                </h3>
              </th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            {data.forecast?.forecastday?.map((items, index) => {
              let nicon = <WiDaySunny size={60} color="#fe8913" />;
              const cond = items.day?.condition?.text?.toLowerCase() || "";
              if (cond?.includes("cloudy")) {
                nicon = <WiDayCloudy size={60} color="#FFC107" />;
              } else if (cond?.includes("sunny")) {
                nicon = <WiDaySunny size={60} color="#fe8913" />;
              } else if (cond?.includes("rain")) {
                nicon = <WiRain size={60} color="#90D5FF" />;
              } else if (cond?.includes("clear")) {
                nicon = <WiNightClear size={60} color="#6C63FF" />;
              } else if (
                cond.includes("haze") ||
                cond.includes("smoke") ||
                cond.includes("mist") ||
                cond.includes("fog")
              ) {
                nicon = <WiSmog size={60} color=" #C0C0C0" />;
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
  );
}
