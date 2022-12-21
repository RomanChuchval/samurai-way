import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem";
import Message from "./Message";

type DialogsPropsType = {}


const Dialogs = (props: DialogsPropsType) => {

    let dialogs = [
        {id: '1', name: 'Roman'},
        {id: '2', name: 'Lera'},
        {id: '3', name: 'Dimych'},
        {id: '4', name: 'Sergey'},
        {id: '5', name: 'Pavel'},
        {id: '6', name: 'Andrew'},
    ]

    let messages = [
        {message: 'Hello!'},
        {message: 'How Are you?'},
        {message: 'What a day!'},
        {message: 'hahahha lol!'},
        {message: 'Go home!'},
        {message: 'How match it cost?'},
        {message: 'Yo!'},
    ]
    let dialogsData = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )
    let messagesData = messages.map( m => <Message message={m.message}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                { dialogsData }
            </div>
            <div className={s.messages}>
                { messagesData }
            </div>
        </div>
    )
}

export default Dialogs;