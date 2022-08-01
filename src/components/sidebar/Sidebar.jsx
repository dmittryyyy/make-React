import { useEffect } from 'react';
import { React, useState } from 'react';

import './sidebar.scss';

export const Sidebar = () => {

    const [activeLink, setActiveLink] = useState(null);

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
        if (scrollTop == 0) {

        } else if (scrollTop <= 140) {
            setActiveLink(itemsMenu[0].name);
        } else if (scrollTop <= 2636) {
            setActiveLink(itemsMenu[1].name);
        } else if (scrollTop <= 3500) {
            setActiveLink(itemsMenu[2].name);
        } else {
            setActiveLink(itemsMenu[3].name);
        }
    };

    return (
        <div className="sidebar">
            <ul className="sidebar__list">
                {itemsMenu.map((item) => (
                    <li key={item.name} value={activeLink} className="sidebar__list-item" onClick={(e) => onActiveItemMenu(e)}>
                        <a style={activeLink === item.name ? { color: '#3D28E1' } : {}} className="sidebar__list-link" href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
