import React from 'react';
import { useState } from 'react';

import './dropDown.scss';

export const DropDown = () => {

    const optionsSelect = ['Первый стул', 'Второй стул', 'Выбранный пункт', 'Теорема Эскобара']

    const [selected, setSelected] = useState('');
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="selects">
            <div className="selects__item">
                <div className="dropDown">
                    <label className={`dropDown__btn ${isActive ? 'showDropDown' : ''}`} onClick={(e) => setIsActive(!isActive)}>
                        <div className='dropDown__btn-text'>{!selected ? 'Выберете что нибудь' : selected}</div>
                    </label>

                    {isActive && (
                        <label className="dropDown__content">
                            {optionsSelect.map((item) => (
                                <div key={item} className="dropDown__item" onClick={(e) => {
                                    setSelected(item); setIsActive(false)
                                }}>
                                    {item}
                                </div>
                            ))}
                        </label>
                    )}
                </div>
            </div>
            <div className="selects__item">
                <div className="dropDown">
                    <label className='dropDown__btn'>
                        <div className='dropDown__btn-text'>Выберете что нибудь</div>
                    </label>
                </div>
            </div>
            <div className="selects__item">
                <div className="dropDown">
                    <label className="dropDown__btn showDropDown">
                        <div className='dropDown__btn-text'>Выбранный пункт</div>
                    </label>

                        <label className="dropDown__content">
                            {optionsSelect.map((item) => (
                                <div key={item} className="dropDown__item" onClick={(e) => {
                                    setSelected(item); setIsActive(false)
                                }}>
                                    {item}
                                </div>
                            ))}
                        </label>
                </div>
            </div>
        </div>
    )
}
