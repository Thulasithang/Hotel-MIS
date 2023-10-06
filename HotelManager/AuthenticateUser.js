import axios from 'axios'; 
import ipAddress from './config';

export const authenticateUser = async (username, password) => {
  try {
    const response = await axios.post(
      `http://${ipAddress}:8080/api/v1/user/authenticate`,
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