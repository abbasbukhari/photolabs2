import React from 'react';
import { FavoritesProvider } from './context/FavoritesContext';
import HomeRoute from './components/HomeRoute';
import PhotoDetailsModal from './components/PhotoDetailsModal';
import photos from './mocks/photos';
import topics from './mocks/topics';
import useApplicationData from './hooks/useApplicationData';
import './styles/App.scss';

const App = () => {
  const {
    isPhotoModalOpen,
    selectedPhoto,
    openPhotoModal,
    closePhotoModal
  } = useApplicationData();

  return (
    <FavoritesProvider>
      <div className="App">
        <HomeRoute
          photos={photos}
          topics={topics}
          onPhotoClick={openPhotoModal}
        />
        {isPhotoModalOpen && selectedPhoto && (
          <PhotoDetailsModal
            photo={selectedPhoto}
            onClose={closePhotoModal}
          />
        )}
      </div>
    </FavoritesProvider>
  );
};

export default App;
