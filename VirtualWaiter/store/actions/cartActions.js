import axios from "axios";

export const placeOrder = (cartData, tableNo, customerName, customerNumber) => {
  return async (dispatch) => {
    try {
      // Parse tableNo to an integer
      const parsedTableNo = parseInt(tableNo, 10); // 10 is the base for parsing

      if (isNaN(parsedTableNo)) {
        throw new Error("Invalid table number"); // Handle the error if parsing fails
      }

      const requestData = {
        items: cartData,
        tableId: parsedTableNo, // Use the parsed integer value
        customerName: customerName,
        customerNumber: customerNumber,
      };

      const response = await axios.post(
        "http://192.168.8.102:8080/api/v1/order/create",
        requestData,
        {
          // headers: {
          //   "Content-Type": "application/json",
          // },
        }
      );
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
