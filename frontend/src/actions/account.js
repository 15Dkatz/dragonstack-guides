import { ACCOUNT } from './types';
import { BACKEND } from '../config';

export const signup = ({ username, password }) => dispatch => {
  dispatch({ type: ACCOUNT.FETCH });

  return fetch(`${BACKEND.ADDRESS}/account/signup`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include'
  }).then(response => response.json())
    .then(json => {
      if (json.type === 'error') {
        dispatch({ type: ACCOUNT.FETCH_ERROR, message: json.message });
      } else {
        dispatch({ type: ACCOUNT.FETCH_SUCCESS, ...json });
      }
    })
    .catch(error => dispatch({
      type: ACCOUNT.FETCH_ERROR, message: error.message
    }));
};