import React from 'react';

import logo from '../../images/header/logo.svg';
import social from '../../images/menu/iconTel.svg';

import './menu.scss';

export const Menu = ({ hideMenu }) => {
    return (
        <div className="menu">
            <div className="wrapper">
                <div className="wrapper__content">
                    <div className="menu__header">
                        <div className="menu__logo">
                            <img className="menu__logo-img" src={logo} alt="Логотип" />
                            <p className="menu__logo-text">Задание выполнил</p>
                        </div>
                        <div className="menu__close" onClick={(e) => hideMenu()}>
                            <div className="menu__close-img"><svg width='24px' height='24px'
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4142 10L19.1924 2.22184L17.7782 0.807624L10 8.5858L2.22183 0.807624L0.807612 2.22184L8.58579 10L0.807612 17.7782L2.22183 19.1924L10 11.4142L17.7782 19.1924L19.1924 17.7782L11.4142 10Z" />
                            </svg>
                            </div>
                        </div>
                    </div>
                    <div className="menu__about">
                        <h2 className='menu__about-name'>Болобченко <br /> Дмитрий Евгеньевич</h2>
                        <p className='menu__about-text'>Кандидат на позицию junior frontend developer</p>
                        <a href="tel:+79617208074" className="menu__about-number">+7 (961) 720-80-74</a>
                    </div>
                    <div className="menu__footer">
                        <img className="menu__footer-img" src={social} alt="Иконка Telegram" />
                        <a className="menu__footer-link" href="https://t.me/dmittryyyyy" targethtml="_blank">Ссылка на соцсеть/мессенджер</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
