import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import ava1 from '../../assets/ava1.avif'
import myAva from '../../assets/2022-12-18 16.jpg'
import ava2 from '../../assets/ava2.avif'
import ava3 from '../../assets/ava3.png'
import ava4 from '../../assets/ava4.png'
import nord from '../../assets/nord.jpeg'

type DialogsPropsType = {}


const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                <div className={`${s.dialog} ${s.active}`}>
                    <img className={s.avatar} src={ava4} alt=""/>
                    <NavLink className={s.dialog_name} activeClassName={s.active} to='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <img className={s.avatar} src={ava3} alt=""/>
                    <NavLink className={s.dialog_name} activeClassName={s.active} to='/dialogs/2'>Lera</NavLink>
                </div>
                <div className={s.dialog}>
                    <img className={s.avatar} src={ava2} alt=""/>
                    <NavLink className={s.dialog_name} activeClassName={s.active} to='/dialogs/3'>Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <img className={s.avatar} src={ava1} alt=""/>
                    <NavLink className={s.dialog_name} activeClassName={s.active} to='/dialogs/4'>Sergey</NavLink>
                </div>
                <div className={s.dialog}>
                    <img className={s.avatar} src={nord} alt=""/>
                    <NavLink className={s.dialog_name} activeClassName={s.active} to='/dialogs/5'>Nord</NavLink>
                </div>
                <div className={s.dialog}>
                    <img className={s.avatar} src={ava2} alt=""/>
                    <NavLink className={s.dialog_name} activeClassName={s.active} to='/dialogs/6'>Oleg</NavLink>
                </div>
                <div className={s.dialog}>
                    <img className={s.avatar} src={ava1} alt=""/>
                    <NavLink className={s.dialog_name} activeClassName={s.active} to='/dialogs/7'>Lobster</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hey!
                </div>
                <div className={s.message}>
                    How are you today?
                </div>
                <div className={s.message}>
                    Do you learn TypeScript?
                </div>
                <div className={s.message}>
                    Yep!
                </div>
            </div>
        </div>

    )
}

export default Dialogs;