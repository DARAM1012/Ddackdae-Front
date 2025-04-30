import "./EditUserInformationModal.css";
import { useState } from "react";
import titlelogo from "@/assets/logo.png";
import {FaXmark} from "react-icons/fa6";

function ReviewModal({ onClose }) {
  const profileattack = (e) => {
    e.preventDefault();
  };

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
          <div className="modal-subdiv">
    유저 에디트
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
