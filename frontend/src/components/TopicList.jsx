import React, { useState } from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const topics = [
  { id: "1", name: "Nature" },
  { id: "2", name: "Cities" },
  { id: "3", name: "People" },
];

const TopicList = ({ onTopicSelect }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic.id);
    onTopicSelect(topic.name);
  };

  return (
    <ul className="topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topic={topic}
          isSelected={selectedTopic === topic.id}
          onClick={() => handleTopicClick(topic)}
        />
      ))}
    </ul>
  );
};

export default TopicList;
