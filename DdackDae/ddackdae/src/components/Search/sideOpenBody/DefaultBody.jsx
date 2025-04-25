import "@/components/Search/SideOpenBody/DefaultBody.css";
import seoulPark from "@/assets/seoulPark.jpeg";
import { useState } from "react";
import FavoritButton from "@/components/search/sideOpenBody/reuse/FavoritButton";

function DefaultBody() {
  const [star, setStar] = useState(false);
  const [stateColor, setStateColor] = useState("redColor");

  //   주차장 상태에 따른 색상 변경
  const viewColor = {
    redColor: "redColor",
    orangeColor: "orangeColor",
    greenColor: "greenColor",
    blueColor: "blueColor",
  };

  // 찜하기 버튼
  const favoriteStar = () => {
    setStar((o) => !o);
  };

  return (
    <section>
      <article className="ParkingLotComponent">
        <div className="numberOfParking">
          <p className={`parkingLotState ${viewColor[stateColor]}`}>만차</p>
          <p>주차가능대수 0/1000</p>
        </div>
        <div className="parkingLotImg">
          <img src={seoulPark} alt="seoulPark" />
        </div>
        <div className="parkingLotInfo_1">
          <p>서울대공원 주차장</p>
          <p>공영주차장</p>
        </div>
        <div className="parkingLotInfo_2">
          <p>영업중 | 20:00에 영업 종료</p>
          <p className={`${star ? "favorite" : "notFavorite"}`}>
            <FavoritButton />
          </p>
        </div>
      </article>
    </section>
  );
}

export default DefaultBody;
