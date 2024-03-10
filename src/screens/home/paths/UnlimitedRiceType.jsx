// Không giới hạn giống lúa sử dụng
import React, { useEffect, useRef, useState } from "react";
import Title from "../components/Title";
import { URT_1, URT_2 } from "../imgs";
import { Children } from "react";
import { Color } from "../../../utils/contanst";

const height = "md:h-[325px]";
const layerTransition = "all .3s linear";
const imgTransition = "all .3s linear";
const UnlimitedRiceType = (props) => {
  return (
    <div className="mt-[3.6rem]">
      <Title text="Không giới hạn giống lúa sử dụng" />
      <div className="mt-[2rem] grid grid-cols-1 gap-[1.56rem] px-3 lg:grid-cols-2 ">
        <div className="flex justify-center lg:justify-end">
          <FrameLeft
            srcImg={URT_1}
            text="Lúa vẫn phát triển bình thường."
            label="COUNCIL® COMPLETE 300 SC"
          />
        </div>
        <div className="flex justify-center lg:justify-start">
          <FrameRight
            srcImg={URT_2}
            text="Hiện tượng se đọt 16 ngày sau khi phun thuốc khác trên giống Đài Thơm 8."
            label="THUỐC KHÁC"
          />
        </div>
      </div>
    </div>
  );
};

export default UnlimitedRiceType;

const FrameLeft = ({ srcImg, text, label }) => {
  const refImg = useRef();
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`relative w-full overflow-hidden border md:w-[35.25rem] ${height}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img
          ref={refImg}
          src={srcImg}
          alt="Unlimited-Rice-Type"
          className={`h-full w-full ${isHover ? "scale-[1.1]" : "scale-[1]"}`}
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
          <div className="flex h-full items-center pe-[2.68rem] ps-[1.37rem] text-[1.25rem] font-medium text-white">
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
      <b
        className="mt-[1.26rem] px-[1.8rem] py-[0.31rem] text-white"
        style={{ backgroundColor: Color.GreenPrimary }}
      >
        {label}
      </b>
    </div>
  );
};

const FrameRight = ({ srcImg, text, label }) => {
  const refImg = useRef();
  const [isHover, setIsHover] = useState(false);
  const [imgHeight, setImgHeight] = useState(325);
  useEffect(() => {
    setImgHeight(refImg?.current?.clientHeight);
  }, [refImg?.current?.clientHeight]);
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`relative w-full overflow-hidden border md:w-[35.25rem] ${height}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img
          ref={refImg}
          src={srcImg}
          alt="Unlimited-Rice-Type"
          className={`h-full w-full ${isHover ? "scale-[1.1]" : "scale-[1]"}`}
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
            className="flex h-full items-center pe-[2.68rem] ps-[1.37rem] text-[1.25rem] font-medium text-white"
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
      <b
        className="mt-[1.26rem] px-[1.8rem] py-[0.31rem] text-white"
        style={{ backgroundColor: Color.OrangePrimary }}
      >
        {label}
      </b>
    </div>
  );
};
