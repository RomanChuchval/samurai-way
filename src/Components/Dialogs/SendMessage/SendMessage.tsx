import React from 'react';
import s from './SendMessage.module.css'
const SendMessage = () => {
    return (
        <form className={s.sendMessage_form}>
            <textarea className={s.textarea} name="" id=""></textarea>
            <button className={s.sendBtn}>
                Send message
            </button>
        </form>
    );
};

export default SendMessage;