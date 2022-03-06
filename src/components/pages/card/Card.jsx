import React from 'react'
import { useSelector } from 'react-redux'

function Card() {

  const travelAdvice = useSelector((state) => state.adviceReducer.travelAdvice);

 const takeAdvice = travelAdvice.map((adv) => {
  const {id, title, category, country, image} = adv;
  
      return (
        <div className='card'>
          <div className="place--card">
              <div className="place--card--img--div">
                  <img className='place--img' src= {image} alt='show' />
              </div>
              <span>{title}</span><br /> 
              <span>{category}</span><br />
              <p>{country}</p><br />
              <span>see complete recipe</span>
          </div>
    </div>
         
      )
 })

  return (
    <>
      {takeAdvice}

    </>
  )
}

export default Card;