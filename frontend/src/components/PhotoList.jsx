import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, onPhotoClick }) => (
  <ul className="photo-list">
    {photos.map((photo) => (
      <PhotoListItem key={photo.id} photo={photo} onPhotoClick={onPhotoClick} />
    ))}
  </ul>
);

export default PhotoList;