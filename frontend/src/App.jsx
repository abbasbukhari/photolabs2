import React from 'react';
import { FavoritesProvider } from './context/FavoritesContext';
import HomeRoute from './components/HomeRoute'; 
import PhotoDetailsModal from './components/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './styles/App.scss';

const App = () => {
  const {
    isPhotoModalOpen,
    selectedPhoto,
    openPhotoModal,
    closePhotoModal,
    photos,
    topics,
    fetchPhotosByTopic
  } = useApplicationData();

  return (
    <FavoritesProvider>
      <div className="App">
        <HomeRoute
          photos={photos}
          topics={topics}
          onPhotoClick={openPhotoModal}
          onTopicClick={fetchPhotosByTopic}
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
