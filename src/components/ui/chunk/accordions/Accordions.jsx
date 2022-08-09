import { React, useState } from 'react';

import './accordions.scss';

export const Accordions = () => {

    const [isActiveAccordion, isSetActiveAccordion] = useState(false);

    const openItemAccordion = () => {
        if (!isActiveAccordion) {
            isSetActiveAccordion(true);
        } else {
            isSetActiveAccordion(false);
        }
    }

    return (
        <div className="accordion">

            <div className={`accordion__item ${isActiveAccordion ? 'open' : ''}`}>
                <div className="accordion__title" onClick={openItemAccordion}>
                    <p className='accordion__title-name'>Аккордеон</p>
                    <span className='accordion__title-img'></span>
                </div>
                <div className="accordion__item-content">
                    <div className="accordion__item-text">
                    К сожалению сегодня аккордеон не играет
                    </div>
                </div>
            </div>

            <div className="accordion__item" style={{'borderBottom': '1px solid #3E29E3'}}>
                <div className="accordion__title">
                    <p className='accordion__title-name' style={{'color': '#1b1b1b'}}>Аккордеон</p>
                    <span className='accordion__title-img'></span>
                </div>
                <div className="accordion__item-content">
                </div>
            </div>

            <div className="accordion__item open">
                <div className="accordion__title">
                    <p className="accordion__title-name">Аккордеон</p>
                    <span className='accordion__title-img active'></span>
                </div>
                <div className="accordion__item-content">
                    Гоpдость полными вагонами золотыми погонами
                    <br />
                    С юга дyют молодые вет…
                    <br />
                    Pазpывая в клочья облака не забыли шлют из далека
                    <br />
                    С дома мама И не последняя любовь
                    <br />
                    А по небy бегyт видишь чьи-то следы
                    <br />
                    Это может быть ты это может быть я
                    <br />
                    Это может наш дрyг
                    <br />
                    Это может нам поют свои
                </div>
            </div>

        </div>
    )
}

