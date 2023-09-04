import React from 'react'
import { BsEnvelopePlus } from 'react-icons/bs'
import sidedp1 from '../images/postSidedp1.jpg'
import sidedp2 from '../images/postSidedp2.jpg'
import sidedp3 from '../images/postSidedp3.jpg'
import sidedp4 from '../images/postSidedp4.png'
import sideImg1 from '../images/postSideImg1.png'
import sideImg2 from '../images/postSideImg2.jpg'
import sideImg3 from '../images/postSideImg3.jpg'
import sideImg4 from '../images/postSideImg4.jpg'
import { Link } from 'react-router-dom'
import PostRelateuse from '../Post/PostRelateuse'

function ProfileRight({postLogo, postAcct, followers, postCap}) {
    
  return (
    <div>
        <div className='PostRightPad'>
                <div className='PostRight'>
                    <div className='PRtop'>
                        <img src={postLogo} alt="" />
                        <span className='postAcct'> {postAcct} </span>
                        <Link to='/profile'>
                            <span className='followers'> {followers} </span>
                        </Link>
                        <span className='postCap'> {postCap} </span>

                        <div className='PRbtns'>
                            <button>Follow</button>
                            <button className='env'> <BsEnvelopePlus /> </button>
                        </div>
                    </div>
                    <div className='PRmain'>
                        <span>More from Medium</span>
                        <div>
                            
                        </div>

                        <div className='PRfootLinks'>
                            <ul>
                                <li>Help</li>
                                <li>Status</li>
                                <li>Writers</li>
                                <li>Blog</li>
                                <li>Careers</li>
                                <li>Privacy</li>
                                <li>Terms</li>
                                <li>About</li>
                                <li>Text to speech</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ProfileRight