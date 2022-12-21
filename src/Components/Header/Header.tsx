import React from "react";
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://i0.wp.com/www.blakefren.ch/wp-content/uploads/2019/01/rocket-logo-transparent-red.png?fit=1564%2C1564&ssl=1'
                alt='qwer'/>
            <div>
                Samurai Way
            </div>
        </header>

    )
}

export default Header