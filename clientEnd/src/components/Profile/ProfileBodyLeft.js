import React from 'react'
import ProfilePosts from './ProfilePosts'
import photo1 from '../images/profPost1.png'
import photo2 from '../images/profPost2.png'


function ProfileBodyLeft({profBanner, profName, }) {
  return (
    <div>
        <div>
            <div className='profBanner'>
                <img src={profBanner} alt="" />
            </div>
        </div>


        <div>
            <div className='ProfileNameAndNav'>
                <div>
                    <span>{profName}</span>
                </div>
                <ul>
                    <h3>My Post</h3>
                </ul>
            </div>

            <div>
                <ProfilePosts author='3 Min Read' time='5 days ago' postTopic='What we’re reading: Want to see something beautiful?' preview='A handpicked selection of stories you may have missed this week — Want to see something beautiful? This mosque in Malaysia, a little cottage on the hill in Poland, and a series of tiny red houses seemingly' postPhoto={photo1} />

                <ProfilePosts author='3 Min Read' time='Apr 14' postTopic='What we’re reading: Aren’t humans amazing sometimes?' preview='A few stories you may have missed this week — Humans are amazing sometimes. In the midst of *gestures broadly* everything happening in the world right now, it’s worth coming back to this simple truth from' postPhoto={photo2} />
                
                {/* <ProfilePosts /> */}
            </div>
        </div>
    </div>
  )
}

export default ProfileBodyLeft