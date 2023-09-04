import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/mediumMainLogo.png'

function Nav() {
  return (
    <div className='adminNav'>
      <div className="topnav">
        <div className='topNavLogo'>
          <img src={logo} alt="" />
        </div>
        <div className='topNavright'>
          <input type="search" name="Search" placeholder='Search' id="" />
          <Link to='/'><span>Logout</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Nav