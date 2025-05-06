import React from 'react';
import '../styles/PhotoDetailsModal.scss';

const PhotoDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Ensure the modal only renders when open

  return (
    <div className="photo-details-modal">
      {/* Overlay to close the modal */}
      <div className="photo-details-modal__overlay" onClick={onClose}></div>
      
      {/* Modal Content */}
      <div className="photo-details-modal__content">
        {/* Close Button */}
        <button
          className="photo-details-modal__close-button"
          onClick={onClose} // Trigger the onClose function
        >
          &times;
        </button>
        <div className="photo-details-modal__body">
          <h2>Photo Details</h2>
          {/* Placeholder for future content */}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;