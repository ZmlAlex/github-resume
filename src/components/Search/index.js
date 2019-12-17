import React, { useState } from 'react';
import './style.scss';

export default function Search({ handleUserProfile }) {
  const [userName, setUserName] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setUserName(value);
  };

  const handleSumbit = e => {
    e.preventDefault();
    handleUserProfile(userName);
    setUserName(userName.trim());
  };

  return (
    <div className="container container__big">
      <div className="search">
        <div className="search__content">
          <p className="search__title">Github Username</p>
          <form className="search__form" onSubmit={handleSumbit}>
            <input onChange={handleChange} value={userName} placeholder="John Doe" required />
            <button type="submit"> Generieren </button>
          </form>
        </div>
      </div>
    </div>
  );
}
