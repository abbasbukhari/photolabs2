import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favorites }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topics">
        {topics.map((topic) => (
          <span key={topic.id} className="top-nav-bar__topic">
            {topic.name}
          </span>
        ))}
      </div>
      <FavBadge favorites={favorites} />
    </div>
  );
};

export default TopNavigationBar;
