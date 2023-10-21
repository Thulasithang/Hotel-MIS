import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from './reducers/cartReducer'; // Import your cart reducer
import tableReducer from './reducers/tableReducer';
import customerReducer from './reducers/customerReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  table: tableReducer,
  customer: customerReducer,
  // ... add more reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
