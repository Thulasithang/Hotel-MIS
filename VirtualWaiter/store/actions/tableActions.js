// tableActions.js

// Define the action type
export const SET_TABLE_NO = 'SET_TABLE_NO';

// Define the action creator function to set the tableNo
export const setTableNo = (tableNo) => ({
  type: SET_TABLE_NO,
  payload: tableNo,
});
