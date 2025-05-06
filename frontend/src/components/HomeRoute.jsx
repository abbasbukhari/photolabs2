import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import { useFavorites } from '../context/FavoritesContext';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, onPhotoClick }) => {
  const { favorites } = useFavorites();

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favorites={favorites} />
      <div className="home-route__photos">
        <PhotoList photos={photos} onPhotoClick={onPhotoClick} />
      </div>
    </div>
  );
};

export default HomeRoute;
