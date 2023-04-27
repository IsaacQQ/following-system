import axios from "axios";

export const instanceUser = axios.create({
    baseURL:'https://63ca3a984f53a004201f12f4.mockapi.io/User',
})

export const updateFollowers = async (userId, followers) => {
    try {
      const response = await axios.get(`https://63ca3a984f53a004201f12f4.mockapi.io/User`, {
        followers: followers,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };