import { React, useState } from 'react';

import './textFiled.scss';

export const TextField = () => {

    const [email, setEmail] = useState('');
    const [isValue, setIsValue] = useState(false);
    const [error, setError] = useState('');

    const validInput = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!e.target.value) {
            setError('Поле не может быть пустым');
        } else {
            if (!re.test(String(email).toLowerCase())) {
                setError('Некоректный E-mail!');
            } else {
                setError('');
            }
        }
    }

    const blurInput = (e) => {
        if (e.target.name === 'input') {
            setIsValue(true);
        } else {
            setIsValue(false);
        }
    };

    return (
        <div className="textField">
            <label className={`textField__item ${error && isValue ? 'notValid' : ''}`}>
                <div className="textField__item-title">Интерактивный</div>
                <input onChange={e => validInput(e)} value={email} onBlur={e => blurInput(e)} name='input' className="textField__item-input" type="email" placeholder='E-mail'/>
                <span className="textField__item-prompt">E-mail</span>
                <div className="textField__item-error">{isValue ? error : ''}</div>
            </label>
            <label className="textField__item">
                <div className="textField__item-title">Ховер</div>
                <input className="textField__item-input" style={{borderBottom: '2px solid #3E29E3'}}placeholder='E-mail'/>
            </label>
            <label className="textField__item">
                <div className="textField__item-title">Ввод</div>
                <input className="textField__item-input" style={{borderBottom: '4px solid #3E29E3', color: '#1B1B1B'}} placeholder='office@make.st'/>
            </label>
            <label className="textField__item notValid">
                <div className="textField__item-title">Ошибка</div>
                <input className="textField__item-input" style={{borderBottom: '4px solid #E80F3B'}} placeholder='officemake.st'/>
                <span className="textField__item-prompt error">E-mail</span>
                <div className="textField__item-error">Текст ошибки</div>
            </label>
        </div>
    )
}
