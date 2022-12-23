import React from "react";
import MyPosts from "./MyPosts/Post/MyPosts";
import Post from './MyPosts/Post/Post'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {
    PostsMessage: { id: number; message: string; likeCount: number; }[],
}
const Profile = (props: ProfilePropsType) => {
    let postData = props.PostsMessage.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    return (
        <div>
            <ProfileInfo/>
            <MyPosts holder='Send message...'/>
            {postData}
        </div>
    )
}
export default Profile