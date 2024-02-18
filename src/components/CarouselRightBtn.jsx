import React, { useState } from "react";
import RightArrow from "./RightArrow";
import { Color } from "../utils/contanst";

const CarouselRightBtn = () => {
  const [isHover, setIsHover] = useState(false);

  const height = 50;
  const bgColor = Color.Primary;

  const lineStyle = {
    width: 12,
    height: height,
    clipPath: "polygon(80% 0px, 100% 0, 20% 100%, 0 100%)",
    backgroundColor: bgColor,
  };

  const mainBgStyle = {
    width: isHover ? 66 : 60,
    height: height,
    clipPath: "polygon(16% 0px, 100% 0, 100% 100%, 0 100%)",
    backgroundColor: bgColor,
    marginLeft: isHover ? -12 : -6,
    transition: "all .2s linear",
  };

  return (
    <div
      className="flex transition-all ease-linear"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div style={lineStyle}></div>
      <div style={mainBgStyle} className="flex justify-end">
        <div className="flex h-full w-[84%] items-center justify-center">
          <RightArrow color="white" />
        </div>
      </div>
    </div>
  );
};
export default CarouselRightBtn;
