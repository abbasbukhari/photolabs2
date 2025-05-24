import React from 'react';

const TopicListItem = ({ topic, onClick }) => (
  <li
    className="topic-list-item"
    onClick={onClick}
  >
    {topic.title}
  </li>
);

export default TopicListItem;
