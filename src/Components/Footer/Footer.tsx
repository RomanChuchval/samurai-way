import React from "react";
import s from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.copy}>Copy 2023</div>
            <div className={s.incubator}>IT-Incubator</div>
        </footer>
    )
}
export default Footer