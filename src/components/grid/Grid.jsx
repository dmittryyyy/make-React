import React from 'react';

import { Subtitle } from '../subtitle/Subtitle';
import note from '../../images/grid/note.png'
import tab from '../../images/grid/tab.png'
import mob from '../../images/grid/mob.png'

import './grid.scss';

export const Grid = () => {
    return (
        <div className="grid" id='grid'>

            <div className="grid__title">
                <Subtitle
                    title={'Сетка'}
                    description={'Задание предполагает адаптивную вёрстку.' +
                        ' Используется 3 состояния в зависимости от устройства.' +
                        ' Сетка «резиновая» — переменной ширины.'}
                />
            </div>

            <div className="grid__content">
                <h3 className="content__list-title">Десктоп (1200+)</h3>

                <div className="list">
                    <div className="list__item">
                        <p className="list__item-name">Контент</p>
                        <h3 className="list__item-meaning">1072–1312</h3>
                    </div>
                    <div className="list__item">
                        <p className="list__item-name">Колонок</p>
                        <h3 className="list__item-meaning">12</h3>
                    </div>
                    <div className="list__item">
                        <p className="list__item-name">Ширина колонки</p>
                        <h3 className="list__item-meaning">60-80</h3>
                    </div>
                    <div className="list__item">
                        <p className="list__item-name">Межколонник</p>
                        <h3 className="list__item-meaning">32</h3>
                    </div>
                </div>

                <img className="content__list-img" src={note} alt="Ноутбук" />
            </div>

            <div className="grid__content">
                <h3 className="content__list-title">Планшет (736+)</h3>

                <div className="list">
                    <div className="list__item">
                        <p className="list__item-name">Контент</p>
                        <h3 className="list__item-meaning">672-928</h3>
                    </div>
                    <div className="list__item">
                        <p className="list__item-name">Колонок</p>
                        <h3 className="list__item-meaning">8</h3>
                    </div>
                    <div className="list__item">
                        <p className="list__item-name">Ширина колонки</p>
                        <h3 className="list__item-meaning">56-88</h3>
                    </div>
                    <div className="list__item">
                        <p className="list__item-name">Межколонник</p>
                        <h3 className="list__item-meaning">32</h3>
                    </div>
                </div>

                <img className="content__list-img" src={tab} alt="Планшет" />
            </div>

            <div className="grid__content">
                <h3 className="content__list-title">Телефон (320+)</h3>

                <div className="list">
                    <div className="list__item">
                        <p className="list__item-name">Контент</p>
                        <h3 className="list__item-meaning">296-424</h3>
                    </div>
                    <div className="list__item">
                        <p className="list__item-name">Колонок</p>
                        <h3 className="list__item-meaning">4</h3>
                    </div>
                    <div className="list__item">
                        <p className="list__item-name">Ширина колонки</p>
                        <h3 className="list__item-meaning">56-88</h3>
                    </div>
                    <div className="list__item">
                        <p className="list__item-name">Межколонник</p>
                        <h3 className="list__item-meaning">24</h3>
                    </div>
                </div>

                <img className="content__list-img" src={mob} alt="Телефон" />
            </div>
        </div>
    )
}
