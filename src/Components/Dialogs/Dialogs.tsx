import React from "react";
import s from './Dialogs.module.css'
import DialogFriends from "./DialogFriends/DialogFriends";
import Message from "./DialogMessages/Message";

type DialogsPropsType = {}


const Dialogs = (props: DialogsPropsType) => {

    let messages = [
        {message: 'Hello!'},
        {message: 'How Are you?'},
        {message: 'What a day!'},
        {message: 'hahahha lol!'},
        {message: 'Go home!'},
        {message: 'How match it cost?'},
        {message: 'Yo!'},
    ]

    let dialogs = [
        {id: '1', name: 'Roman'},
        {id: '2', name: 'Lera'},
        {id: '3', name: 'Dimych'},
        {id: '4', name: 'Sergey'},
        {id: '5', name: 'Pavel'},
        {id: '6', name: 'Andrew'},
    ]


    let dialogsFriends = dialogs.map(d => <DialogFriends name={d.name} id={d.id}/>)
    let messagesList = messages.map(m => <Message message={m.message}/>)

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