import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const PhotoListItem = ({ photo, onPhotoClick }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.includes(photo.id);

  return (
    <li className="photo-list-item" onClick={onPhotoClick}>
      <div
        className={`photo-list-item__heart ${isFavorited ? 'favorited' : ''}`}
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering the modal when clicking the heart
          toggleFavorite(photo.id);
        }}
      >
        ❤️
      </div>
      <img
        className="photo-list-item__image"
        src={photo.urls.regular}
        alt={`${photo.location.city}, ${photo.location.country}`}
      />
      <div className="photo-info">
        <img
          className="photo-info__profile"
          src={photo.user.profile}
          alt={`${photo.user.name}'s profile`}
        />
        <div>
          <h3>{photo.user.name}</h3>
          <p>{photo.location.city}, {photo.location.country}</p>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
