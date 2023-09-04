import React, { useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaAirbnb, FaRegComment } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

function CommentReuse() {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [filteredComments, setFilteredComments] = useState([]);
    const targetStoryId = id; // Replace with the actual storyId

    console.log(id)

    const fetchComments = async () => {
        const res = await fetch('http://localhost:3030/api/comments');
        const jsonData = await res.json();
        setData(jsonData.data);
    };

    useEffect(() => {
        fetchComments();
    }, []);

    useEffect(() => {
        // Filter comments based on the targetStoryId
        const filtered = data.filter(comment => comment.storyId === targetStoryId);
        setFilteredComments(filtered);
    }, [data, targetStoryId]);

    return (
        <div>
            {filteredComments.map(comment => (
                <div className='commentReuse' key={comment._id}>
                    {/* Rendering code for each comment */}
                    <div className='commentReuseHead'>
                        <img src="" alt="" />
                        <div className='nameTime'>
                            <span>UserName</span>
                            <span>4 months ago</span>
                        </div>
                        <span>{BsThreeDots}</span>
                    </div>
                    <div className='commentBody'>
                        <span>
                            {comment.comment}
                        </span>
                    </div>
                    <div className='commentRxn'>
                        <span> {FaAirbnb} 60 </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CommentReuse;
