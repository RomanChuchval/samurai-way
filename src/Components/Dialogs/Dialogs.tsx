import React from "react";
import s from './Dialogs.module.css'
import DialogFriends from "./DialogFriends/DialogFriends";
import Message from "./DialogMessages/Message";
import SendMessage from "./SendMessage/SendMessage";

type DialogsPropsType = {
    data: {
        dialogs: { id: string, name: string }[],
        messages: { message: string }[],
    }
}


const Dialogs = (props: DialogsPropsType) => {
    let dialogsFriends = props.data.dialogs.map(d => <DialogFriends name={d.name} id={d.id}/>)
    let messagesList = props.data.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_friends}>
                {dialogsFriends}
            </div>
            <div className={s.messages}>
                <SendMessage />
                {messagesList}
            </div>
        </div>
    )
}

export default Dialogs;