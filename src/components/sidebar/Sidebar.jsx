import { useEffect } from 'react';
import { React, useState } from 'react';

import './sidebar.scss';

export const Sidebar = () => {

    const [activeLink, setActiveLink] = useState(null);
    const [moveSideBar, setMoveSideBar] = useState();

    const itemsMenu = [
        { name: 'Напутственное слово', link: '#parting-word' },
        { name: 'Сетка', link: '#grid' },
        { name: 'Типография', link: '#typography' },
        { name: 'UI', link: '#UI' },
    ];

    useEffect(() => {
        window.addEventListener('scroll', onActiveItemMenu);
    }, []);

    const onActiveItemMenu = (e) => {
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop === 0) {
            setMoveSideBar(false);
        } else if (scrollTop > 0) {
            setMoveSideBar(true);
            if (scrollTop <= 140) {
                setActiveLink(itemsMenu[0].name);
            } else if (scrollTop <= 2636) {
                setActiveLink(itemsMenu[1].name);
            } else if (scrollTop <= 3500) {
                setActiveLink(itemsMenu[2].name);
            } else {
                setActiveLink(itemsMenu[3].name);
            }
        }
    }

    return (
        <div className={`sidebar ${moveSideBar ? 'sidebar_move' : ''}`}>
            <ul className="sidebar__list">
                {itemsMenu.map((item) => (
                    <li key={item.name} className="sidebar__list-item" onClick={(e) => onActiveItemMenu(e)}>
                        <a className={`sidebar__list-link ${activeLink === item.name ? 'active__link' : ''}`} href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
