import React from 'react';

import './checkboxs.scss';

export const Checkboxs = () => {
    return (
        <div className="checkboxs">
            <div className="checkboxs__item">
                <label className="checks">
                    <input disabled type="checkbox" className="checks__input"/>
                    <div className="checks__fake checks__fake_disabled"></div>
                    <div className="checks__name">Выбери меня</div>
                </label>
                <label className="checks">
                    <input type="checkbox" disabled className="checks__input"/>
                    <div className="checks__fake circles__fake_hover"></div>
                    <div className="checks__name">Выбери меня</div>
                </label>
                <label className="checks">
                    <input type="checkbox" className="checks__input" name="check" />
                    <div className="checks__fake"></div>
                    <div className="checks__name">Птица счастья завтрашнего дня</div>
                </label>
            </div>

            <div className="checkboxs__item">
                <label className="circles">
                    <input disabled type="radio" className="circles__input"/>
                    <div className="circles__fake checks__fake_disabled"></div>
                    <div className="circles__name">Пластмассовый мир победил</div>
                </label>
                <label className="circles">
                    <input type="radio" disabled className="circles__input"/>
                    <div className="circles__fake circles__fake_hover"></div>
                    <div className="circles__name">Макет оказался сильней</div>
                </label>
                <label className="circles">
                    <input type="radio" className="circles__input" name="radio" />
                    <div className="circles__fake"></div>
                    <div className="circles__name">Последний кораблик остыл</div>
                </label>
            </div>
        </div>
    )
}
