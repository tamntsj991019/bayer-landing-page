// Hiệu quả phổ rộng
import React, { useState } from "react";
import Title from "../components/Title";
import {
  BSE_1a,
  BSE_1b,
  BSE_1c,
  BSE_2a,
  BSE_2b,
  BSE_2c,
  BSE_2d,
  BSE_3a,
  BSE_3b,
  BSE_3c,
  BSE_4a,
  BSE_4b,
} from "../imgs";
import { Color } from "../../../utils/contanst";

const trans = {
  transition: "all .3s linear",
};
const BroadSpectrumEffectiveness = (props) => {
  const [isExpand, setIsExpand] = useState(false);

  //[clip-path:polygon(0%_0%,100%_0%,85%_100%,0%_100%)]
  return (
    <div
      className={`relative mt-[3.6rem] flex ${isExpand ? "h-[1850px] max-xl:h-[3250px] max-md:h-[3550px]" : "  h-[450px] max-xl:h-[700px] max-md:h-[980px]"} flex-col items-center bg-[#66B51233] pt-[1.31rem]`}
      style={{
        ...trans,
      }}
    >
      <Title text="Hiệu quả phổ rộng" />

      <div className="hidden overflow-hidden pb-[11rem] xl:inline">
        <MainFrame
          bgStroke="#24A0E3"
          bgFill="#FF3162"
          text="Hiệu quả phổ rộng nhiều loại cỏ lúa quan trọng kể cả các loại cỏ khó trị như chác lác, lồng vực, đuôi phụng."
        >
          <div className="flex h-full">
            <img
              src={BSE_1a}
              alt="BSE_1a"
              className=" h-full"
              style={{
                clipPath: "polygon(0% 0%, 100% 0, 90% 100%, 0% 100%)",
              }}
            />
            <img
              src={BSE_1b}
              alt="BSE_1b"
              className=" h-full"
              style={{
                clipPath: "polygon(9% 0%, 100% 0, 91% 100%, 0% 100%)",
              }}
            />

            <div
              className="relative"
              style={{
                clipPath: "polygon(6% 0%, 100% 0, 100% 100%, 0% 100%)",
              }}
            >
              <img src={BSE_1c} alt="BSE_1c" className="h-full" />
              <div className="absolute right-0 top-0 flex w-[100%] justify-end text-right">
                <div className="h-[15vw] w-[58%] border-e-2 text-center">
                  <CoDrug />
                </div>
                <div className="h-[15vw] w-[38%] border-s-2 text-center">
                  <OtherDrug />
                </div>
              </div>
            </div>
          </div>
        </MainFrame>

        <div className="mt-[15rem]">
          <MainFrame
            bgStroke="#ED5F31"
            bgFill="#56475A"
            text="Cỏ chết hoàn toàn sau 7 ngày phun Council® Complete 300 SC"
          >
            <div className="flex flex-col gap-[2rem]">
              <div className="flex h-full">
                <img
                  src={BSE_2a}
                  alt="BSE_2a"
                  className="h-full"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0, 90% 100%, 0% 100%)",
                  }}
                />
                <img
                  src={BSE_2b}
                  alt="BSE_2b"
                  className="h-full"
                  style={{
                    clipPath: "polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)",
                  }}
                />
              </div>
              <div className="flex h-full">
                <div className="relative">
                  <img
                    src={BSE_2c}
                    alt="BSE_2c"
                    className="h-full"
                    style={{
                      clipPath: "polygon(0% 0%, 100% 0, 90% 100%, 0% 100%)",
                    }}
                  />
                  <div className="absolute left-0 top-0">
                    <CoDrug />
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={BSE_2d}
                    alt="BSE_2d"
                    className="h-full"
                    style={{
                      clipPath: "polygon(9% 0%, 100% 0, 100% 100%, 0% 100%)",
                    }}
                  />
                  <div className="absolute right-0 top-0">
                    <OtherDrug />
                  </div>
                </div>
              </div>
            </div>
          </MainFrame>
        </div>

        <div className="mt-[30rem]">
          <MainFrame bgStroke="#56475A" bgFill="#ED5F31" text="40 ngày sau sạ">
            <div className="flex h-full">
              <div className="relative">
                <img
                  src={BSE_3a}
                  alt="BSE_3a"
                  className="h-full"
                  style={{
                    clipPath: "polygon(0% 0%, 100% 0, 90% 100%, 0% 100%)",
                  }}
                />
                <div className="absolute bottom-0 flex w-full justify-center">
                  <OtherDrug text="RẤT NHIỀU CỎ" />
                </div>
              </div>
              <div className="relative">
                <img
                  src={BSE_3b}
                  alt="BSE_3b"
                  className=" h-full"
                  style={{
                    clipPath: "polygon(10% 0%, 100% 0, 90% 100%, 0% 100%)",
                  }}
                />
                <div className="absolute bottom-0 flex w-full justify-center">
                  <CoDrug text="SẠCH CỎ" />
                </div>
              </div>
              <div className="relative">
                <img
                  src={BSE_3c}
                  alt="BSE_3c"
                  className=" h-full"
                  style={{
                    clipPath: "polygon(9% 0%, 100% 0, 100% 100%, 0% 100%)",
                  }}
                />
                <div className="absolute bottom-0 flex w-full justify-center">
                  <OtherDrug text="CÒN SÓT CỎ" />
                </div>
              </div>
            </div>
          </MainFrame>
        </div>

        <div className="mt-[15rem]">
          <MainFrame
            bgStroke="#FF3162"
            bgFill="#24A0E3"
            text="60 ngày sau sạ - Demo Council® Complete 300 SC - Vị Bình, Vị Thủy, Hậu Giang"
          >
            <div className="flex flex-col gap-[1rem]">
              <div className="flex h-full">
                <div className="relative">
                  <img
                    src={BSE_4a}
                    alt="BSE_4a"
                    className="h-full"
                    style={{
                      clipPath: "polygon(0% 0%, 100% 0, 90% 100%, 0% 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 flex w-full justify-center">
                    <CoDrug text="SẠCH CỎ" />
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={BSE_4b}
                    alt="BSE_4b"
                    className=" h-full"
                    style={{
                      clipPath: "polygon(9% 0%, 100% 0, 100% 100%, 0% 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 flex w-full justify-center">
                    <OtherDrug />
                  </div>
                </div>
              </div>
            </div>
          </MainFrame>
        </div>
      </div>

      <div className="hidden flex-col items-center gap-[1rem] overflow-hidden max-xl:flex">
        <>
          <span className="mt-3 px-3">
            Hiệu quả phổ rộng nhiều loại cỏ lúa quan trọng kể cả các loại cỏ khó
            trị như chác lác, lồng vực, đuôi phụng.
          </span>
          <div className="flex w-full items-center justify-center gap-[1rem] max-md:flex-col">
            <span>
              <img src={BSE_1a} alt="BSE_1a" className="h-[15rem]" />
            </span>
            <span>
              <img src={BSE_1b} alt="BSE_1b" className="h-[15rem]" />
            </span>
          </div>

          <div className="relative">
            <img src={BSE_1c} alt="BSE_1c" className="h-[15rem] w-full" />
            <div className="absolute right-0 top-0 flex w-[100%] justify-end text-right">
              <div className="h-[15rem] w-[65%] border-e-2 text-center">
                <CoDrug />
              </div>
              <div className="h-[15rem] w-[38%] border-s-2 text-center">
                <OtherDrug />
              </div>
            </div>
          </div>
        </>

        <>
          <span className="mt-10 px-3">
            Cỏ chết hoàn toàn sau 7 ngày phun Council® Complete 300 SC
          </span>
          <span>
            <img src={BSE_2a} alt="BSE_2a" className="h-[15rem]" />
          </span>
          <span>
            <img src={BSE_2b} alt="BSE_2b" className="h-[15rem]" />
          </span>
          <div className="relative">
            <img src={BSE_2c} alt="BSE_2c" className="h-full" />
            <div className="absolute left-0 top-0">
              <CoDrug />
            </div>
          </div>
          <div className="relative">
            <img src={BSE_2d} alt="BSE_2d" className="h-full" />
            <div className="absolute right-0 top-0">
              <OtherDrug />
            </div>
          </div>
        </>

        <>
          <span className="mt-10 px-3">40 ngày sau sạ</span>
          <div className="relative">
            <img src={BSE_3a} alt="BSE_3a" className="h-[15rem]" />
            <div className="absolute bottom-0 flex w-full justify-center">
              <OtherDrug text="RẤT NHIỀU CỎ" />
            </div>
          </div>
          <div className="relative">
            <img src={BSE_3b} alt="BSE_3b" className="h-[15rem]" />
            <div className="absolute bottom-0 flex w-full justify-center">
              <CoDrug text="SẠCH CỎ" />
            </div>
          </div>
          <div className="relative">
            <img src={BSE_3c} alt="BSE_3c" className="h-[15rem]" />
            <div className="absolute bottom-0 flex w-full justify-center">
              <OtherDrug text="CÒN SÓT CỎ" />
            </div>
          </div>
        </>

        <>
          <span className="mt-10 px-3">
            60 ngày sau sạ - Demo Council® Complete 300 SC - Vị Bình, Vị Thủy,
            Hậu Giang
          </span>
          <div className="relative">
            <img src={BSE_4a} alt="BSE_4a" className="h-[15rem]" />
            <div className="absolute bottom-0 flex w-full justify-center">
              <CoDrug text="SẠCH CỎ" />
            </div>
          </div>
          <div className="relative">
            <img src={BSE_4b} alt="BSE_4b" className=" h-[15rem]" />
            <div className="absolute bottom-0 flex w-full justify-center">
              <OtherDrug />
            </div>
          </div>
        </>
      </div>

      <div className="absolute bottom-0 translate-y-1/2">
        <BottomButton
          isCollapse={!isExpand}
          onClick={() => setIsExpand(!isExpand)}
        />
      </div>
    </div>
  );
};

export default BroadSpectrumEffectiveness;

const BottomButton = ({ isCollapse, onClick }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="relative h-[3.25rem] w-[12.5rem] bg-[#FF3162]"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
    >
      <div
        className="absolute left-0 top-0 h-full"
        style={{
          ...trans,
          backgroundColor: Color.PinkPrimary_Menu,
          width: isHover ? "100%" : "9.5rem",
          clipPath: isHover
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
        }}
      ></div>
      <div
        className="absolute left-0 top-0 flex h-full w-full items-center justify-between pe-[1.31rem] ps-[1.81rem] text-white"
        style={{
          ...trans,
          paddingLeft: isHover ? "2rem" : "",
          paddingRight: isHover ? "1.5rem" : "",
        }}
      >
        <b>
          <i>{isCollapse ? "XEM THÊM" : "THU GỌN"}</i>
        </b>
        <i className={`fa-solid fa-angles-${isCollapse ? "down" : "up"}`}></i>
      </div>
    </div>
  );
};

const MainFrame = (props) => {
  const { bgStroke, bgFill, text, children } = props;

  return (
    <div className="relative w-[75rem]">
      <div className="flex flex-nowrap">
        <BgShape stroke={bgStroke} fill={bgFill} />
        <div className="ms-[1.56rem] mt-[1.31rem]">{text}</div>
      </div>
      <div className="absolute left-[2.75rem] top-[3.88rem] h-[15rem] w-full">
        {children}
      </div>
    </div>
  );
};

const CoDrug = ({ text }) => {
  return (
    <div
      className={`px-3 py-2 font-bold text-white`}
      style={{
        backgroundColor: Color.GreenPrimary,
      }}
    >
      {text || "COUNCIL® COMPLETE 300 SC"}
    </div>
  );
};
const OtherDrug = ({ text }) => {
  return (
    <div
      className={`px-3 py-2 font-bold text-white`}
      style={{
        backgroundColor: Color.OrangePrimary,
      }}
    >
      {text || "THUỐC KHÁC"}
    </div>
  );
};
const BgShape = (props) => {
  const { stroke, fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={257}
      height={142}
      fill="none"
    >
      <path stroke={stroke} d="m231.393.5-23.343 120H.5V.5h230.893Z" />
      <path fill={fill} d="M233.462 142H25V21h232l-23.538 121Z" />
    </svg>
  );
};
