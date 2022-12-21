import s from "./DialogItem.module.css";
import ava4 from "../../assets/ava4.png";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string | number | symbol,
    id: string,
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <img className={s.avatar} src={ava4} alt=""/>
            <NavLink className={s.dialog_name} activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem