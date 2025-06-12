import "@/components/search/sideOpenBody/reuse/reuse.css";
import { FaStar } from "react-icons/fa";
import {
  FavoritesApi,
  FavoritesAddApi,
  FavoritesRemoveApi,
} from "@/api/FavoritesApi";
import useFavoriteStore from "@/stores/useFavoriteStore";
import useUserLoginStore from "@/stores/UserLoginStore";

function FavoriteButton(id) {
  const { favoritesList, setFavoritesList } = useFavoriteStore();
  const { isLoggedIn } = useUserLoginStore();
  console.log(isLoggedIn);
  // 찜하기 버튼
  const favoriteStatus = async () => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      return;
    } else {
      const isAlreadyFavorite = favoritesList.some(
        (item) => item.id === id.parkingLotId
      );
      try {
        if (!isAlreadyFavorite) {
          const FavoritesAdded = await FavoritesAddApi(id.parkingLotId);
          console.log("FavoritesAdded.status", FavoritesAdded.status);
        } else if (isAlreadyFavorite) {
          const FavoritesRemoved = await FavoritesRemoveApi(id.parkingLotId);
          console.log(FavoritesRemoved);
        }
        const listUpdate = await FavoritesApi();
        setFavoritesList(listUpdate);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const isFavorited = favoritesList.some((item) => item.id === id.parkingLotId);

  return (
    <div className="FavoriteButton">
      <FaStar
        className={`${isFavorited ? "favorite" : "notFavorite"}`}
        onClick={favoriteStatus}
      />
    </div>
  );
}

export default FavoriteButton;
