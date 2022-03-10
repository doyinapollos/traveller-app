import React from 'react'
import { useSelector } from 'react-redux';

function WeatherCard() {

  const checkWeather = useSelector((state) => state.weatherReducer.checkWeather);

  const checkCurrentWeather = useSelector((state) => state.currentWeatherReducer.checkCurrentWeather);

  return (
    <div className='whether--card'>
        <div className="whether--card--div">
         
        <div className='weather--card--1'>
            <p>Name: {checkWeather.name}</p>
            <p>Region: {checkWeather.region}</p>
            <p>Country: {checkWeather.country}</p>
            <p>Tz_Id: {checkWeather.tz_id}</p>
            <p>Local time: {checkWeather.localtime}</p>
          </div>

          <div className='weather--card--2'>
           
            <p>Temperature: {checkCurrentWeather.temp_c}</p>
            
            <p>Latitude: {checkWeather.lat}</p>
            <p>Longitude: {checkWeather.lon}</p>
          </div>

        </div>
    </div>
  )
}

export default WeatherCard;

/*
<div className='weather--card--2'>
            <p>Description: {checkWeather.current.condition.text}</p>
            <p>Temperature: {checkWeather.current.temp_c}</p>
            <img src={checkWeather.current.condition.icon} alt='icon' />
            <p>Latitude: {checkWeather.location.lat}</p>
            <p>Longitude: {checkWeather.location.lon}</p>
          </div>

*/