import { combineReducers } from 'redux';
import cooperativeReducer from './cooperativeReducer';
import authReducer from './authReducer';
export default combineReducers({
  auth: authReducer,
  cooperative: cooperativeReducer
})