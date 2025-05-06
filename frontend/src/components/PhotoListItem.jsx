import React from 'react';
import { useFavorites } from '../context/FavoritesContext';

const PhotoListItem = ({ photo }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.includes(photo.id);

  return (
    <li className="photo-list-item">
      <div
        className={`photo-list-item__heart ${isFavorited ? 'favorited' : ''}`}
        onClick={() => toggleFavorite(photo.id)}
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
