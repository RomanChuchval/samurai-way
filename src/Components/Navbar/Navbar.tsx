import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


type NavbarPropsType = {
    data: { friends: { name: string }[], }
}
const Navbar = (props: NavbarPropsType) => {

    let friendsNavList = props.data.friends.map(f => <Friends name={f.name}/>)
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={s.nav_friends}>
                <div className={s.nav_friends_heading}>
                    <p>Friends</p>
                </div>
                {friendsNavList}
            </div>
        </nav>
    )
}

export default Navbar