import React from 'react';

const PhotoListItem = ({ photo }) => (
  <li className="photo-list-item">
    <img src={photo.urls.regular} alt={`${photo.location.city}, ${photo.location.country}`} />
    <div className="photo-info">
      <h3>{photo.location.city}, {photo.location.country}</h3>
      <p>By: {photo.user.name}</p>
    </div>
  </li>
);

export default PhotoListItem;
