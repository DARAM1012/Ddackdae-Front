import axios from "axios";

export const SignupPostApi = async (userData, imageFile) => {
  try {
    const formData = new FormData();

    formData.append("signupRequestDto", JSON.stringify(userData));
    if (imageFile) {
      formData.append("profileImage", imageFile);
    }

    const res = await axios.post("http://34.47.87.26/api/v1/signup", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (e) {
    // console.error("에러 내용:", e.response?.data || e.message);
    throw e;  // 에러 던지기만 하고 alert는 호출부에서 처리
  }
};
