import React, { useState } from 'react';
import PhotoFavButton from './PhotoFavButton';
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
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
    console.log(`${username}'s photo is ${!isLiked ? 'liked' : 'unliked'}`);
  };

  return (
    <div className="photo-list__item">
      <img src={imageSource} alt={`${username}'s photo`} className="photo-list__item__image" />
      <div className="photo-list__item__details">
        <img src={profile} alt={`${username}'s profile`} className="photo-list__item__profile-pic" />
        <div className="photo-list__item__info">
          <p className="photo-list__item__username">{username}</p>
          <p className="photo-list__item__location">{location.city}, {location.country}</p>
        </div>
        <PhotoFavButton isLiked={isLiked} onClick={toggleLike} />
      </div>
    </div>
  );
};

export default PhotoListItem;
