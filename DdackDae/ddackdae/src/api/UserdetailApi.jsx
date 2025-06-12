import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE;

export const UserDtailGetApi = async (token) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/v1/customer/me/detail`, {
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const UserDtailUpdateApi = async (token, formData) => {
  try {
    const res = await axios.put(
      `${BASE_URL}/api/v1/customer/me/detail`,
      formData, // formData를 PUT 요청의 body로 전송
      {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // 이미지 파일을 포함한 formData 전송
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("User detail update failed:", error);
    throw error;
  }
};
