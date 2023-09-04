import React from 'react'
import { Link } from 'react-router-dom'
import NavLogo from '../images/mediumMainLogo.png'
import dp from '../images/dpPost.png'
import { CiBellOn, CiSearch } from 'react-icons/ci'
import { SlNote } from 'react-icons/sl'
import ProfileBodyLeft from './ProfileBodyLeft'
import banner from '../images/profileBanner.gif'
import ProfileRight from './ProfileRight'


function ProfilePage() {
  return (
    <div>
        <div className='profNavwidth'> 
            <div className='profNav'>
                <div className='profnavLeft'>
                    <img src={NavLogo} alt="" />
                    <div>
                        <span>
                            <CiSearch />
                        </span>
                        <input type="search" name="" placeholder='Search Medium' id="" />
                    </div>
                </div>
                <div className='profnavRight'>
                    <Link to='/write' className='write'>                
                        <div className='write'>
                            <span> <SlNote /> </span> <span>Write</span>
                        </div>
                    </Link>
                    <Link to='/' className='write'>
                        <i> <CiBellOn /> </i>
                    </Link>
                    <div>
                        <img src={dp} alt="" />
                    </div>
                </div>
            </div>
            <div className="profbody">
                <div className='profLeftSide'>
                    <ProfileBodyLeft profBanner={banner} profName='Medium Staff'/>
                </div>
                <div>
                    <ProfileRight />
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProfilePage