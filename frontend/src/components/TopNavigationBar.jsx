import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
        <span className="top-nav-bar__topic">Nature</span>
        <span className="top-nav-bar__topic">Travel</span>
        <span className="top-nav-bar__topic">People</span>
      </div>
      <FavBadge />
    </div>
  );
};

export default TopNavigationBar;
