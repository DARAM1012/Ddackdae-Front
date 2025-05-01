import "./ReviewModal.css";
import { useState } from "react";
import titlelogo from "@/assets/logo.png";
import {FaXmark} from "react-icons/fa6";
import point1 from "@/assets/point1.png"
import point2 from "@/assets/point2.png"
function ReviewModal({ onClose }) {

  const [reviewtext, setreviewtext] = useState("")

  const reviewcomplete = (text) =>{
    alert(`     ${text}\n＼＿＿＿＿＿＿＿＿／\n　　ｏ\n　　 。\n　　　｡\n　　∧＿∧\n　 (*　･ω･)\n＿(__つ/￣￣￣/_\n　　＼/　　　/\n`)
    setreviewtext("");
  }

  const imageuploader = () => {
    alert(`이미지 ㅎㅎ`)
  }

  return (
    <div className="modal-backdrop">
      {/* <div className="modal-backdrop" onClick={onClose}> */}
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-div">
          <button className="modal-sign-close" onClick={onClose}>
            <FaXmark />
          </button>
          <div className="modal-sign-title">
            <h1>
              <img
                src={titlelogo}
                alt="titlelogo"
                className="modal-titlelogo"
              />
            </h1>
          </div>
          <div className="modal-review-subdiv">
{/* 별점 */}
            <div className="modal-review-pointdiv">
            <p>평점</p>
            <div className="modal-point"> <img
                src={point1}
                alt="point1"
                className="modal-point-image"
              />
               <img
                src={point1}
                alt="point1"
                className="modal-point-image"
              />
               <img
                src={point1}
                alt="point1"
                className="modal-point-image"
              />
               <img
                src={point1}
                alt="point1"
                className="modal-point-image"
              />
               <img
                src={point2}
                alt="point2"
                className="modal-point-image"
              />
              </div>
            </div>
            {/* 텍스트박스 */}
            <div className="modal-review-bodydiv">
<p>내용</p>
<div className="modal-review-bodytestbox">
<textarea
  value={reviewtext}
  onChange={(e) => setreviewtext(e.target.value)}
  placeholder="'-'제외, 숫자만 입력해주세요."
  className="modal-review-textarea"
/>
</div>
            </div>
{/* 사진 업로드 */}
            <div className="modal-review-imagediv">
<div className="modal-review-imagetitle">
<p>주차장 사진을 올려주세요. <span>(선택)</span></p>
</div>
<div className="modal-review-imagetest">
<p>주차장과 관련 없거나 부적합한 사진을 리뷰에 등록하시는 경우, 사전경고 없이
    <br />
    사진이 삭제될 수 있으며 이에 따른 법적 책임은 작성자에게 있습니다.
</p>
</div>
<div className="modal-review-imagebox">
<div className="modal-review-imageupload" onClick={imageuploader}>
<p>사진 업로드</p>
</div>
<div className="modal-review-imageupdate">
<p>주차장 사진</p>
</div>
</div>

<div className="modal-review-buttendiv">
<div className="modal-review-butten1" onClick={onClose}>
<p>작성취소</p>
</div>
<div className="modal-review-butten2" onClick={() => reviewcomplete(reviewtext)}>
<p>작성완료</p>
</div>
</div>
            </div>
    
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
