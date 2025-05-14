import React from 'react';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ topics, favorites, onTopicClick }) => (
  <nav className="top-nav-bar">
    <div className="top-nav-bar__logo">PhotoLabs</div>
    <ul className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <li
          key={topic.id}
          className="topic-list-item"
          onClick={() => onTopicClick(topic.id)}
        >
          {topic.title}
        </li>
      ))}
    </ul>
    <div className="top-nav-bar__favorites">
      <span className="top-nav-bar__heart">
        ❤️
        <span className="top-nav-bar__counter">{favorites.length}</span>
      </span>
    </div>
  </nav>
);

export default TopNavigationBar;
