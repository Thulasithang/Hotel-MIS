import axios from 'axios'; 
import IpConfig from '../IpConfig';

export const authenticateUser = async (username, password) => {
  try {
    const response = await axios.post(
      `http://${IpConfig.apiBaseUrl}:8080/api/v1/user/authenticate`,
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