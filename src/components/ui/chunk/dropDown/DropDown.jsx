import { React, useState } from 'react';

import './dropDown.scss';

export const DropDown = () => {

    const [selected, setSelected] = useState('');
    const [isActive, setIsActive] = useState(false);

    const optionsSelect = ['Первый стул', 'Второй стул', 'Выбранный пункт', 'Теорема Эскобара'];

    const toggleSelectItem = (item) => {
        setSelected(item);
        setIsActive(false);
    }

    return (
        <div className="selects">

            <div className="selects__item">
                <div className={`dropDown ${isActive ? 'showDropDown' : ''}`}>
                    <label className='dropDown__btn' onClick={(e) => setIsActive(!isActive)}>
                        <span className='dropDown__btn-promt'>Выберете что-нибудь</span>
                        <div className='dropDown__btn-text'>{selected ? selected : 'Выберете что-нибудь'}</div>
                    </label>

                    {isActive && (
                        <div className="dropDown__content">
                            {optionsSelect.map((item) => (
                                <div key={item} className="dropDown__item"
                                    onClick={(e) => toggleSelectItem(item)}>
                                    <p style={selected === item ? { color: '#3D28E1' } : {}}>{item}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="selects__item">
                <div className="dropDown">
                    <label className='dropDown__btn' style={{ borderBottom: '2px solid #3D28E1' }}>
                        <div className='dropDown__btn-text'>Выберете что нибудь</div>
                    </label>
                </div>
            </div>

            <div className="selects__item">
                <div className="dropDown showDropDown open">
                    <label className="dropDown__btn">
                        <span className='dropDown__btn-promt'>Выберете что-нибудь</span>
                        <div className='dropDown__btn-text'>{optionsSelect[2]}</div>
                    </label>

                    <div className="dropDown__content open">
                        {optionsSelect.map((item) => (
                            <div key={item} className="dropDown__item open" style={item === optionsSelect[3] ? { background: '#3D28E1', color: '#FFFFFF' } : {}}>
                                <p style={item === optionsSelect[2] ? { color: '#3D28E1' } : {}}>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
