import React from "react";
import { Color } from "../utils/contanst";

const CarouselItem = ({ side }) => {
  const styleLayer1 = {
    // width: 466,
    height: 266,
    maxHeight: 266,
    backgroundColor: `white`,
    border: `1px solid ${Color.PinkPrimary_Menu}`,
  };
  const getRgbaLeft = (opacity) => `rgba(68, 50, 71, ${opacity})`;
  const styleLayer2_Left = {
    width: 240,
    backgroundColor: getRgbaLeft(`0.50`),
    clipPath: `polygon(9% 0%, 100% 0, 100% 100%, 0% 100%)`,
  };
  const styleLayer3_Left = {
    width: 261,
    backgroundColor: getRgbaLeft(`0.80`),
    clipPath: `polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)`,
  };

  const getRgbaRight = (opacity) => `rgba(36, 160, 227, ${opacity})`;
  const styleLayer2_Right = {
    width: 176,
    backgroundColor: getRgbaRight(`0.30`),
    clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)",
  };
  const styleLayer3_Right = {
    width: 192,
    backgroundColor: getRgbaRight(`1`),
    clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
  };

  const styleLine = {};

  return (
    <div
      className="relative max-sm:w-[300px] sm:w-[350px] md:w-[500px] lg:w-[400px] xl:w-[500px]"
      style={styleLayer1}
    >
      {side?.toLowerCase() == "left" && (
        <>
          <div
            className="absolute right-0 top-0 h-full"
            style={styleLayer2_Left}
          ></div>
          <div
            className="absolute right-0 top-0 h-full"
            style={styleLayer3_Left}
          ></div>
        </>
      )}
      {side?.toLowerCase() == "right" && (
        <>
          <div
            className="absolute left-0 top-0 h-full"
            style={styleLayer2_Right}
          ></div>
          <div
            className="absolute left-0 top-0 h-full"
            style={styleLayer3_Right}
          ></div>
        </>
      )}
    </div>
  );
};

export default CarouselItem;
