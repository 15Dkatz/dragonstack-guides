import { PUBLIC_DRAGONS } from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_PUBLIC_DRAGONS = { dragons: [] };

const publicDragons = (state = DEFAULT_PUBLIC_DRAGONS, action) => {
  switch(action.type) {
    case PUBLIC_DRAGONS.FETCH:
      return { ...state, status: fetchStates.fetching };
    case PUBLIC_DRAGONS.FETCH_ERROR:
      return { ...state, status: fetchStates.error, message: action.message };
    case PUBLIC_DRAGONS.FETCH_SUCCESS:
      return { ...state, status: fetchStates.success, dragons: action.dragons };
    default:
      return state;
  }
};

export default publicDragons;