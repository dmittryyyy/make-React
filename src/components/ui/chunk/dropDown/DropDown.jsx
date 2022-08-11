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
                                <div key={item} className={`dropDown__item ${selected === item ? 'dropDown__item_choose' : ''}`}
                                    onClick={(e) => toggleSelectItem(item)}>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="selects__item">
                <div className="dropDown">
                    <label className='dropDown__btn dropDown__btn_hover'>
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
                            <div key={item} className={`dropDown__item open ${item === optionsSelect[3] ? 'dropDown__item_hover' : ''}`}>
                                <p className={item === optionsSelect[2] ? 'dropDown__item_choose' : ''}>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
