import React from "react";
import MyPosts from "./MyPosts/Post/MyPosts";
import Post from './MyPosts/Post/Post'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {
    /*PostsMessage: { id: number; message: string; likeCount: number; }[],*/
    data: { posts: { id: number, message: string, likeCount: number }[] },
    addPost: (postMessage: string) => void;
}
const Profile = (props: ProfilePropsType) => {
    let postData = props.data.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/>)
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost}/>
            {postData}
        </div>
    )
}
export default Profile