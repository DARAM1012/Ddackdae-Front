import axios from "axios";

export const LocalloginPostApi = async (data) => {
  try {
    const res = await axios.post("http://34.47.87.26/api/v1/login", data, {
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
