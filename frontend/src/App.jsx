import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './styles/App.scss';

const samplePhotos = [
  {
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
      username: "exampleuser1",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
  },
  {
    id: 2,
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: "/Image-2-Full.jpeg",
      regular: "/Image-2-Regular.jpeg",
    },
    user: {
      username: "exampleuser2",
      name: "Jane Doe",
      profile: "/profile-2.jpg",
    },
  },
  {
    id: 3,
    location: {
      city: "Vancouver",
      country: "Canada",
    },
    urls: {
      full: "/Image-3-Full.jpeg",
      regular: "/Image-3-Regular.jpeg",
    },
    user: {
      username: "exampleuser3",
      name: "John Smith",
      profile: "/profile-3.jpg",
    },
  },
];

const App = () => (
  <div className="App">
    {samplePhotos.map((photo) => (
      <PhotoListItem
        key={photo.id}
        username={photo.user.username}
        imageSource={photo.urls.regular}
        location={photo.location}
        profile={photo.user.profile}
      />
    ))}
  </div>
);

export default App;
