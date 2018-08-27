import { PUBLIC_DRAGONS } from './types';
import { BACKEND } from '../config';

export const fetchPublicDragons = () => dispatch => {
  dispatch({ type: PUBLIC_DRAGONS.FETCH });

  return fetch(`${BACKEND.ADDRESS}/dragon/public-dragons`)
    .then(response => response.json())
    .then(json => {
      if (json.type === 'error') {
        dispatch({ type: PUBLIC_DRAGONS.FETCH_ERROR, message: json.message });
      } else {
        dispatch({ type: PUBLIC_DRAGONS.FETCH_SUCCESS, dragons: json.dragons });
      }
    })
    .catch(error => dispatch({ type: PUBLIC_DRAGONS.FETCH_ERROR, message: error.message }));
}