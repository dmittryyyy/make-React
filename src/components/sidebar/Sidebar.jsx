import React from 'react';

import './sidebar.scss';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__list">
                <ul>
                    <li className="sidebar__list-item"><a className="sidebar__list-link" href="#parting-word">Напутственное слово</a></li>
                    <li className="sidebar__list-item"><a className="sidebar__list-link" href="#grid">Сетка</a></li>
                    <li className="sidebar__list-item"><a className="sidebar__list-link" href="#typography">Типографика</a></li>
                    <li className="sidebar__list-item"><a className="sidebar__list-link" href="#UI">UI</a></li>
                </ul>
            </div>
        </div>
    )
}
