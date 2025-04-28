import "@/components/Search/SideOpenBody/DefaultBody.css";
import seoulPark from "@/assets/seoulPark.jpeg";
import FavoriteButton from "@/components/search/sideOpenBody/reuse/FavoriteButton.jsx";
import RealTimeStateColor from "@/components/Search/sideOpenBody/reuse/RealTimeStateColor.jsx";

function DefaultBody() {
  return (
    <section>
      <article className="ParkingLotComponent">
        <RealTimeStateColor />
        <div className="parkingLotImg">
          <img src={seoulPark} alt="seoulPark" />
        </div>
        <div className="parkingLotInfo_1">
          <p>서울대공원 주차장</p>
          <p>공영주차장</p>
        </div>
        <div className="parkingLotInfo_2">
          <p>영업중 | 20:00에 영업 종료</p>
            <FavoriteButton />
        </div>
      </article>
    </section>
  );
}

export default DefaultBody;
