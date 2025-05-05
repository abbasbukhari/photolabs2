import React from 'react';

const TopicListItem = ({ topic, isSelected, onClick }) => (
  <li
    className={`topic-list-item ${isSelected ? 'selected' : ''}`}
    onClick={onClick}
  >
    {topic.name}
  </li>
);

export default TopicListItem;
