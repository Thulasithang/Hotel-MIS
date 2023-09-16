// In reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  table: tableReducer,
  // Add more reducers here
});

export default rootReducer;
