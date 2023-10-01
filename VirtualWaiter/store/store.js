import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer'; // Import your cart reducer
import tableReducer from './reducers/tableReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  table: tableReducer,
  // ... add more reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
