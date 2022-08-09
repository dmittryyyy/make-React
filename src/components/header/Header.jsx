import React from 'react';

import logo from "../../images/header/logo.svg"

import './header.scss';

export const Header = ({ showMenu }) => {

    return (
        <>
            <header className='header'>
                <div className="header__left">
                    <img src={logo} alt="Логотип" className="header__left-logo" />
                    <div className="header__name">
                        <div className="header__name-surname">Болобченко</div>
                        <span className="header__name-patronymic">Дмитрий Евгеньевич</span>
                    </div>
                </div>

                <div className="header__menu" onClick={showMenu}>
                    <div className="header__menu-top"></div>
                    <div className="header__menu-bottom"></div>
                </div>
            </header>
        </>
    )
}


