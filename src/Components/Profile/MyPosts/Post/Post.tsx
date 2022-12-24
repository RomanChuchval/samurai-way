import s from "./Post.module.css";
import avatar from "../../../../assets/2022-12-18 16.jpg";
import React from "react";

type PostPropsType = {
    id: number,
    message: string,
    likeCount: number,
}
const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={`${s.post} ${s.post1}`}>
                <div className={s.post_ava}>
                    <img className={s.post_ava} src={avatar} alt=""/>
                </div>
                <div className={s.item}>
                    {props.message}
                </div>
                <div className={s.likes}>
                    Likes:{props.likeCount}
                </div>
            </div>
        </div>
    )
}

export default Post