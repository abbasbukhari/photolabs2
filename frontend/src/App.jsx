import React, { useState } from 'react';
import { FavoritesProvider } from './context/FavoritesContext';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './styles/App.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhotoClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <FavoritesProvider>
      <div className="App">
        <HomeRoute photos={photos} topics={topics} onPhotoClick={handlePhotoClick} />
        <PhotoDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </FavoritesProvider>
  );
};

export default App;
