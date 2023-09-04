import React, { useCallback, useContext, useEffect, useState } from 'react'
import PostNav from './PostNav'
import PostReuse from './PostReuse'
import { GrClose, GrLike } from 'react-icons/gr'
import CommentReuse from './CommentReuse'
import { BlogContext } from '../dataContext/BlogContext'
import { FaComment, FaRegComment, FaRegGem } from 'react-icons/fa'
import { SlLike } from 'react-icons/sl';
import { useParams } from 'react-router-dom';

function SinglePost() {
  const [openComment, setOpenComment] = useState(false);
  const [postId, setPostId] = useState(null)

  const openCommentHandler = () => {
    setOpenComment(true);
  };

  const closeCommentHandler = () => {
    setOpenComment(false);
  };

  const submitHandler = () => {
    setOpenComment(false);
  };

  // COMMENT 
  const [comment, setComment] = useState({
    comment: '',
  });

  // const {storyInfo} = useContext(BlogContext)

  const commentInput = (e) => {
    let name = e.target.name; 
    let value = e.target.value;
    setComment({ ...comment, [name]: value });
  }

  const getPostId = (id) =>{
    setPostId(id)
    console.log("coming from single post :" + id)
  }

  async function createComment(ev) {
    const commentInput = {
      comment: comment.comment,
      storyId: postId
    }

    ev.preventDefault();
    await fetch('http://localhost:3030/api/createComment', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(commentInput),
      credentials: "include"
    })
    .then((resp) => resp.json())
    .then((data) => {
      alert("Comment has been Created");
      console.log(data);
    });

  }


  // likeeeee section
  const [likesCount, setLikesCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const {id} = useParams();
  const targetStoryId = id; 

  const likeStoryHandler = async () => {
    const likeInput = {
      like: true,
    };
  
    fetch(`http://localhost:3030/api/story/${targetStoryId}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(likeInput),
      credentials: "include",
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      setLikesCount(data.likesCount); // Update likes count
      alert("Story Liked");
    })
    .catch(error => {
      console.error("Error liking the story:", error);
      alert("Failed to Like Story");
    });
  };
  
  
 
  // const getLikes = useCallback(
  //   (myStories) => {
  //     fetch(`http://localhost:3030/api/story/${story._id}/likes`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setCount(data.data.length);
  //       setAllLikes(data.data);
  //     });
  //   }, [myStories]
  // );

  // let userLiked; 
  // const checkLike = (likes)=>{
  //   userLiked = likes.filter((like) => like.user_id === profile._id);
  //   if (userLiked.length >= 1){
  //     console.log('unliked')
  //     setlike(true)
  //   }
  // }

  useEffect(() => {
    return () => {
      localStorage.removeItem('likesCount');
    };
  }, []);


  const commentSection = (
    <>
      <div className="backdropComment" onClick={closeCommentHandler}></div>
      <div className='commentModal'>
        <div className='CommentSection'>
          <div className='commentHead'>
            <div className='commentClose'>
              <h3>Responses(100)</h3>
              <span onClick={closeCommentHandler} ><GrClose /></span>
            </div>

            <form className='commentBox' onSubmit={createComment}>
              <textarea  name="comment" id="" cols="30" rows="10" placeholder='What are your thoughts?' onChange={ev => commentInput(ev)}></textarea>
              <button>Respond</button>
            </form>
          </div>

          <div className='commentScroll'>
            <CommentReuse />
          </div>
        </div>
      </div>
    </>
  )

  return (
    <div>
        <PostNav />

        <div>
            <PostReuse onGetPostId={getPostId} />
        </div>

        <div>
        <p onClick={likeStoryHandler}><SlLike/> Like Story ({likesCount})</p>
          <p onClick={openCommentHandler} > <FaRegComment /> Comment</p>
        </div>

        {openComment && commentSection}
    </div>
  )
}

export default SinglePost