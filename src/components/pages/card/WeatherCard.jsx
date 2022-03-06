import React from 'react'
import { useSelector } from 'react-redux';

function WeatherCard() {

  const checkWeather = useSelector((state) => state.weatherReducer.checkWeather);

  return (
    <div className='whether--card'>
        <div className="whether--card--div">
            <p>{checkWeather.sys.name}</p>
            <p>{checkWeather.location.country}</p>
            <p>{checkWeather.current.temp_c}</p>
            <p>{checkWeather.current.temp_f}</p>
            <p>{checkWeather.location.localtime}</p>
            <p>{checkWeather.location.lat}</p>
            <p>{checkWeather.location.lon}</p>
           
            
        </div>
    </div>
  )
}

export default WeatherCard;