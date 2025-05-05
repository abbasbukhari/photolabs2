import React, { useState } from 'react';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import './styles/App.scss';

const App = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="App">
      <h1>PhotoLabs</h1>
      <TopicList onTopicSelect={handleTopicSelect} />
      <PhotoList selectedTopic={selectedTopic} />
    </div>
  );
};

export default App;
