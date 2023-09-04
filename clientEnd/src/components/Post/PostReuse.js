import React, { useEffect, useState } from 'react'
import { BsTwitter, BsFacebook, BsLinkedin, BsEnvelopePlus } from 'react-icons/bs'
import { HiOutlineLink } from 'react-icons/hi'
import { MdOutlineBookmarkAdd } from 'react-icons/md'
import PostRelateuse from './PostRelateuse'
import { Link, useParams } from 'react-router-dom'


function PostReuse({onGetPostId}) {
    const { id } = useParams();
    const [story, setStory] = useState({});
    const [data, setData] = useState({})
  
    const getStory = (id) => {
      fetch(`http://localhost:3030/api/story/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
          setStory(data.data);
          onGetPostId(data.data._id)
        });
    };
    console.log(data)
    console.log(id)

  
    useEffect(() => {
      id && getStory(id);
    }, [id])
    console.log(story)

  return (
 <div>
    <div className='postFlex' key={story.id}>
        <div className='postMain'>
            <div className='PostLeftSide'>
                <div className='PostTOP'>
                    <div className='toptop'>
                        <img src={`http://localhost:3030/uploads/${story.accountId}`} alt="" />
                        <div>
                            <span className='greytext'>Published in</span>
                            <span>{story.category}</span> 
                            <span className='greytext'>by</span> 
                            <span className='authr'>{story.accountId}</span>
                        </div>
                    </div>

                    <div className='postMaintop'>
                        <div className='postMaintopLeft'>
                            <img src='' alt="" />
                            <div className='PMTLtext'>
                                <p>{story.accountId}</p> <span className='listen bold'>Listen</span>
                            </div>
                        </div>
                        <div className='postMaintopRight'>
                            <div className='socials'>
                                <i> <BsTwitter /> </i>
                                <i> <BsFacebook /> </i>
                                <i> <BsLinkedin /> </i>
                                <i> <HiOutlineLink /> </i>
                            </div>
                            <div className='socials'>
                                <i> <MdOutlineBookmarkAdd /> </i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='storyImage'>
                    <img src={`http://localhost:3030/uploads/${story.image}`} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore ex, in eaque, minima impedit enim quae veritatis dolor possimus porro blanditiis praesentium nisi magni cupiditate veniam sapiente dolorum accusamus? Modi.</p>
                </div>

                <div className='storyTopics'>
                    <h2>{story.topic}</h2>
                    <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                </div>

                <div className='storyMainBody'>
                    <span>{story.content}</span>
                </div>
            </div>

            <div className='PostRightPad'>
                <div className='PostRight'>
                    <div className='PRtop'>
                        <img src='' alt="" />
                        <span className='postAcct'> {story.accountId} </span>
                        <Link to='/profile'>
                            <span className='followers'> xxx Followers </span>
                        </Link>
                        <span className='postCap'> xxxxx </span>

                        <div className='PRbtns'>
                            <button>Follow</button>
                            <button className='env'> <BsEnvelopePlus /> </button>
                        </div>
                    </div>
                    <div className='PRmain'>
                        <span>More from Medium</span>
                        <div>
                            <PostRelateuse />
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
    </div>
 </div>
  )
}

export default PostReuse