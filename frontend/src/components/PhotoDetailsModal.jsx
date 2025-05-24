import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import { useFavorites } from '../context/FavoritesContext';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ photo, onClose }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = photo && favorites.includes(photo.id);

  if (!photo) return null;

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__overlay" onClick={onClose}></div>
      <div className="photo-details-modal__content">
        {/* Close Button */}
        <button
          className="photo-details-modal__close-button"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="photo-details-modal__body">
          <div className="photo-details-modal__top-bar">
            <div className="photo-details-modal__favorite-button">
              <PhotoFavButton
                isLiked={isFavorited}
                onClick={() => toggleFavorite(photo.id)}
              />
            </div>
          </div>
          <img
            src={photo.urls.full}
            alt={`${photo.location.city}, ${photo.location.country}`}
            className="photo-details-modal__image"
          />
          <div className="photo-details-modal__photographer-details">
            <img
              src={photo.user.profile}
              alt={photo.user.name}
              className="photo-details-modal__photographer-profile"
            />
            <div className="photo-details-modal__photographer-info">
              <div>{photo.user.name}</div>
              <div className="photo-details-modal__photographer-location">
                {photo.location.city}, {photo.location.country}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;