import React from 'react';
import Languages from '../Languages';
import Profile from '../Profile';
import './style.scss';
import Repos from '../Repos';

export default function List({ repos, languages, currentProfile }) {
  return (
    <div className="container">
      <div className="list">
        <Profile currentProfile={currentProfile} />
        <Languages languages={languages} />
        <Repos repos={repos} />
      </div>
    </div>
  );
}
