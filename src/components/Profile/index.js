import React from 'react';
import './style.scss';

export default function Profile({ currentProfile = {} }) {
  return (
    <div className="profile">
      <h1 className="profile__titile">
        {currentProfile.name || currentProfile.login || 'GitHub user'}
      </h1>
      <h3 className="profile__sub-title">A passionate Github user</h3>
      <a
        className={`profile__blog ${!currentProfile.blog && 'disabled'}`}
        href={currentProfile.blog}
        rel="noopener noreferrer"
        target="_blank"
      >
        {currentProfile.blog || 'no web-site provided'}
      </a>
      <p className="profile__description">
        On GitHub since {parseInt(currentProfile.created_at)},
        {currentProfile.name || currentProfile.login} is a developer{' '}
        {currentProfile.location && `based in ${currentProfile.location}`} with{' '}
        <a
          href={`https://github.com/${currentProfile.login}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {currentProfile.public_repos || '0'} public repositories
        </a>{' '}
        and{' '}
        <a
          href={`https://github.com/${currentProfile.login}/followers`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {currentProfile.followers || '0'} followers.
        </a>
      </p>
    </div>
  );
}
