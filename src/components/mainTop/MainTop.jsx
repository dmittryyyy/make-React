import React from 'react';

import './mainTop.scss';

export const MainTop = () => {
  return (
    <div className="mainTop" id='parting-word'>
      <div className="mainTop__title">
        <h1 className='mainTop__title-title'>Тестовое задание</h1>
        <h3 className='mainTop__title-subtitle'>Уровень: junior</h3>
      </div>
      <div className="mainTop__description">
        <p className='mainTop__title-text'>Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную страничку.
          В шапке страницы укажи своё ФИО, так всем будет удобнее.
          В менюхе под иконкой бургером мы хотели бы также видеть твои данные.
          Ну что, поехали?</p>
      </div>
    </div>
  )
}
