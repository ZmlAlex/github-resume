import React from 'react';
import './style.scss';

export default function Profile({ currentProfile = {} }) {
  console.log('USER', currentProfile);
  return (
    <div className="profile">
      <h1 className="profile__titile">
        {currentProfile.name || currentProfile.login || 'GitHub user'}
      </h1>
      <h3 className="profile__sub-title">A passionate Github user</h3>
      <a className="profile__blog"> {currentProfile.blog || 'empty blog'}</a>
      <p className="profile__description">
        On GitHub since {parseInt(currentProfile.created_at) || 'here will be year'},
        {currentProfile.name || currentProfile.login || 'here will be name'} is a developer based in{' '}
        {currentProfile.location || 'here will be location'} with{' '}
        {currentProfile.public_repos || '0'} public repositories and{' '}
        {currentProfile.followers || '0'} followers.
      </p>
    </div>
  );
}
