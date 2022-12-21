import s from "./Message.module.css";
import React from "react";

type MessagePropsType = {
    message: string,
}

const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default Message