
import React from 'react'
import { useSelector } from 'react-redux';

function RecreationCard() {

  const attraction = useSelector((state) => state.recreationReducer.attraction);

  return (
    <div className='attraction'>
        <div className="attraction--card--div">
            <div className="attraction--image--div">
                 <img className='attraction--img' src="" alt='' />
            </div>
           
            
        </div>
    </div>
  )
}

export default RecreationCard;