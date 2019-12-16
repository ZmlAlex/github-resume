import React from 'react';
import './style.scss';

export default function Repo({ repo = {} }) {
  const createdAt = parseInt(repo.created_at);
  const updatedAt = parseInt(repo.updated_at);
  const dates = createdAt === updatedAt ? createdAt : `${createdAt} - ${updatedAt}`;

  return (
    <div className="repo">
      <div className="repo__title">
        <a>{repo.name || 'repo name'}</a>
        <p>{dates}</p>
      </div>
      <p className="repo__permissions">{repo.language} owner</p>
      <p className="repo__description">{repo.description}</p>
      <p className="repo__information">
        This repository has {repo.stargazers_count} stars and {repo.forks} forks. If you would like
        more information about this repository and my contributed code, please visit the repo on
        GitHub.
      </p>
    </div>
  );
}
