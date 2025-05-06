import React from 'react';
import HomeRoute from './components/HomeRoute';
import { FavoritesProvider } from './context/FavoritesContext';
import photos from './mocks/photos';
import topics from './mocks/topics';
import './styles/App.scss';

const App = () => (
  <FavoritesProvider>
    <div className="App">
      <HomeRoute photos={photos} topics={topics} />
    </div>
  </FavoritesProvider>
);

export default App;
