import axios from 'axios';

const fetchItems = async () => {
  try {
    const response = await axios.get('http://10.10.28.134:8080/api/v1/menuitem/getAllItems');
    return response.data;
  } catch (error) {
    throw error; // Rethrow the error to handle it in the component
  }
};

export { fetchItems };
