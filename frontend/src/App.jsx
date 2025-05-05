import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './styles/App.scss';

const sampleDataForPhotoListItem = {
  id: 1,
  location: {
    city: "Montreal",
    country: "Canada",
  },
  urls: {
    full: "/Image-1-Full.jpeg",
    regular: "/Image-1-Regular.jpeg",
  },
  user: {
    username: "exampleuser",
    name: "Joe Example",
    profile: "/profile-1.jpg",
  },
};

const App = () => (
  <div className="App">
    <PhotoListItem
      username={sampleDataForPhotoListItem.user.username}
      imageSource={sampleDataForPhotoListItem.urls.regular}
      location={sampleDataForPhotoListItem.location}
      profile={sampleDataForPhotoListItem.user.profile}
    />
  </div>
);

export default App;
