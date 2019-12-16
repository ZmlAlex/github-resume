import React from 'react';
import './style.scss';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <div className="header">
      <img src={logo} />
    </div>
  );
}
