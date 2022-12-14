import { React } from 'react';

import './buttons.scss';

export const Buttons = () => {

  return (
    <div className="buttons">
      <div className="buttons__item">
        <span className='buttons__item-subtitle'>Интерактивная</span>
        <button className="buttons__item-btn">Отправить</button>
      </div>
      <div className="buttons__item">
        <span className='buttons__item-subtitle'>Ховер</span>
        <button className="buttons__item-btn hover">Отправить</button>
      </div>
      <div className="buttons__item">
        <span className='buttons__item-subtitle'>Нажатие</span>
        <button className="buttons__item-btn click">Отправить</button>
      </div>
      <div className="buttons__item">
        <span className='buttons__item-subtitle'>Неактивная</span>
        <button className="buttons__item-btn" disabled>Отправить</button>
      </div>
    </div>
  )
}
