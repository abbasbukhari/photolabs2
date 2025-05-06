import React, { createContext, useState, useContext } from 'react';

// Create the context
const FavoritesContext = createContext();

// Create a provider component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (photoId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(photoId)
        ? prevFavorites.filter((id) => id !== photoId) // Remove from favorites
        : [...prevFavorites, photoId] // Add to favorites
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use the FavoritesContext
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};