import "@/components/search/sideOpenBody/DefaultBody.css";
import seoulPark from "@/assets/seoulPark.jpeg";
import FavoriteButton from "@/components/search/sideOpenBody/reuse/FavoriteButton.jsx";
import RealTimeStateColor from "@/components/search/sideOpenBody/reuse/RealTimeStateColor.jsx";
import useSidebarStore from "@/stores/useSidebarStore";

function DefaultBody() {
  const { setSelectedKey } = useSidebarStore();
  return (
    <section className="ParkingLotSection">
      <article className="ParkingLotComponent">
        <RealTimeStateColor />
        <div className="parkingLotImg" onClick={() => setSelectedKey('details')}>
          <img src={seoulPark} alt="seoulPark" />
        </div>
        <div className="parkingLotInfo_1">
          <p onClick={() => setSelectedKey('details')}>서울대공원 주차장</p>
          <p>공영주차장</p>
        </div>
        <div className="parkingLotInfo_2">
          <p>영업중 | 20:00에 영업 종료</p>
          <FavoriteButton />
        </div>
      </article>
      <article className="ParkingLotComponent">
        <RealTimeStateColor />
        <div className="parkingLotImg" onClick={() => setSelectedKey('details')}>
          <img src={seoulPark} alt="seoulPark" />
        </div>
        <div className="parkingLotInfo_1">
          <p onClick={() => setSelectedKey('details')}>서울대공원 주차장</p>
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
