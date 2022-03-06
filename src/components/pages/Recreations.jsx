import React, { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getRecreation } from '../../redux/actions/actioncreator';
import RecreationCard from './card/recreationCard';



function Recreations() {

  const attraction = useSelector((state) => state);
    const dispatch = useDispatch();

  const getRecreationInfo = () => {
     var options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
        params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': '306aa12f04msh9332bba46970d39p14371bjsnee82b205bc87'
        }
      };

      axios.request(options).then(function (response) {
        dispatch(getRecreation(response.data.data));

      }).catch(function (error) {
        console.error(error);
      });

  }

  useEffect(() => {
     getRecreationInfo();
  }, []);

  return (
    <div className='recreation'>
      <RecreationCard />

    </div>
  )

  
}

export default Recreations

//<img className='recreation-place-holder--pic' src='https://www.indiana.edu/images/hoosier-life/hoosier-life-aquatics.jpg' alt='' />

/*
const app_key = 'f26d7a2c';
const app_id = '918d1e12afd2e62ca25a967995ac35c3';

const [outPeriod, setOutPeriod] = useState();
  const [recreat, setRecreat] = useState([]);
  
  const getLeisure = async  (inputText) => {
    const response = await axios.get(
        `https://api.edamam.com/search?q=${inputText}&app_id=${app_key}&app_key=${app_id}`
        );
   console.log(response)
   setRecreat(response.data.hits)
  
  }
  
  const getRecreation = (e) => {
    clearTimeout(outPeriod)
  
    const timer = setTimeout(() => {
        getLeisure(e.target.value)
    }, 500)
    setOutPeriod(timer)
    
  }

  return (
    <div className='recreation'>
        <div className="recreation--div">
            <input className='recreation--input' type= 'text' placeholder='search recreation places' onChange={getRecreation} />
            <div className='card--section'>
            {recreat.length ? recreat.map((rec) => {
              return (
                <div className='desti--card'>
                <Card 
                      img = {rec.recipe.image}
                      name = {rec.recipe.label}
                />
                </div>
              )
              }) : <img className='recreation-place-holder--pic' src='https://www.indiana.edu/images/hoosier-life/hoosier-life-aquatics.jpg' alt='' />}
            
            </div>
        
        </div>
        
    </div>
  )

*/