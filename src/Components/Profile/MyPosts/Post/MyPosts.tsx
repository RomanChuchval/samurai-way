import s from "../Post/MyPosts.module.css";
import React from "react";


type MyPostsPropsType = {
}
const MyPosts = (props:MyPostsPropsType) => {
    let newPostElement = React.useRef<HTMLTextAreaElement>(null)
    let addPost =  () => {
        if (newPostElement.current !== null) {
            alert(newPostElement.current.value)
        }
    }

    return(
        <div className={s.posts_section}>
            <div className={s.posts_heading}>
                My Posts
            </div>
            <div className={s.new_post}>
                <div className={s.new_post_heading}>
                    New Post
                </div>
                <div className={s.new_post_input}>
                    {/*<form  action="src/Components#">*/}
                        <textarea ref={newPostElement}></textarea>
                        {/*<input className={s.message_input} type="text" placeholder={props.holder}/>*/}
                    {/*</form>*/}
                </div>
                <button onClick={addPost}  className={s.send_btn}>Send</button>
            </div>
        </div>
    )
}

export default MyPosts