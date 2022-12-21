import s from "../Post/MyPosts.module.css";
import React from "react";


type MyPostsPropsType = {
    holder: string;
}
const MyPosts = (props:MyPostsPropsType) => {
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
                    <form action="src/Components#">
                        <input className={s.message_input} type="text" placeholder={props.holder}/>
                    </form>
                </div>
                <button className={s.send_btn}>Send</button>
            </div>
        </div>
    )
}

export default MyPosts