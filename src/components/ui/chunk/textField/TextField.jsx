import { React, useState } from 'react';

import './textFiled.scss';

export const TextField = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [activeInput, setActiveInput] = useState(null);

    const validInput = () => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLowerCase())) {
            setError('Некоректный E-mail!');
        } else {
            setError('');
        }
    }

    const onBlurInput = () => {
        if(!email) {
            setActiveInput(false);
            setError('Поле не может быть пустым');
        } else {
            validInput();
        }
    };

    return (
        <div className="textField">
            <label className={`textField__item ${error ? 'notValid' : ''}`}>
                <span className="textField__item-title">Интерактивный</span>
                <input className={`textField__item-input ${activeInput || email ? 'activeInput' : ''} ${error ? 'notValid' : ''}`}
                onChange={(e) => setEmail(e.target.value)} 
                onBlur={onBlurInput} 
                onFocus={(e) => setActiveInput(true)} name='input' type="email" />
                <span className="textField__item-prompt">E-mail</span>
                <p className="textField__item-error">{error}</p>
            </label>

            <label className="textField__item" style={{borderColor: '#3E29E3'}}>
                <span className="textField__item-title">Ховер</span>
                <input className="textField__item-input" disabled />
                <span className="textField__item-prompt">E-mail</span>
            </label>

            <label className="textField__item focus">
                <span className="textField__item-title">Ввод</span>
                <input className="textField__item-input activeInput" disabled value={'office@make.st'} />
                <span className="textField__item-prompt">E-mail</span>
            </label>

            <label className="textField__item notValid error">
                <span className="textField__item-title">Ввод</span>
                <input className="textField__item-input" disabled value={'officemake.st'} />
                <span className="textField__item-prompt">E-mail</span>
                <p className="textField__item-error">Текст ошибки</p>
            </label>
        </div>
    )
}
