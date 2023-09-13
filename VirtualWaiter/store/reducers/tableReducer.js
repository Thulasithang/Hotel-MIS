// tableReducer.js

import { SET_TABLE_NO } from '../actions/tableActions';

const initialState = {
  tableNo: 3, // Initialize the tableNo to an empty string
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABLE_NO:
      return {
        ...state,
        tableNo: action.payload, // Update the tableNo with the payload from the action
      };
    default:
      return state;
  }
};

export default tableReducer;
