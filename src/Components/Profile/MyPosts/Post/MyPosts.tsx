import s from "../Post/MyPosts.module.css";
import React from "react";


type MyPostsPropsType = {
    addPost: (postMessage: string) => void;
}
const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.useRef<HTMLTextAreaElement>(null)
    let addPost = () => {
        if (newPostElement.current !== null) {
            props.addPost(newPostElement.current.value)
        }
    }

    return (
        <div className={s.posts_section}>
            <div className={s.posts_heading}>
                My Posts
            </div>
            <div className={s.new_post}>
                <div className={s.new_post_heading}>
                    New Post
                </div>
                <div className={s.new_post_input}>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={addPost} className={s.send_btn}>Add post</button>
            </div>
        </div>
    )
}

export default MyPosts