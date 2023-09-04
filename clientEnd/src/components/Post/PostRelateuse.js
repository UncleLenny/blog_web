import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function PostRelateuse() {
    const [data, setData] = useState([]);

    const fetchTrend = async () => {
        const res = await fetch ('http://localhost:3030/api/stories');
        const data = await res.json();
        setData(data.data)
    }

    useEffect(() => {
        fetchTrend();
    }, [])

  return (
    <div>
        {data.map((story) => (
            <Link to={`/story/${story._id}`} key={story._id} className='postDecor'>
                <div className='newsPR'>
                    <div className='newsTextPR'>
                        <div className='newsTopPR'>
                            <img src={`http://localhost:3030/uploads/${story.accountId.profilePic}`} alt="" />
                            <p className='PRauthor'>{story._id}</p>
                            <p className='in'>in</p>
                            <p className='PRtime'>{story.category}</p>
                        </div>
                        <div className='topicPR'>
                            <h2>{story.topic}</h2>
                        </div>
                    </div>
                    <div className='newsPicPR'>
                        <img src={`http://localhost:3030/uploads/${story.image}`} alt="" />
                    </div>
                </div>
            </Link>
        ))}
    </div>
  )
}

export default PostRelateuse