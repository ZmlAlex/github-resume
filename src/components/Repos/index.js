import React from 'react';
import Repo from '../Repo';
import './style.scss';

export default function Repos({ repos }) {
  return (
    <div className="repos">
      <p className="repos__title">Popular repositories</p>
      {repos.length
        ? repos.map(repo => <Repo key={repo.id} repo={repo} />)
        : 'repositories not found'}
    </div>
  );
}
