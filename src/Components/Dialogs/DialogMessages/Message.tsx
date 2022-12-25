import s from "./Message.module.css";
import React from "react";
import ava from './../../../assets/ava4.png'

type MessagePropsType = {
    message: string,
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message_item}>
            <img className={s.message_ava} src={ava} alt=""/>
            <div className={s.message}>{props.message}</div>
        </div>)
}

export default Message