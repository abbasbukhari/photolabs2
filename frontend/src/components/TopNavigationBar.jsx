import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favorites, onTopicClick }) => (
  <nav className="top-nav-bar">
    <div className="top-nav-bar__logo">PhotoLabs</div>
    <TopicList topics={topics} onTopicClick={onTopicClick} />
    <div className="top-nav-bar__favorites">
      <FavBadge favorites={favorites} />
    </div>
  </nav>
);

export default TopNavigationBar;
