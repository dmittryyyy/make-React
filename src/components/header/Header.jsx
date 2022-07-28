import React from 'react';

import logo from "../../images/header/logo.svg"

import './header.scss';

export const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="header__left">
                    <img src={logo} alt="Логотип" className="header__left-logo" />
                    <div className="header__name">
                        <div className="header__name-surname">Болобченко</div>
                        <div className="header__name-patronymic">Дмитрий Евгеньевич</div>
                    </div>
                </div>

                <div className="header__menu">
                    <div className="header__menu-top"></div>
                    <div className="header__menu-bottom"></div>
                </div>
            </header>
        </>
    )
}


