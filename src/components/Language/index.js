import React from 'react';
import './style.scss';

export default function Language({ language, login }) {
  const { type, percentage } = language;
  return (
    <div className="language">
      <a
        className="language__title"
        target="_blank"
        rel="noopener noreferrer"
        href={`https://github.com/search?q=user:${login}&l=${type}`}
      >
        {`${type} ${percentage}` || 'language %'}
      </a>
      <div className="progress-bar">
        <div className="progress-bar__line" style={{ width: `${percentage}` }} />
      </div>
    </div>
  );
}
