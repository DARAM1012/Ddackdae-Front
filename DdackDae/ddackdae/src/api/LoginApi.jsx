import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE;

export const LocalloginPostApi = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/v1/login`, data, {
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
    const res2 = await axios.get(`${BASE_URL}/api/v1/customer/me`, {
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    });
    return res2.data;
  } catch (error) {
    throw error;
  }
};

