import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='banner'>
      <div className="bannerSvg">
        <div className='bannerText'>
            <h1>Stay curious.</h1>
            <h3>Discover stories, thinking, and expertise from writers on any topic.</h3>
            
            <Link to='/' className='startReadBtn'>
              <button>Start reading</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner