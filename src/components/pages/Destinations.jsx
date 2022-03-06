import React, { useEffect } from 'react'
import axios from 'axios';
import WeatherCard from './card/WeatherCard';
import { useDispatch, useSelector } from 'react-redux';
import { getWeather } from '../../redux/actions/actioncreator';


//const API_OPEN_KEY = "00ad63b04eaae362fc0917824e50aa61"
//http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=${API_OPEN_KEY}
const app_key = "dd859ebb0301432084b144832220403"
//http://api.weatherapi.com/v1/current.json?key=${app_key}&q=Lagos&aqi=no


function Destinations() {
  const checkWeather = useSelector((state) => state);
  const dispatch = useDispatch();


  const getWeatherInfo = async () => {
     const response = await axios.get(
       `http://api.weatherapi.com/v1/current.json?key=${app_key}&q=Lagos&aqi=no`
       )
       .catch((err) => {
      console.log(err)
     })
     console.log(response.data)
     dispatch(getWeather(response.data))
     
  }

  useEffect(() => {
    getWeatherInfo()
  }, []);

   
  return (
     <div className='destination'>

     <WeatherCard />

     </div>
   )
  
  
}


export default Destinations; 

//<img className='desti-place-holder--pic' src='https://www.farecompare.com/wp-content/uploads/2018/12/2019-Top-Travel-Destinations-Sydney.jpg' alt='' />
//const app_key = 'f26d7a2c';
//const app_id = '918d1e12afd2e62ca25a967995ac35c3';
//https://api.edamam.com/search?q=${inputText}&app_id=${app_key}&app_key=${app_id}

/*

const [city, setCity] = useState("");
  const [place, setPlace] = useState({});
  
  const handleClick = () => {
  
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${app_key}&q=${city}&aqi=no`
    )
    .then(response => response.json())
    
    .then(data => 
      setPlace({
         name: data.location.name,
         country: data.location.country,
         farenheit: {
           current: data.current.temp_f
          
         },
         condition: data.current.condition.text

    })
    
  );
     
    
};

console.log(place);

   
  return (
    <div className='destinations'>
      <div className="search--div">
          <input type = "text" placeholder='search weather for city' value={city} onChange={(e) => setCity(e.target.value)} />
          <button onClick={handleClick}>Search</button>
      </div>

      <div className="weather--info--div">
           <div className="city">
             <h1>{place.name}</h1>
             <h3>{place.country}</h3>
           </div>
           <div className="city--info-div">
          
             <p>{place.condition}</p>
           </div>

      </div>

    </div>


*/ 