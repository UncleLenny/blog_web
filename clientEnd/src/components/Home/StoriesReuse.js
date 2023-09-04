import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineBookmarkAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { BlogContext } from '../dataContext/BlogContext';
// import { BlogContext } from '../dataContext/BlogContext';

function StoriesReuse() {
    const [data, setData] = useState([])
    const {userInfo} = useContext(BlogContext)

    const fetchStory = async () => {
        console.log("did this run?")
        const resp = await fetch(`http://localhost:3030/api/stories`);
        const data = await resp.json();
        setData(data.data);

    }
    console.log(data)
    
    useEffect(() => {
        // if(stories){
        //     console.log(stories)
        // }
        fetchStory();
    }, [])

  return (
    <div>
        {data.map((story) => (
            <Link to={`/story/${story._id}`} key={story._id} className='postDecor'>
                <div className='news'>
                    <div className='newsText'>
                        <div className='newsTop'>
                            <img src={`http://localhost:3030/uploads/${story.accountId.profilePic}`} alt="" />
                            <span>{story.accountId.username}</span> <span className='in'>in</span>
                            <button>{story.category}</button>
                        </div>
                        <div className='topic'>
                            <h2>{story.topic}</h2>
                        </div>
                        <div className='dntcat'>
                            <div>
                                <p className='shorten'>{story.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className='picnIcon'>
                        <div className='newsPic'>
                            <img src={`http://localhost:3030/uploads/${story.image}`} alt="" />
                        </div> 
                        <div className='bookmark'>
                            <i> <MdOutlineBookmarkAdd /> </i>
                        </div>
                    </div>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default StoriesReuse