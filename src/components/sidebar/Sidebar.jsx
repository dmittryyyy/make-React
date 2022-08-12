import { useEffect } from 'react';
import { React, useState } from 'react';

import './sidebar.scss';

export const Sidebar = ({ listContent }) => {

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

    const onActiveItemMenu = () => {
        let distanceScroll = window.scrollY;

        if (distanceScroll === 0) {
            setMoveSideBar(false);
        } else {
            setMoveSideBar(true);
        }

        const sectionsContent = listContent.current.children;

        for (let i = 0; i < sectionsContent.length; i++) {
            if ((sectionsContent[i].offsetTop - 100) <= distanceScroll) {
                setActiveLink(`${'#' + sectionsContent[i].id}`);
            }
        };
    };

    return (
        <div className={`sidebar ${moveSideBar ? 'sidebar_move' : ''}`}>
            <ul className="sidebar__list">
                {itemsMenu.map((item) => (
                    <li key={item.name} className="sidebar__list-item" onClick={onActiveItemMenu}>
                        <a className={`sidebar__list-link ${activeLink === item.link ? 'active__link' : ''}`} href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
