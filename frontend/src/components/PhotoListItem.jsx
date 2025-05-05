import React from 'react';
import '../styles/PhotoListItem.scss';

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
    <div className="photo-list__item">
      <img src={imageSource} alt={`${username}'s photo`} className="photo-list__item__image" />
      <div className="photo-list__item__details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__item__profile-pic" />
        <div className="photo-list__item__info">
          <p className="photo-list__item__username">{username}</p>
          <p className="photo-list__item__location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
