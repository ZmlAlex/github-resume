import React from 'react';
import Language from '../Language';
import './style.scss';

export default function Languages({ languages }) {
  return (
    <div className="languages">
      <p className="languages__title">Languages</p>
      <div className="languages__list">
        {languages.map((language, index) => (
          <Language key={index} language={language} />
        ))}
      </div>
    </div>
  );
}
