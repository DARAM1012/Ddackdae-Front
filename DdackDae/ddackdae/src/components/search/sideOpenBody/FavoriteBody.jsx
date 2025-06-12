import "@/components/search/sideOpenBody/FavoriteBody.css";
import FavoriteButton from "@/components/search/sideOpenBody/reuse/FavoriteButton.jsx";
import RealTimeStateColor from "@/components/search/sideOpenBody/reuse/RealTimeStateColor.jsx";
import useSidebarStore from "@/stores/useSidebarStore";
import useFavoriteStore from "@/stores/useFavoriteStore";
import { FavoritesApi } from "@/api/FavoritesApi";
import { useEffect } from "react";
import UserLoginStore from "@/stores/UserLoginStore";

function FavoriteBody() {
  const { setSelectedKey } = useSidebarStore();
  const { favoritesList, setFavoritesList } = useFavoriteStore();
  const now = new Date();
  const { isLoggedIn } = UserLoginStore();

  const CurrentStatus = (
    wdOperBgngTm, //평일시작
    wdOperEndTm, //평일종료
    weOperBgngTm, //주말시작
    weOperEndTm, //주말종료
    lhldyBgng, //공휴일시작
    lhldy //공휴일종료
  ) => {
    //현재시간을 2400처럼 만든다.
    const currentTime = now.getHours() * 100 + now.getMinutes();
    const today = now.getDay(); // 0(일요일) ~ 6(토요일)
    const isHoliday = lhldyBgng !== "0000" && lhldy !== "0000";
    const isWeekend = today === 0 || today === 6;

    let startTimeStr = "0000";
    let endTimeStr = "0000";

    if (isHoliday) {
      startTimeStr = lhldyBgng;
      endTimeStr = lhldy;
    } else if (isWeekend) {
      startTimeStr = weOperBgngTm;
      endTimeStr = weOperEndTm;
    } else {
      startTimeStr = wdOperBgngTm;
      endTimeStr = wdOperEndTm;
    }
    const startTime = parseInt(startTimeStr);
    const endTime = parseInt(endTimeStr);

    if (startTime === 0 && endTime === 0) return "휴무";

    // 2400은 0000으로 간주 (자정)
    // const normalizedEndTime = endTime === 2400 ? 0 : endTime;

    if (
      (startTime < endTime &&
        currentTime >= startTime &&
        currentTime < endTime) ||
      (startTime > endTime &&
        (currentTime >= startTime || currentTime < endTime)) || // 야간 운영 예외
      (endTime === 0 && currentTime >= startTime)
    ) {
      return "영업중";
    }
    return "영업종료";
  };

  const formatTimeString = (endTimeStr) => {
    const hours = endTimeStr.slice(0, 2);
    const minutes = endTimeStr.slice(2, 4);
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    if (isLoggedIn) {
      const fetchFavorites = async () => {
        const setFavoritesListData = await FavoritesApi();
        setFavoritesList(setFavoritesListData);
      };
      fetchFavorites();
    }
  }, []);

  return (
    <section className="FavoriteBody">
      {favoritesList.map((item, index) => (
        <article className="FavoriteList" key={index}>
          <div className="StateColorAndFavorite">
            <RealTimeStateColor />
            <FavoriteButton parkingLotId={item.id} />
          </div>
          <div
            className="FavoriteInfo_1"
            onClick={() => setSelectedKey("details")}
          >
            <p>{item.pkltNm}</p>
            <p>{item.pkltKndNm}</p>
          </div>
          <div
            className="FavoriteInfo_2"
            onClick={() => setSelectedKey("details")}
          >
            <p>
              {CurrentStatus(
                item.wdOperBgngTm, //평일시작
                item.wdOperEndTm, //평일종료
                item.weOperBgngTm, //주말시작
                item.weOperEndTm, //주말종료
                item.lhldyBgng, //공휴일시작
                item.lhldy //공휴일종료
              )}{" "}
              | {formatTimeString(item.wdOperEndTm)}에 영업 종료
            </p>
            <p>{item.addr}</p>
          </div>
        </article>
      ))}
      {favoritesList.length === 0 && (
        <article className="notFavoriteList">찜한 주차장이 없어요.</article>
      )}
    </section>
  );
}

export default FavoriteBody;
