import React from 'react';
import '../styles/FavBadge.scss';

const FavBadge = () => {
  return (
    <div className="fav-badge">
      <span className="fav-badge__icon">❤️</span>
      <span className="fav-badge__count">0</span>
    </div>
  );
};

export default FavBadge;
