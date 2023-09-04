import React from 'react'
import postNavLogo from '../images/mediumMainLogo.png'
import dp from '../images/dpPost.png'
import { SlNote } from 'react-icons/sl'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'

function PostNav() {
  return (
    <div className='postNavwidth'> 
        <div className='postNav'>
            <div className='postnavLeft logoSvg'>
                <img src={postNavLogo} alt="" />
                <div>
                    <span>
                        <CiSearch />
                    </span>
                    <input type="search" name="" placeholder='Search Medium' id="" />
                </div>
            </div>
            <div className='postnavRight'>
                <Link to='/write' className='write'>                
                    <div className='write'>
                        <span> <SlNote /> </span> <span>Write</span>
                    </div>
                </Link>
                <Link className='write'>
                    <div className='signUp'>
                        <button>Sign Up</button>
                    </div>
                </Link>
                <Link className='write'>
                    <div className='write'>
                        <p>Sign In</p>
                    </div>
                </Link>
                <div>
                    <img src={dp} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostNav