import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  OPEN_PHOTO_MODAL: 'OPEN_PHOTO_MODAL',
  CLOSE_PHOTO_MODAL: 'CLOSE_PHOTO_MODAL'
};

const initialState = {
  isPhotoModalOpen: false,
  selectedPhoto: null,
  photoData: [],
  topicData: []
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.OPEN_PHOTO_MODAL:
      return { ...state, isPhotoModalOpen: true, selectedPhoto: action.payload };
    case ACTIONS.CLOSE_PHOTO_MODAL:
      return { ...state, isPhotoModalOpen: false, selectedPhoto: null };
    default:
      return state;
  }
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch photos
  useEffect(() => {
    axios.get('http://localhost:8001/api/photos')
      .then(res => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data }));
  }, []);

  // Fetch topics
  useEffect(() => {
    axios.get('http://localhost:8001/api/topics')
      .then(res => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: res.data }));
  }, []);

  const openPhotoModal = (photo) => {
    dispatch({ type: ACTIONS.OPEN_PHOTO_MODAL, payload: photo });
  };

  const closePhotoModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO_MODAL });
  };

  return {
    isPhotoModalOpen: state.isPhotoModalOpen,
    selectedPhoto: state.selectedPhoto,
    openPhotoModal,
    closePhotoModal,
    photos: state.photoData,
    topics: state.topicData
  };
}