const initialState = {
  tableNo: 0, // Initialize the tableNo 
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TABLE_NO":
      return {
        ...state,
        tableNo: action.payload, // Update the tableNo with the payload from the action
      };
    default:
      return state;
  }
};

export default tableReducer;
