import React from 'react';
import './style.scss';

export default function Error({ message }) {
  return (
    <div className="container">
      <div className="error">
        <p>{message}</p>
      </div>
    </div>
  );
}
