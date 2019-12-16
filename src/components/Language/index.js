import React from 'react';
import './style.scss';

export default function Language({ language }) {
  const { type, percentage } = language;

  return (
    <div className="language">
      <p className="language__title">{`${type} ${percentage}` || 'language %'}</p>
      <div className="progress-bar">
        <div className="progress-bar__line" style={{ width: `${percentage}` }} />
      </div>
    </div>
  );
}
