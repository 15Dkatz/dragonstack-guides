import { ACCOUNT_DRAGONS } from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_ACCOUNT_DRAGONS = { dragons: [] };

const accountDragons = (state = DEFAULT_ACCOUNT_DRAGONS, action) => {
  switch(action.type) {
    case ACCOUNT_DRAGONS.FETCH:
      return { ...state, status: fetchStates.fetching };
    case ACCOUNT_DRAGONS.FETCH_ERROR:
      return { ...state, status: fetchStates.error, message: action.message };
    case ACCOUNT_DRAGONS.FETCH_SUCCESS:
      return {
        ...state,
        status: fetchStates.success,
        message: action.message,
        dragons: action.dragons
      };
    default:
      return state;
  }
}

export default accountDragons;