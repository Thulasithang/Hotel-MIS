import axios from "axios";
const localhost = `https://hotel-mis-test-bbb375a19c7a.herokuapp.com`;
const fetchItems = async () => {
  try {
    const response = await axios.get(
      `${localhost}/api/v1/menuitem/getAllItems`
    );
    return response.data;
  } catch (error) {
    throw error; // Rethrow the error to handle it in the component
  }
};

const fetchDiscountItems = async () => {
  try {
    const response = await axios.get(
      `${localhost}/api/v1/menuitem/getDiscountItems`
    );
    return response.data;
  } catch (error) {
    throw error; // Rethrow the error to handle it in the component
  }
};

const fetchTables = async () => {
  try {
    const response = await axios.get(`${localhost}/api/v1/table/getAllTables`); //`${localhost}/api/v1/table/allTables`
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchItems, fetchDiscountItems, fetchTables, localhost };
