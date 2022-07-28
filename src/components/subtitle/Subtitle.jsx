import React from 'react';

import './subtitle.scss';

export const Subtitle = ({ title, description }) => {
  return (
    <div>
      <div className="subtitle">
        <h2 className="subtitle__title">{title}</h2>
        <p className="subtitle__text">{description}</p>
      </div>
    </div>
  )
}
