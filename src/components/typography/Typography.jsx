import { useEffect } from 'react';
import { React, useState } from 'react';

import { Subtitle } from '../subtitle/Subtitle';

import './typography.scss';

export const Typography = () => {

    const [ toggleState, setToggleState ] = useState(null);

    const itemsTab = [
        { name: 'Заголовок H1, 48/56, bold', text: <h1>Текст заголовка</h1> },
        { name: 'Заголовок H2, 32/40, bold', text: <h2>Текст заголовка</h2> },
        { name: 'Заголовок H3, 24/32, medium', text: <h3>Текст заголовка</h3> },
        { name: 'Заголовок H4, 18/28, medium', text: <h4>Текст заголовка</h4> },
        { name: 'Лид P_Lead, 24/32, regular', text: <p>Текст лида</p> },
        { name: 'Крупный текст P_18, 18/28, regular', text: <p>Крупный текст</p> },
        { name: 'Основной текст P_16, 16/24, regular', text: <p>Основной текст</p> },
        { name: 'Впомогательный текст P_14, 14/20, regular', text: <p>Вспомогательный текст</p> },
    ];

    const toggleTab = (i) => {
        setToggleState(i);
        console.log(toggleState)
    };

    useEffect(() => {
        if (window.innerWidth < 600) {
            setToggleState(2);
        } else {
            setToggleState(1);
        }
    }, []);

    return (
        <div className="typography" id='typography'>

            <div className="typography__title">
                <Subtitle
                    title={'Типографика'}
                    description={'Используется шрифт Graphik. На телефонах стили типографики переопределяются'}
                    className="typography__subtitle"
                />
            </div>

            <div className="tabsBar">
                <div className="tabsBar__buttons">
                    <p className={`tabsBar__tabs-btn ${toggleState === 1  ? 'btnActive' : ''}`} onClick={() => toggleTab(1)}>Десктоп</p>
                    <p className={`tabsBar__tabs-btn ${toggleState === 2  ? 'btnActive' : ''}`} onClick={() => toggleTab(2)}>Телефон</p>
                </div>

                <div className="tabsBar__content">

                    <div className={`content__item ${toggleState === 1 ? 'tabActive' : ''}`}>
                        {itemsTab.map((item) => (
                            <div key={item.name} className="item__row">
                                <p className="item__row-name">{item.name}</p>
                                {item.text}
                            </div>
                        ))}
                    </div>

                    <div className={`content__item ${toggleState === 2 ? 'tabActive' : ''}`}>
                        {itemsTab.map((item) => (
                            <div key={item.name} className="item__row">
                                <p className="item__row-name">{item.name}</p>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
