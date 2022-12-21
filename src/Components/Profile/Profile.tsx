import React from "react";
import avatar from '../../assets/2022-12-18 16.jpg'
import main_background from '../../assets/back.jpeg'
import s from './Profile.module.css';
import MyPosts from "./MyPosts/Post/MyPosts";
import Post from './MyPosts/Post/Post'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {

    let posts = [
        {id: 1, message: 'Hello!', likeCount: 12},
        {id: 2, message: 'How Are you?', likeCount: 11},
        {id: 3, message: 'What a day!', likeCount: 23},
        {id: 4, message: 'hahahha lol!', likeCount: 43},
        {id: 5, message: 'Go home!', likeCount: 13},
        {id: 6, message: 'How match it cost?', likeCount: 4},
        {id: 7, message: 'Yo!', likeCount: 123},
    ]
    let postData = posts.map( p => <Post message={p.message} likeCount={p.likeCount} id={p.id} /> )
    return (
        <div>
            <ProfileInfo />
            <MyPosts holder='Send message...'/>
            { postData }
        </div>
    )
}
export default Profile