import axios from "axios";
import ipAddress from "./config";

export const authenticateUser = async (username, password, userRole) => {
  try {

    const response = await axios.post(
      `${ipAddress}/api/v1/user/authenticate`,
      {
        username,
        password,
        userRole
      }
    );
    const token = response.data; 

    return token;
  } catch (error) {
    console.error("Authentication failed:", error);
    throw error;
  }
};
