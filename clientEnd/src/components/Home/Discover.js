import React from 'react'
import { Link } from 'react-router-dom'

function Discover() {
  return (
    <div className='Discover'>
        <h3>Discover more of what matters to you</h3>
        <div className='discoverTags'>
          <button>
            <Link to='/' className='tagNames' >Programming</Link>
          </button>
          <button>
            <Link to='/' className='tagNames' >Data Science</Link>
          </button>
          <button>
            <Link to='/' className='tagNames' >Technology</Link>
          </button>
          <button>
            <Link to='/' className='tagNames' >Self Improvement</Link>
          </button>
          <button>
            <Link to='/' className='tagNames' >Writing</Link>
          </button>
          <button>
            <Link to='/' className='tagNames' >Relationships</Link>
          </button>
          <button>
            <Link to='/' className='tagNames' >Machine Learning</Link>
          </button>
          <button>
            <Link to='/' className='tagNames' >Productivity</Link>
          </button>
          <button>
            <Link to='/' className='tagNames' >Politics</Link>
          </button>
        </div>

        <div className='seeMore'>
            <Link to='/' className='seeMoreTopic'>See more topics</Link>
        </div>

        <div className='foot'>
            <div>
                <Link to='/' className='footLinks'>Help</Link>
            </div>
            <div>
                <Link to='/' className='footLinks'>Status</Link>
            </div>
            <div>
                <Link to='/' className='footLinks'>Writers</Link>
            </div>
            <div>
                <Link to='/' className='footLinks'>Blog</Link>
            </div>
            <div>
                <Link to='/' className='footLinks'>Careers</Link>
            </div>
            <div>
                <Link to='/' className='footLinks'>Privacy</Link>
            </div>
            <div>
                <Link to='/' className='footLinks'>Terms</Link>
            </div>
            <div>
                <Link to='/' className='footLinks'>About</Link>
            </div>
            <div>
                <Link to='/' className='footLinks'>Text to speech</Link>
            </div>
        </div>
    </div>
  )
}

export default Discover