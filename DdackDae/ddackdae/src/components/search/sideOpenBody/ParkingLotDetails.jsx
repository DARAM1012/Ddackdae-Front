import "@/components/search/sideOpenBody/ParkingLotDetails.css";
import RealTimeStateColor from "@/components/search/sideOpenBody/reuse/RealTimeStateColor.jsx";
import seoulPark from "@/assets/seoulPark.jpeg";
import profileImg from "@/assets/logo2.png";
import {
  FaStar,
  FaPhone,
  FaMapMarker,
  FaClock,
  FaWonSign,
  FaStore,
  FaCommentDots,
  FaCommentMedical,
} from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import ReviewModal from "@/components/review/ReviewModal.jsx";

function ParkingLotDetails() {
  const [favoriteState, setFavoriteState] = useState(false);
  const [showReviewModal, setReviewModal] = useState(false);

  const closeReview = () => {
    setReviewModal(false);
  };

  // 공유하기 버튼 클릭 이벤트
  const ShareModal = () => {
    alert("복사되었습니다.");
  };

  // 리뷰작성하기 버튼 클릭 이벤트
  const WriteReview = () => {
    alert("리뷰작성하기 모달 연결해야지 얼른");
  };

  return (
    // 한개의 주차장 자세한 정보
    <section className="ParkingLotDetailsComponent">
      {/* 상단. 주차장 사진 및 간략정보 부분 */}
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
        </div>
      </article>

      {/* 중간. 찜, 거리뷰, 공유 부분 */}
      <article className="details3Buttons">
        <div
          className="details3Button"
          onClick={() => setFavoriteState((o) => !o)}
        >
          <FaStar className={`${favoriteState && "detailsFavorite"}`} />
          <p>찜하기</p>
        </div>
        <div className="detailsMiddleLine"></div>
        <div className="details3Button">
          <FaLocationDot />
          <p>거리뷰</p>
        </div>
        <div className="detailsMiddleLine"></div>
        <div
          className="details3Button"
          onClick={() => {
            ShareModal();
          }}
        >
          <FaArrowUpRightFromSquare />
          <p>공유</p>
        </div>
      </article>

      {/* 중간. 주차장 상세정보 부분 */}
      <article className="detailsInfo">
        <ul className="details-list">
          <li>
            <FaPhone className="detailsIcon" />
            <span className="detailsText">0507-0000-0000</span>
            <button className="detailsBtnCopy">복사</button>
          </li>
          <li>
            <FaMapMarker className="detailsIcon" />
            <span className="detailsText">대구 중구 중앙대로 398-4</span>
            <button className="detailsBtnCopy">복사</button>
          </li>
          <li>
            <FaClock className="detailsIcon" />
            <span className="detailsText">24시간 영업 | 연중무휴</span>
          </li>
          <li>
            <FaWonSign className="detailsIcon" />
            <span className="detailsLabel">30분(기본요금)</span>
            <span className="detailsValue">1,000원</span>
          </li>
          <li>
            <span className="detailsIcon"></span>
            <span className="detailsLabel">추가 10분당</span>
            <span className="detailsValue">500원</span>
          </li>
          <li>
            <span className="detailsIcon"></span>
            <span className="detailsLabel">1일 최대 금액</span>
            <span className="detailsValue">10,000원</span>
          </li>
          <li>
            <span className="detailsIcon"></span>
            <span className="detailsLabel">월차(지상)</span>
            <span className="detailsValue">150,000원</span>
          </li>
          <li>
            <span className="detailsIcon"></span>
            <span className="detailsLabel">월차(타워)</span>
            <span className="detailsValue">120,000원</span>
          </li>
          <li>
            <FaStore className="detailsIcon" />
            <span className="detailsText">
              남/녀 화장실 구분, 장애인, 간편결제
            </span>
          </li>
        </ul>
      </article>

      {/* 하단. 주차장 리뷰 부분 */}
      <article className="detailsReview">
        <div className="detailsReviewTitle">
          <div className="visitorReview">
            <span>
              <FaCommentDots />
            </span>
            <span>방문자 리뷰</span>
            <span>1,234</span>
          </div>
          <div
            className="WriteReview"
            onClick={() => {
              setReviewModal(true);
            }}
          >
            <span>
              <FaCommentMedical />
            </span>
            <span>리뷰 작성하기</span>
          </div>
        </div>
        <div className="detailsIndividualReview">
          <div className="reviewerInformation">
            <img src={profileImg} alt="" />
            <div className="reviewerNickname">
              <p>주차의신이다</p>
              <div className="visitorRating">
                <p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
                <p>2025.04.30(수)</p>
              </div>
            </div>
          </div>
          <p className="reviewContents">
            주차간격 넓고 좋아요.{"\n"}관리를 잘하시는 것 같아요.
          </p>
        </div>

        <div className="detailsIndividualReview">
          <div className="reviewerInformation">
            <img src={profileImg} alt="" />
            <div className="reviewerNickname">
              <p>주차의신이다</p>
              <div className="visitorRating">
                <p>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </p>
                <p>2025.04.30(수)</p>
              </div>
            </div>
          </div>
          <p className="reviewContents">주차간격 넓고 좋아요. 너무 잠오네요</p>
        </div>
      </article>

      {/* 중앙 리뷰 작성 모달 */}
      {showReviewModal && <ReviewModal onClose={closeReview} />}
    </section>
  );
}

export default ParkingLotDetails;
