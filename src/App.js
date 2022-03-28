import React, {useState} from 'react'
import './App.css';
import 'weather-react-icons/lib/css/weather-icons.css';
import { WeatherIcon } from 'weather-react-icons';
import 'weather-react-icons/lib/css/weather-icons-wind.css';



function App() {

  const apikey = 'a46b2d5dec15c77b3514efc6c5c966b5'
  const [weatherData, setWeatherData] = useState([{}]) 
  const [city, setCity] = useState('') 

const getWeather =  (e) => {
if (e.key == "Enter"){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`).then
  (res => res.json()
  ).then(
    data => {
      setWeatherData(data)
    }
  )
}}





  return (
    //a comment
    <div >
      <div>
      <nav class="navbar navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Weather App</a>
 
  </nav>
  <br/>
      </div>
      <div className="container"> 
      <input  className="input" placeholder="Enter City name"
       onChange={e => setCity(e.target.value) }
       value={city}
       onKeyPress={getWeather }/>
       <br/>

       {typeof weatherData.main === "undefined" ? (
         <div>
           <p>Welcome, Enter a City Name to get Weather</p>
          
           </div>
          
        
       ): (
        <div className="box">
          <p  className="city">{weatherData.name} ,{weatherData.sys.country}</p>
          
          <WeatherIcon className="ico" iconId={weatherData.weather[0].id} name="owm"  />
         
          <p className="temp">{Math.round(weatherData.main.temp)}°C</p>  
          <p className="word">{weatherData.weather[0].main}</p> 
          
          <p className="desc">( {weatherData.weather[0].description} )</p>
          <p className="det">Feels Like {weatherData.main.feels_like}°C</p> 
          
          
          <p className="det">Humidity {weatherData.main.humidity}%</p>
          
          
          
          
         
          


          </div>

       )}

       {weatherData.cod === "404" ? (
         <div>
         <p>Oops !!! City not found. Please Enter a valid City Name</p>
         
         </div>
       ):(
         <>
         </>
       )
       
      }
      
    </div>
    </div>
  )
}

export default App
