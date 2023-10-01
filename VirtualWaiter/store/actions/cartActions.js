import axios from "axios";

export const placeOrder = (cartData, tableNo) => {
  console.log("cartData", cartData);
  console.log(typeof(tableNo));
  return async (dispatch) => {
    try {
      const requestData = {
        items: cartData,
        tableId: tableNo,
      };


      const response = await axios.post("http://192.168.1.6:8080/api/v1/order/create", requestData, {
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });
      // Handle success, e.g., update the store or show a success message
      dispatch({ type: "ORDER_PLACED", payload: response.data });
    } catch (error) {
      // Handle error, e.g., show an error message
      dispatch({ type: "ORDER_ERROR", payload: error.message });
    }
  };
};


// {
//   items: [
//     {
//       "id": 1,
//       "name": "Item 1",
//       "price": 10.0,
//       "quantity": 2
//     },
//     {
//       "id": 2,
//       "name": "Item 2",
//       "price": 15.0,
//       "quantity": 1
//     }
//   ],
//   tableId: 123,
// };