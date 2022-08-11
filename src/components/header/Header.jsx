import React from 'react';

import logo from "../../images/header/logo.svg";

import styles from './Header.module.scss';

export const Header = ({ showMenu }) => {
    return (
        <>
            <header className={`header ${styles.header}`}>
                <div className={styles.logo}>
                    <img src={logo} alt="Логотип" className={styles.logo_img} />
                    <div className={styles.name}>
                        <div className={styles.surname}>Болобченко</div>
                        <span className={styles.patronymic}>Дмитрий Евгеньевич</span>
                    </div>
                </div>

                <div className={styles.menu} onClick={showMenu}>
                    <div className={styles.menu_top}></div>
                    <div className={styles.menu_bottom}></div>
                </div>
            </header>
        </>
    )
}


