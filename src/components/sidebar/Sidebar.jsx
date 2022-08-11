import { useEffect } from 'react';
import { React, useState } from 'react';

import './sidebar.scss';

export const Sidebar = () => {

    const [activeLink, setActiveLink] = useState(null);
    const [moveSideBar, setMoveSideBar] = useState();

    const itemsMenu = [
        { name: 'Напутственное слово', link: '#parting-word', id: 'parting-word' },
        { name: 'Сетка', link: '#grid', id: 'grid'},
        { name: 'Типография', link: '#typography', id: 'typography' },
        { name: 'UI', link: '#UI', id: 'UI'},
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

        itemsMenu.map((item) => {
            let a = document.getElementById(item.id);
                if((a.offsetTop - 100) <= distanceScroll) {
                    setActiveLink(item.name); 
                }
         });
    };

    return (
        <div className={`sidebar ${moveSideBar ? 'sidebar_move' : ''}`}>
            <ul className="sidebar__list">
                {itemsMenu.map((item) => (
                    <li key={item.name} className="sidebar__list-item" onClick={(e) => onActiveItemMenu()}>
                        <a className={`sidebar__list-link ${activeLink === item.name ? 'active__link' : ''}`} href={item.link}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
