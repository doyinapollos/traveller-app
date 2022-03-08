import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className="nav--bar">
            <div className="logo--div">
                <img className='logo' src='https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?size=338&ext=jpg' alt='' />
            </div>

            <div className="nav--bar--ul--div">
                <ul className='nav--bar--ul'>
                    <li className='list--item'><Link to='/'>Home</Link></li>
                    <li className='list--item'><Link to='/destinations'>Weather</Link></li>
                    <li className='list--item'><Link to='/recreations'> Recreation Centers </Link></li>
                    <li className='list--item'><Link to='/advice'> Travel Advice </Link></li>

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header