import React, {useEffect, useState} from "react";
import {FaCloudSunRain} from "react-icons/fa";


type locationCoords = {
    lat: number,
    lon: number

}

type API_KEY = {
    API_KEY: string;
}




const Weather = (props: locationCoords) => {
    const [results, setResults] = useState([]);
    const [temp, setTemp] = useState([]);
    const [feels_like, setFeels] = useState([]);
    const [skies, setSkies] = useState([]);
   

  const fetchWeather = () => {
        let API_KEY = "0e6e3555d222af08d638aef5b67627f3";
        
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&units=imperial&appid=${API_KEY}`)
        
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setResults(data)
        setTemp(data.main.temp)
        setFeels(data.main.feels_like)
        setSkies(data.weather[0].description)
       
      })
  

  }
  

  useEffect(() => {
    fetchWeather()
  }, [])

  return(
    <div>
        <div className="header">
         <div className="icon">
             <FaCloudSunRain />
             </div>   
      <h1>DON'T FORGOT TO CHECK THE WEATHER!</h1>
        </div>
        < div className="data">
        <p>Temp: {temp}°F</p>
        <p>Feels-like: {feels_like}°F</p>
        <p>Skies: {skies}</p>
       
        </div>
        <p></p>
    </div>
  )

}






export default Weather; 