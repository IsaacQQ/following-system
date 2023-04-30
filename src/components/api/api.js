import axios from "axios";


export const updateFollowers = async (followers) => {
    try {
      const response = await axios.get(`https://63ca3a984f53a004201f12f4.mockapi.io/User`, {
      });
    } catch (error) {
      console.error(error);
    }
  };