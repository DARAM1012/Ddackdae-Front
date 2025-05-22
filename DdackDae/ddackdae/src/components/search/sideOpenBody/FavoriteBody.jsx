import "@/components/search/sideOpenBody/FavoriteBody.css";
import FavoriteButton from "@/components/search/sideOpenBody/reuse/FavoriteButton.jsx";
import RealTimeStateColor from "@/components/search/sideOpenBody/reuse/RealTimeStateColor.jsx";
import useSidebarStore from "@/stores/useSidebarStore";

function FavoriteBody() {
  const { setSelectedKey } = useSidebarStore();
  return (
    <section>
      <article className="FavoriteList">
        <div className="StateColorAndFavorite">
          <RealTimeStateColor />
          <FavoriteButton />
        </div>
        <div className="FavoriteInfo_1" onClick={() => setSelectedKey('details')}>
          <p>서울대공원 주차장</p>
          <p>공영주차장</p>
        </div>
        <div className="FavoriteInfo_2" onClick={() => setSelectedKey('details')}>
          <p>영업중 | 20:00에 영업 종료</p>
          <p>경기 과천시 대공원광장로 102</p>
        </div>
      </article>
    </section>
  );
}

export default FavoriteBody;
