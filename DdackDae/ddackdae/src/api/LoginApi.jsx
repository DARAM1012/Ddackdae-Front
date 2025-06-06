import axios from "axios";

export const LocalloginPostApi = async (data) => {
  try {
    const res = await axios.post(`http://34.47.87.26/api/v1/login`, data, {
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};


export const LoginCustomerGetApi = async (token) => {
  try {
    const res = await axios.get(`http://34.47.87.26/api/v1/customer/me`, {
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

