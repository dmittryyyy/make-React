import React from 'react';

import './buttons.scss';

export const Buttons = () => {
  return (
    <div className="buttons">
      <div className="buttons__item">
        <button className="buttons__item-btn">Отправить</button>
      </div>
      <div className="buttons__item">
        <p className='buttons__item-subtitle'>Ховер</p>
        <button className="buttons__item-btn">Отправить</button>
      </div>
      <div className="buttons__item">
        <p className='buttons__item-subtitle'>Нажатие</p>
        <button className="buttons__item-btn">Отправить</button>
      </div>
      <div className="buttons__item">
        <p className='buttons__item-subtitle'>Неактивная</p>
        <button className="buttons__item-btn" disabled>Отправить</button>
      </div>
    </div>
  )
}
