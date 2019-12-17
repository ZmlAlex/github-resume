import React from 'react';
import './style.scss';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} alt="" />
    </header>
  );
}
