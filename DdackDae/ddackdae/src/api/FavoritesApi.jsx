import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE;

// 찜 목록들
export const FavoritesApi = async () => {
  const token = localStorage.getItem("localToken");
  const favoritesRes = await axios.get(`${BASE_URL}/api/v1/favorites`, {
    headers: { Authorization: `Bearer ${token}` },
  }
);
console.log("찜한 목록들:", favoritesRes.data);
return favoritesRes.data;
};

// 찜 추가하기
export const FavoritesAddApi = async (parkingLotId) => {
  const token = localStorage.getItem("localToken") || "";
  console.log("내가 추가할 주차장은? ", parkingLotId);
  
  const favoritesAddRes = await axios.post(
    `${BASE_URL}/api/v1/favorites?parkingLotId=${parkingLotId}`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  console.log("찜 추가 결과: ", favoritesAddRes.data);
  return favoritesAddRes.data;
};

// 찜 삭제하기
export const FavoritesRemoveApi = async (parkingLotId) => {
  const token = localStorage.getItem("localToken") || "";
  console.log("내가 삭제할 주차장은? ", parkingLotId);

  const favoritesRemoveRes = await axios.delete(
    `${BASE_URL}/api/v1/favorites?parkingLotId=${parkingLotId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  console.log("찜 삭제 결과: ", favoritesRemoveRes.data);
  return favoritesRemoveRes.data;
};
