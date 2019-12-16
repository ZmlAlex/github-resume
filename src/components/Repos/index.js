import React from 'react';
import Repo from '../Repo';

export default function Repos({ repos }) {
  return (
    <div className="repos">
      <h2>Popular repositories</h2>
      {repos.map(repo => (
        <Repo key={repo.id} repo={repo} />
      ))}
      {/* <Repo />
      <Repo />
      <Repo />
      <Repo /> */}
    </div>
  );
}
