import React from 'react';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ isLiked, onClick }) => {
  return (
    <button
      className={`photo-fav-button ${isLiked ? 'photo-fav-button--active' : ''}`}
      onClick={onClick}
    >
      {isLiked ? '❤️' : '🤍'}
    </button>
  );
};

export default PhotoFavButton;
