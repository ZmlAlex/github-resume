import React from 'react';
import Language from '../Language';
import './style.scss';

export default function Languages({ languages, login }) {
  return (
    <div className="languages">
      <p className="languages__title">Languages</p>
      <div className="languages__list">
        {languages.length
          ? languages.map((language, index) => (
              <Language key={index} login={login} language={language} />
            ))
          : 'Languages not found'}
      </div>
    </div>
  );
}
