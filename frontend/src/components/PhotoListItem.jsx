import React from 'react';
import "../styles/PhotoListItem.scss";

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

const PhotoListItem = ({ username, imageSource, location, profile }) => {
  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`${username}'s photo`} className="photo" />
      <div className="photo-details">
        <img src={profile} alt={`${username}'s profile`} className="profile-pic" />
        <div>
          <p className="username">{username}</p>
          <p className="location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
