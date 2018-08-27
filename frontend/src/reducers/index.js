import { combineReducers } from 'redux';
import generation from './generation';
import dragon from './dragon';
import account from './account';
import accountDragons from './accountDragons';
import accountInfo from './accountInfo';
import publicDragons from './publicDragons';

export default combineReducers({
  account,
  dragon,
  generation,
  accountDragons,
  accountInfo,
  publicDragons
});