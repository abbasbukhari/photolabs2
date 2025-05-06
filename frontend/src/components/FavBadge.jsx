import React from 'react';
import '../styles/FavBadge.scss';

const FavBadge = ({ favorites }) => {
  return (
    <div className="fav-badge">
      <span className="fav-badge__icon">
        ❤️
        {favorites.length > 0 && <span className="fav-badge__notification"></span>}
      </span>
      <span className="fav-badge__count">{favorites.length}</span>
    </div>
  );
};

export default FavBadge;
