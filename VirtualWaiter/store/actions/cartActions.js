import axios from 'axios';

export const placeOrder = (cartData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/orders', cartData);
      // Handle success, e.g., update the store or show a success message
      dispatch({ type: 'ORDER_PLACED', payload: response.data });
    } catch (error) {
      // Handle error, e.g., show an error message
      dispatch({ type: 'ORDER_ERROR', payload: error.message });
    }
  };
};
