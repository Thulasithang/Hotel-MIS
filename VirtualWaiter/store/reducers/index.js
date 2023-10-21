// In reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import tableReducer from './tableReducer';
import customerReducer from './customerReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  table: tableReducer,
  customer: customerReducer,
  // Add more reducers here
});

export default rootReducer;
