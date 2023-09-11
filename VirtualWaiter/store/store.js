import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer'; // Import your cart reducer

const rootReducer = combineReducers({
  cart: cartReducer,
  // ... add more reducers here
});

const store = createStore(rootReducer);

export default store;
