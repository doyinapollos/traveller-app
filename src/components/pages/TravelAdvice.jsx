import React, { useEffect } from 'react';
import axios from 'axios';
import Card from './card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvice } from '../../redux/actions/actioncreator';

//https://fakestoreapi.com/products
//http://api.mediastack.com/v1/news?access_key=ac6a61af947a9228952e57f5946eb175


function TravelAdvice() {

  const travelAdvice = useSelector((state) => state);
  const dispatch = useDispatch();

  const getTravelData = async  () => {
    const response = await axios.get(
        `https://fakestoreapi.com/products`
        )
        .catch(err => {
          console.log(err)
        });
        console.log(response.data)
        dispatch(getAdvice(response.data))
   
  
  }

 // useEffect(() => {
  //  getTravelData();
  //}, []);

  //console.log(travelAdvice)

  const getItem = (e) => {
    console.log(getTravelData(e.target.value))
  }

  return (
    <div className='travel'>
      <input className='advice--input' type="text" placeholder='ask' onChange={getItem} />
      
      <div className='card--component--div'>
         <Card />
      </div>
    </div>
  )

  
}

export default TravelAdvice;


/*
const app_key = 'f26d7a2c';
const app_id = '918d1e12afd2e62ca25a967995ac35c3';

const [timeOutMoment, setTimeOutMoment] = useState();
  const [getTravelPlaces, setGetTravelPlaces] = useState([]);

const getTravelData = async  (inputText) => {
  const response = await axios.get(
      `https://api.edamam.com/search?q=${inputText}&app_id=${app_key}&app_key=${app_id}`
      );
 console.log(response)
 setGetTravelPlaces(response.data.hits)

}

const getAdvice = (e) => {
  clearTimeout(timeOutMoment)

  const timeOutPlace = setTimeout(() => {
      getTravelData(e.target.value)
  }, 500)
  setTimeOutMoment(timeOutPlace)

}
  


  return (
    <div className='advice'>
        
        
        <div className="advice--div">
            <input className='advice--input' type= 'text' placeholder='search for travel advice' onChange={getAdvice} />
            <div className='card--section'>
            
            {getTravelPlaces.length ? getTravelPlaces.map((travel) => {
              
              return (
                <div className='desti--card'>
                <Card 
                      img = {travel.recipe.image}
                      name = {travel.recipe.label}
                />
                </div>
                  
              )
              }) : <img className='advice-place-holder--pic' src='https://travelwest.info/app/uploads/2021/11/Safer-travel-guidance_21.jpg' alt='' />}
            
            </div>
            
        </div>
        
        

    </div>
  )

*/