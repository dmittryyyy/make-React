import React from 'react';

import './menu.scss';

export const Menu = () => {
    return (
        <div className="menu">
            <div className="menu__wrapper">
                <div className="menu__header">
                    <img className="menu__header-logo" src="img/header/logo.png" alt="Логотип" />
                    <p className="menu__header-text">Задание выполнил</p>
                </div>
                <div className="menu__about">
                    <div className="about__title">
                        <div className="about__title-surname">Болобченко</div>
                        <div className="about__title-name">Дмитрий Евгеньевич</div>
                    </div>

                    <div className="about__description">
                        <p className="about__description-text">Кандидат на должность Frontend разработчика</p>
                    </div>

                    <div className="about__number">
                        <p className="about__number-text">+7 (961) 720-80-74</p>
                    </div>
                </div>
                <div className="menu__footer">
                    <img className="menu__footer-img" src="img/footer/iconTel.svg" alt="Иконка Telegram" />
                    <a className="menu__footer-link" href="https://t.me/dmittryyyyy" target="_blank">Ссылка на соцсеть/мессенджер</a>
                </div>
            </div>
            <div className="menu__close">
                <img className="menu__close-img" src="img/menu/ico_menu_close.svg" alt="крестик" />
                <span className="menu__close-span">X</span>
            </div>
        </div>
    )
}
