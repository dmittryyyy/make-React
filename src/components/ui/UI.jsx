import React from 'react';

import { Subtitle } from '../subtitle/Subtitle';
import { TextField } from './chunk/textField/TextField';
import { DropDown } from './chunk/dropDown/DropDown';
import { Buttons } from './chunk/buttons/Buttons';
import { Checkboxs } from './chunk/checkboxs/Checkboxs';
import { Accordions } from './chunk/accordions/Accordions';

import './ui.scss';

export const UI = () => {
    return (
        <div className="ui" id='UI'>

            <div className="ui__title">
                <Subtitle title={'UI'} />
            </div>

            <div className="ui__content">

                <div className="content__block ui__content-item" >
                    <h3 className="content__block-title">Текстовое поле</h3>
                    <TextField />
                </div>

                <div className="content__block ui__content-item" >
                    <div className="content__block-titleText">
                    <h3 className="content__block-title">Выпадающий список</h3>
                    <p>Компонент состоит из текстового поля и выпадающей подсказки</p>
                    </div>
                    <DropDown />
                </div>

                <div className="content__block ui__content-item" >
                    <h3 className="content__block-title">Кнопка</h3>
                    <Buttons />
                </div>

                <div className="content__block ui__content-item" >
                    <h3 className="content__block-title">Чекбокс, радиобаттон</h3>
                    <Checkboxs />
                </div>

                <div className="content__block ui__content-item" >
                    <h3 className="content__block-title">Аккордеон</h3>
                    <Accordions />
                </div>

            </div>
        </div>
    )
}
