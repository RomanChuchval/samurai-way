import React from 'react';
import s from "./Friends.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../../assets/ava3.png";

type FriendsPropsType = {
    name: string;
}

const Friends = (props:FriendsPropsType) => {
    return (
        <div className={s.nav_friends_item}>
                <NavLink className={s.nav_friends_name} to={'/'}>{props.name}</NavLink>
                <img className={s.nav_friends_avatar} src={avatar} alt="ava"/>
        </div>
    );
};

export default Friends;