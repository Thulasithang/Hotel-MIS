import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducer from './reducers/cartReducer'; // Import your cart reducer
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  cart: cartReducer,
  // ... add more reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
