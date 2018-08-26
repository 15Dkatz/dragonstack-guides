import { DRAGON } from './types';
import { BACKEND } from '../config';

export const fetchDragon = () => dispatch => {
  dispatch({ type: DRAGON.FETCH });

  return fetch(`${BACKEND.ADDRESS}/dragon/new`, {
    credentials: 'include'
  }).then(response => response.json())
    .then(json => {
      if (json.type === 'error') {
        dispatch({ type: DRAGON.FETCH_ERROR, message: json.message });
      } else {
        dispatch({ type: DRAGON.FETCH_SUCCESS, dragon: json.dragon });
      }
    })
    .catch(error => dispatch({ type: DRAGON.FETCH_ERROR, message: error.message }));
};