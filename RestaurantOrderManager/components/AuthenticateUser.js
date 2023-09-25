import axios from 'axios'; 

export const authenticateUser = async (username, password) => {
  try {
    const response = await axios.post(
        'http://192.168.1.9:8080/api/v1/user/authenticate',
      {
        username,
        password,
      }
    );
    const token = response.data; 
    return token;
  } catch (error) {
    console.error('Authentication failed:', error);
    throw error; 
  }
};