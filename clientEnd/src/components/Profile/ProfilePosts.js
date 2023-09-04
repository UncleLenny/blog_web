import React, { useContext, useEffect, useState } from 'react'
import { HiOutlineLink } from 'react-icons/hi'
import { MdOutlineBookmarkAdd } from 'react-icons/md'
import { BlogContext } from '../dataContext/BlogContext'
import { Link } from 'react-router-dom'

function ProfilePosts( ) {
    const [data, setData] = useState([])
    const {userInfo} = useContext(BlogContext)

    const fetchStory = async () => {
        const resp = await fetch(`http://localhost:3030/api/stories`);
        const data = await resp.json();
        setData(data.data);
    }
    console.log(data)
    
    useEffect(() => {
        fetchStory();
    }, [])
  return (
    <div className=''>
        {data.map((story) => (
            <Link to = {`/story/${story._id}`} key={story._id} className='profileStories'>
                <div className='profStrWidth'>
                    <div>
                        <div className='profStrtop'>
                            <span>Published in</span>
                            <span style={{color: '#d49b00'}}>{story.category}</span>
                            <span style={{color: '#757575', fontSize: '12px'}}>Just now</span>
                        </div>
                        <div className='profstrdetail'>
                            <div className='postDetails'>
                                <div className='postText'>
                                    <h3>{story.topic}</h3>
                                    <p>{story.content}</p>
                                </div>
                                <div className='profBelow'>
                                    <div>
                                        <button>Medium</button>
                                        <span>4 min read</span>
                                    </div>
                                    <div>
                                        <i> <MdOutlineBookmarkAdd /> </i>
                                        <i> <HiOutlineLink /> </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className='postimg' src={`http://localhost:3030/uploads/${story.image}`} alt="" />
                </div>
            </Link>
        )
        )}
    </div>
  )
}

export default ProfilePosts