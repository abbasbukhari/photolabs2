import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ photo, onClose }) => {
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
          {/* Add similar photos here in the future */}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;