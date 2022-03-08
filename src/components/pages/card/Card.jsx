import React from 'react'
import { useSelector } from 'react-redux'

function Card() {

  const travelAdvice = useSelector((state) => state.adviceReducer.travelAdvice);

 const takeAdvice = travelAdvice.map((adv) => {
  const {id, title, category, country, image} = adv;
  
      return (
        
          <div className='card'>
            <div className="place--card" id={id}>
                <div className="place--card--img--div">
                    <img className='place--img' src= {image} alt='show' />
                </div>
                <span>{title}</span><br /> 
                <span>{category}</span><br />
                <p>{country}</p><br />
            </div>
          </div>
        
         
      )
 })

  return (
    <>
      {takeAdvice.length ? <div className='card--section'>{takeAdvice}</div> : <div className='advice--div'><img className='advice-place-holder--pic' src='https://travelwest.info/app/uploads/2021/11/Safer-travel-guidance_21.jpg' alt='' /> </div>}

    </>
  )
}

export default Card;