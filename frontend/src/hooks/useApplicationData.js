import { useState } from 'react';

export default function useApplicationData() {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
    setIsPhotoModalOpen(true);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
    setIsPhotoModalOpen(false);
  };

  return {
    isPhotoModalOpen,
    selectedPhoto,
    openPhotoModal,
    closePhotoModal
  };
}