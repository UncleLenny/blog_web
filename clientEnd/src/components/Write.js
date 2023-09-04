import React, { useContext, useState } from 'react'
import logo from './images/mediumMainLogo.png'
import dp from './images/dpPost.png'
import { BsThreeDots } from 'react-icons/bs'
import { CiBellOn } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { BlogContext } from './dataContext/BlogContext'

function Write() {
    const [story, setStory] = useState({
        category: '',
        topic: '',
        content: '',
    });

    const [image, setImage] = useState({
        image: null
    });

    const {userInfo} = useContext(BlogContext)

    const storyInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "image") {
          let file = e.target.files[0];
          setImage({image: file})
        }
        setStory({ ...story, [name]: value });
    }

    let formData = new FormData()
    formData.append("category", story.category);
    formData.append("topic", story.topic);
    formData.append("content", story.content);
    formData.append("image", image.image)
    // formData.append("accountId", userInfo._id)

    async function createStory(ev) {
        ev.preventDefault();
        
        await fetch ('http://localhost:3030/api/createStory', {
            method: 'POST',
            enctype: "multipart/form-data",
            body: formData,
            credentials: "include"
            // headers: {'Content-Type':'application/json'},
        })          
        .then((resp) => resp.json())
        .then((data) => {
          alert("Story has been Created");
          console.log(data);
        });

        console.log(userInfo)
    }

  return (
    <form action="" onSubmit={createStory}>
    <div>
        {/* WRITE NAV BAR */}
        <div className='WriteNavFixed'>    
            <div className='WriteNav'>
                <div className='writeNavLeft'>
                    <Link to='/'>
                        <div className='writeNavLogo'>
                            <img src={logo} alt="" />
                        </div>
                    </Link>
                    <div >
                        <span>Drafts</span>
                    </div>
                </div>
                <div className='writeNavRight'>
                    <button onClick={createStory}>Publish</button>
                    <i> <BsThreeDots className='writeicons' /> </i>
                    <i> <CiBellOn className='writeicons' /> </i>
                    <img src={dp} alt="" />
                </div>
            </div>
        </div>
        {/* END OF WRITE NAV BAR */}

        <div className='writeBody'>
                <div className='mainWrite'>
                    <select name="category" className='category' placeholder='Category' id="" onChange={ev => storyInput(ev)}>
                        <option value="">Categories</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Sport">Sport</option>
                        <option value="Religion">Religion</option>
                    </select>
                    <div name='content'>
                        <div>
                            <textarea className='writeTopic' name="topic" placeholder="Title" cols="30" rows="10"  onChange={ev => storyInput(ev)}>
                                
                            </textarea>
                        </div>

                        <input type="file" name="image" id=""  onChange={ev => storyInput(ev)} />

                        <textarea className='writeStory' name="content" placeholder="Write your story" cols="30" rows="10"  onChange={ev => storyInput(ev)}></textarea>
                    </div>
                </div>
        </div>
    </div>
    </form>
  )
}

export default Write