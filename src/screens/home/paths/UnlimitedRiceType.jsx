// Không giới hạn giống lúa sử dụng
import React, { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import { URT_1, URT_2 } from "../imgs";

const height = "md:h-[325px]";
const layerTransition = "all .3s linear";
const imgTransition = "all .3s linear";
const UnlimitedRiceType = (props) => {
  return (
    <div className="mt-[3.6rem]">
      <Title text="Không giới hạn giống lúa sử dụng" />
      <div className="mt-[2rem] grid grid-cols-1 gap-5 px-3 md:grid-cols-2 ">
        <div className="flex justify-center md:justify-end">
          <FrameLeft srcImg={URT_1} text="Lúa vẫn phát triển bình thường." />
        </div>
        <div className="flex justify-center md:justify-start">
          <FrameRight
            srcImg={URT_2}
            text="Hiện tượng se đọt 16 ngày sau khi phun thuốc khác trên giống Đài Thơm 8."
          />
        </div>
      </div>
    </div>
  );
};

export default UnlimitedRiceType;

const FrameLeft = ({ srcImg, text }) => {
  const refImg = useRef();
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`relative w-[565px] overflow-hidden border ${height}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        ref={refImg}
        src={srcImg}
        alt="Unlimited-Rice-Type"
        className={`h-full w-full ${isHover ? "scale-110" : "scale-100"}`}
        style={{
          transition: imgTransition,
        }}
      />

      <div
        className={`absolute left-0 top-0 h-full bg-[#2b66384d] `}
        style={{
          width: isHover ? 0 : 175,
          // height: refImg?.current?.clientHeight,
          clipPath: isHover
            ? "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)"
            : "polygon(0% 0%, 100% 0, 92% 100%, 0% 100%)",
          transition: layerTransition,
        }}
      />
      <div
        className={`absolute left-0 top-0 h-full bg-[#2b6638b3]`}
        style={{
          width: isHover ? 0 : 196,
          // height: refImg?.current?.clientHeight,
          clipPath: isHover
            ? "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)"
            : "polygon(0% 0%, 100% 0, 76% 100%, 0% 100%)",
          transition: layerTransition,
        }}
      >
        <div className="flex h-full items-center pe-[42px] ps-[22px] text-[20px] font-medium text-white">
          {text}
        </div>
      </div>

      <div
        className={`absolute left-0 top-0 h-full bg-[#00BBFE]`}
        style={{
          width: isHover ? 0 : 216,
          // height: refImg?.current?.clientHeight,/=
          clipPath: isHover
            ? "polygon(99% 1%, 100% 0, 100% 100%, 99% 100%)"
            : "polygon(99% 1%, 100% 0, 60% 100%, 59% 100%)",
          transition: layerTransition,
        }}
      />
    </div>
  );
};

const FrameRight = ({ srcImg, text }) => {
  const refImg = useRef();
  const [isHover, setIsHover] = useState(false);
  const [imgHeight, setImgHeight] = useState(325);
  useEffect(() => {
    setImgHeight(refImg?.current?.clientHeight);
  }, [refImg?.current?.clientHeight]);
  return (
    <div
      className={`relative w-[565px] overflow-hidden border ${height}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        ref={refImg}
        src={srcImg}
        alt="Unlimited-Rice-Type"
        className={`h-full w-full ${isHover ? "scale-110" : "scale-100"}`}
        style={{
          transition: imgTransition,
        }}
      />

      <div
        className={`absolute left-0 top-0 bg-[#ff31624d]`}
        style={{
          width: isHover ? 0 : 251,
          height: imgHeight,
          clipPath: isHover
            ? "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)"
            : "polygon(0% 0%, 100% 0, 92% 100%, 0% 100%)",
          transition: layerTransition,
        }}
      />
      <div
        className={`absolute left-0 top-0 bg-[#ff3162b3]`}
        style={{
          width: isHover ? 0 : 268,
          height: imgHeight,
          clipPath: isHover
            ? "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)"
            : "polygon(0% 0%, 100% 0, 76% 100%, 0% 100%)",
          transition: layerTransition,
        }}
      >
        <div
          className="flex h-full items-center pe-[42px] ps-[22px] text-[20px] font-medium text-white"
          style={{
            visibility: isHover ? "hidden" : "visible",
            transition: layerTransition,
          }}
        >
          {text}
        </div>
      </div>

      <div
        className={`absolute left-0 top-0 bg-[#10394F]`}
        style={{
          width: isHover ? 0 : 291,
          height: imgHeight,
          clipPath: isHover
            ? "polygon(99% 1%, 100% 0, 100% 100%, 99% 100%)"
            : "polygon(99% 1%, 100% 0, 63% 100%, 62% 100%)",
          transition: layerTransition,
        }}
      />
    </div>
  );
};
