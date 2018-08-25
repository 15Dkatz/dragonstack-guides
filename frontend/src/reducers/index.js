import { combineReducers } from 'redux';
import generation from './generation';
import dragon from './dragon';
import account from './account';

export default combineReducers({ account, dragon, generation });