import React from 'react';

import { Subtitle } from '../subtitle/Subtitle';

import './typography.scss';

export const Typography = () => {
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
                    <p className="tabsBar__tabs-btn btnActive" data-tab="#desktop">Десктоп</p>
                    <p className="tabsBar__tabs-btn" id="btnMobile" data-tab="#mobile">Телефон</p>
                </div>

                <div className="tabsBar__content tabActive">
                    <div className="content__item desktop tabActive" id="desktop">
                        <div className="item__row ">
                            <p className="item__row-name">Заголовок , 48/56, bold</p>
                            <h1 className='item__row-text'>Текст заголовка</h1>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Заголовок , 32/40, bold</p>
                            <h2 className='item__row-text'>Текст заголовка</h2>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Заголовок , 24/32, medium</p>
                            <h3 className='item__row-text'>Текст заголовка</h3>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Заголовок , 18/28, medium</p>
                            <h4 className='item__row-text'>Текст заголовка</h4>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Лид P_Lead, 24/32, regular</p>
                            <p className='item__row-text lead'>Текст лида</p>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Крупный текст P_18, 18/28, regular</p>
                            <p className='item__row-text'>Крупный текст</p>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Основной текст P_16, 16/24, regular</p>
                            <p className='item__row-text'>Основной текст</p>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Впомогательный текст P_14, 14/20, regular</p>
                            <p className='item__row-text'>Вспомогательный текст</p>
                        </div>
                    </div>

                    <div className="content__item mobile" id="mobile">
                        <div className="item__row ">
                            <p className="item__row-name">Заголовок , 48/56, bold</p>
                            <h1 className='item__row-text'>Текст заголовка</h1>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Заголовок , 32/40, bold</p>
                            <h2 className='item__row-text'>Текст заголовка</h2>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Заголовок , 24/32, medium</p>
                            <h3 className='item__row-text'>Текст заголовка</h3>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Заголовок , 18/28, medium</p>
                            <h4 className='item__row-text'>Текст заголовка</h4>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Лид P_Lead, 24/32, regular</p>
                            <p className='item__row-text'>Текст лида</p>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Крупный текст P_18, 18/28, regular</p>
                            <p className='item__row-text'>Крупный текст</p>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Основной текст P_16, 16/24, regular</p>
                            <p className='item__row-text'>Основной текст</p>
                        </div>
                        <div className="item__row ">
                            <p className="item__row-name">Впомогательный текст P_14, 14/20, regular</p>
                            <p className='item__row-text'>Вспомогательный текст</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
