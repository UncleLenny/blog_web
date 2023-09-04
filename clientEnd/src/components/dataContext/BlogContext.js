import React, { createContext, useEffect, useState } from 'react'

export const BlogContext = createContext({});

export function BlogContextProvider({children}) {
    const [userInfo, setUserInfo] = useState({});
    // const [storyInfo, setStoryInfo] = useState({
    //     accountId: "",
    //     id: "",
    //     comment: "",
    //     topic: "",
    //     category: "",
    // });
    const [userProfile, setUserProfile] = useState({
        _id: "",
        username: "",
        fullname: "",
        phone: "",
        email: "",
        profilePic: "",
    });

    const getProfile = () => {
        fetch('http://localhost:3030/api/profile', {
            credentials:"include",
        }).then((res) => {
            res.json().then((userInfo) => {
                setUserInfo({
                    id: userInfo._id,
                    username: userInfo.username,
                    email: userInfo.email,
                    image: userInfo.profilePic
                });
            });
        });
    }
    console.log(userInfo)

    // const getPost = () => {
    //     fetch("http://localhost:3030/api/singleStory", {})
    //     .then((res) => {
    //         res.json().then((storyInfo) => {
    //             setStoryInfo({
    //                 userId: storyInfo.accountId,
    //                 storyId:storyInfo._id,
    //                 comment: storyInfo.comment,
    //             });
    //         });
    //     });
    // }
    // console.log(storyInfo)

    // const [post, setPost] = useState({
    //     accountId: "",
    //     id: "",
    //     comment: "",
    //     topic: "",
    //     category: "",
    // });

    useEffect(() => {
        getProfile();
        // getPost();
    }, []);

    
    return (
        <BlogContext.Provider value={{
            userInfo, 
            setUserInfo, 
            // storyInfo,
            // setStoryInfo,
            userProfile, 
            setUserProfile
        }}>
            {children}
        </BlogContext.Provider> 
    )
}