import React from "react";
import s from './Dialogs.module.css'
import DialogFriends from "./DialogFriends/DialogFriends";
import Message from "./DialogMessages/Message";

type DialogsPropsType = {
    DialogsMessages: {message: string}[],
    DialogFriends: {id: string, name: string}[]
}


const Dialogs = (props: DialogsPropsType) => {



    let dialogsFriends = props.DialogFriends.map(d => <DialogFriends name={d.name} id={d.id}/>)
    let messagesList = props.DialogsMessages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_friends}>
                {dialogsFriends}
            </div>
            <div className={s.messages}>
                {messagesList}
            </div>
        </div>
    )
}

export default Dialogs;