import { combineReducers } from 'redux';
import buttonReducer from './buttonReducer';
// dont forget to import reducers here

// import * as types from '../actions/types';

export default combineReducers({
    button: buttonReducer
});
