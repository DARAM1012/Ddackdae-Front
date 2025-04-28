import { useState } from "react";
import '@/components/search/sideOpenBody/reuse/reuse.css'

function RealTimeStateColor() {
  const [stateColor, setStateColor] = useState("redColor");

    //   주차장 상태에 따른 색상 변경
    const viewColor = {
        redColor: "redColor",
        orangeColor: "orangeColor",
        greenColor: "greenColor",
        blueColor: "blueColor",
      };

  return (
    <div className="numberOfParking">
      <p className={`parkingLotState ${viewColor[stateColor]}`}>만차</p>
      <p>주차가능대수 0/1000</p>
    </div>
  );
}

export default RealTimeStateColor;
