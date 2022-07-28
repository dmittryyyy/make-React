import React from 'react';

import './textFiled.scss';

export const TextField = () => {
    return (
        <div className="textField">
            <label className="textField__item">
                <input className="textField__item-input" type="email" placeholder="E-mail" />
                <div className="textField__item-prompt">E-mail</div>
            </label>
            <label className="textField__item">
                <div className="textField__item-title">Ховер</div>
                <input className="textField__item-input" type="email" placeholder="E-mail" />
                <div className="textField__item-prompt">E-mail</div>
            </label>
            <label className="textField__item">
                <div className="textField__item-title">Ввод</div>
                <input className="textField__item-input" type="email" placeholder="E-mail" />
                <div className="textField__item-prompt">E-mail</div>
            </label>
            <label className="textField__item">
                <div className="textField__item-title">Ошибка</div>
                <input className="textField__item-input" type="email" placeholder="E-mail" />
                <div className="textField__item-prompt">E-mail</div>
            </label>
        </div>
    )
}
