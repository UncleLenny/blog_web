import React, { useState } from 'react'
import SideNav from './SideNav';
import Nav from './Nav';

function NewStory() {
    const [adStory, setAdStory] = useState({
        accountId:'',
        category: '',
        topic: '',
        content: '',
    });

    const [image, setImage] = useState({
        image: null
    });

    const storyInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === "image") {
          let file = e.target.files[0];
          setImage({image: file})
        }
        setAdStory({ ...adStory, [name]: value });
    }

    let formData = new FormData()
        formData.append("category", adStory.category);
        formData.append("topic", adStory.topic);
        formData.append("content", adStory.content);
        formData.append("image", image.image)
        formData.append("accountId", adStory.accountId)

        async function createStory(ev) {
            ev.preventDefault();
            
            await fetch ('http://localhost:3030/api/createStory', {
                method: 'POST',
                enctype: "multipart/form-data",
                body: formData,
                credentials: "include",
                // headers: {'Content-Type':'application/json'},
            })          
            .then((resp) => resp.json())
            .then((data) => {
            alert("Story has been Created");
            console.log(data);
            });
        }
    return (
        <div>
            <Nav />
    
            <div className="pagedisplay">
                <div className="sideNav">
                    <SideNav />
                </div>
            </div>
            <div className='newStory leftside'>
                <h1>Create a New Story</h1>
                <form className='form' method='post' onSubmit={createStory}>
                    <div class="form-group">
                        <label for="">AdminID:</label><span></span>
                        <input type="text" name="accountId" class="inputs" onChange={ev => storyInput(ev)} required/>
                    </div>
                    <div class="form-group">
                        <label for="">Category of the Story:</label><span></span>
                        <select name="category" className='category block' placeholder='Category' id="" onChange={ev => storyInput(ev)}>
                            <option value="">Categories</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Sport">Sport</option>
                            <option value="Religion">Religion</option>
                        </select>  
                    </div>
                    <div class="form-group">
                        <label for="">Topic of the Story:</label><span></span>
                        <input type="text" name="topic" class="inputs" onChange={ev => storyInput(ev)} required/>
                    </div>
                    <div class="form-group">
                        <label for="">Body of the Story:</label><span></span>
                        <input type="text" name="content" class="inputs" onChange={ev => storyInput(ev)} required/>
                    </div>
                    <div class="form-group">
                        <label for="">Image:</label><span></span>
                        <input type="file" name="image" class="inputs" onChange={ev => storyInput(ev)} required/>
                    </div>
                    <div class="form-group">
                        <button class="form-btn block">
                            Post Story
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewStory