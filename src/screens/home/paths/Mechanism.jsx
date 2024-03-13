// Cơ chế
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { Color } from "../../../utils/contanst";
import { ReadHtmlRaw, RightArrow } from "../../../components";
import {
  Mechanism_1_L,
  Mechanism_1_R,
  Mechanism_2_L,
  Mechanism_2_R,
} from "../imgs";

const trans = {
  transition: "all .3s linear",
};
const Mechanism = (props) => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [widthScreen, setWidthScreen] = useState(0);
  useEffect(() => {
    setWidthScreen(window.innerWidth);
  }, [window.innerWidth]);
  const listText = [
    {
      titleL: "HOẠT CHẤT",
      textL:
        "100g triafamone <br /> (Suffonanilides, <b>HRAC 2</b>) <br /><br /> 200g tefuryltrione <br /> (Triketones, <b>HRAC 27</b>)",
      titleR: "CƠ CHẾ HOẠT ĐỘNG",
      textR:
        "Kết hợp 2 tác động diệt cỏ ALS và HPPD giúp phát huy tối đa hiệu quả. <br /> Hoạt chất được hấp thụ qua lá, rễ. Cỏ lập tức ngừng tăng trưởng, không tổng hợp được sắc tố, lá dần chuyển sang màu trắng và chết hẳn.",
      frameType: 1,
    },
    {
      titleL: "PHỔ DIỆT CỎ",
      textL:
        "Là thuốc diệt cỏ lúa chọn lọc, hậu nảy mầm, phổ rộng, hiệu quả vượt trội trên nhiều loại cỏ lúa quan trọng kể cả các loại cỏ khó trị như chác lác, lồng vực, đuôi phụng.",
      titleR: "THỜI ĐIỂM PHUN",
      textR: "Phun tóe 7 - 9 ngày sau sạ, sau khi lấy nước lần đầu.",
      frameType: 2,
    },
  ];

  const prev = () => {
    if (currentCarouselIndex == 0) {
      setCurrentCarouselIndex(listText.length - 1);
    } else {
      setCurrentCarouselIndex(currentCarouselIndex - 1);
    }
  };
  const next = () => {
    if (currentCarouselIndex == listText.length - 1) {
      setCurrentCarouselIndex(0);
    } else {
      setCurrentCarouselIndex(currentCarouselIndex + 1);
    }
  };
  console.log(window.innerWidth);
  let wrapperCss = [
    "flex w-[29.125rem] overflow-hidden max-xl:flex-col xl:h-[16.625rem] xl:w-[59.75rem] xl:justify-between",
    `max-xl:-translate-x-[${currentCarouselIndex * 100}%]`,
  ];
  return (
    <div
      className="mt-[3.6rem] bg-[#66B51233] pb-14 pt-[1.31rem] text-center"
      style={{ color: Color.PrimaryText }}
    >
      <Title text="Cơ chế" />
      <div className="mt-[0.5rem] text-[18px]">
        <b>TÊN SẢN PHẨM: COUNCIL® COMPLETE 300 SC</b>
      </div>
      <div className="mt-[2rem] flex justify-center">
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-[1.8rem]">
            {listText.length > 1 && (
              <span className="max-md:hidden">
                <CarouselLeftBtn onClick={prev} />
              </span>
            )}
            <div className={wrapperCss.join(" ")}>
              <span
                className="flex"
                style={{
                  ...trans,
                  transform:
                    widthScreen > 1280
                      ? `translateX(-${currentCarouselIndex * (100 / listText?.length || 1)}%)`
                      : `translateX(-${currentCarouselIndex * 100}%)`,
                }}
              >
                {listText?.map((x, i) => (
                  <MainFramFilter key={i} data={x} />
                ))}
              </span>
            </div>
            {listText.length > 1 && (
              <span className="max-md:hidden">
                <CarouselRightBtn onClick={next} />
              </span>
            )}
          </div>

          {listText.length > 1 && (
            <div className="mt-[3.25rem] flex justify-center gap-[1rem]">
              {listText?.map((x, i) => (
                <Indicator
                  key={i}
                  active={currentCarouselIndex == i}
                  onClick={() => setCurrentCarouselIndex(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mechanism;

const CarouselRightBtn = (props) => {
  const { onClick } = props;
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
      onClick={onClick}
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

const CarouselLeftBtn = (props) => {
  return (
    <div style={{ transform: "rotateY(180deg)" }}>
      <CarouselRightBtn {...props} />
    </div>
  );
};

const Indicator = ({ active, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        ...trans,
        width: 20,
        height: 15,
        clipPath: `polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)`,
        backgroundColor: active ? "#624963" : "#D0C9D1",
      }}
    />
  );
};

const MainFramFilter = ({ data }) => {
  switch (data.frameType) {
    case 1:
      return (
        <MainFrame>
          <Item_1_L title={data.titleL} text={data.textL} />
          <Item_1_R title={data.titleR} text={data.textR} />
        </MainFrame>
      );
    case 2:
      return (
        <MainFrame>
          <Item_2_L title={data.titleL} text={data.textL} />
          <Item_2_R title={data.titleR} text={data.textR} />
        </MainFrame>
      );
    default:
      return <></>;
  }
};

const MainFrame = ({ children }) => {
  return (
    <div>
      <div className="flex w-[29.125rem] overflow-hidden max-xl:flex-col max-xl:gap-[1.5rem] xl:h-[16.625rem] xl:w-[59.75rem] xl:justify-between">
        {children}
      </div>
    </div>
  );
};

const MainFrameSide = ({ children }) => {
  return (
    <div className="h-[16.625rem] w-[29.125rem] border border-[#FF3162] bg-white">
      {children}
    </div>
  );
};

const Item_1_L = ({ title, text }) => {
  return (
    <MainFrameSide>
      <div className="relative h-full w-full">
        <div
          className="absolute right-0 top-0 h-full w-[15rem] scale-[1.01] bg-[#44324780]"
          style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div
          className="absolute right-0 top-0 flex h-full w-[16.3125rem] scale-[1.01] items-center justify-end bg-[#443247cc]"
          style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <b className="mr-[3.62rem] text-wrap text-[1.25rem] text-white">
            <ReadHtmlRaw html={title} />
          </b>
        </div>
        <div
          className="absolute right-0 top-0 h-full w-[17.310rem] scale-[1.01] bg-[#FF3162]"
          style={{ clipPath: "polygon(31% 0, 31.5% 0, 0.5% 100%, 0% 100%)" }}
        />

        <div
          className="absolute left-0 top-0 flex h-full w-[16rem] flex-col justify-center gap-[1.13rem] ps-[0.87rem] text-left text-[1.125rem]"
          style={{ clipPath: "polygon(0% 0, 100% 0, 70% 100%, 0% 100%)" }}
        >
          <span>
            <ReadHtmlRaw html={text} />
          </span>
        </div>
      </div>
    </MainFrameSide>
  );
};

const Item_1_R = ({ title, text }) => {
  return (
    <MainFrameSide>
      <div className="relative h-full w-full">
        <div
          className="absolute left-0 top-0 h-full w-[10.9645rem] scale-[1.01] bg-[#24A0E380]"
          style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" }}
        />
        <div
          className="absolute left-0 top-0 flex h-full w-[11.962rem] scale-[1.01] items-center justify-end bg-[#24A0E3cc]"
          style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)" }}
        >
          <b className=" mr-[2.27rem] text-wrap ps-[1.25rem] text-start text-[1.25rem] text-white">
            <ReadHtmlRaw html={title} />
          </b>
        </div>
        <div
          className="absolute left-0 top-0 h-full w-[13.065rem] scale-[1.01] bg-[#FF3162]"
          style={{ clipPath: "polygon(99.5% 0, 100% 0, 60% 100%, 59.5% 100%)" }}
        />

        <div
          className="absolute right-0 top-0 flex h-full w-[18rem] flex-col justify-center px-[1rem] text-left text-[1.125rem]"
          style={{ clipPath: "" }}
        >
          <span>
            <ReadHtmlRaw html={text} />
          </span>
        </div>
      </div>
    </MainFrameSide>
  );
};

const Item_2_L = ({ title, text }) => {
  return (
    <MainFrameSide>
      <div className="relative h-full w-full">
        <div
          className="absolute right-0 top-0 h-full w-[11.28125rem] scale-[1.01] bg-[#44324780]"
          style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div
          className="absolute right-0 top-0 flex h-full w-[12.5rem] scale-[1.01] items-center justify-end bg-[#443247cc]"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <b className="ml-[2.6rem] mr-[1rem] text-wrap text-[1.25rem] text-white">
            <ReadHtmlRaw html={title} />
          </b>
        </div>
        <div
          className="absolute right-0 top-0 h-full w-[13.5rem] scale-[1.01] bg-[#FF3162]"
          style={{ clipPath: "polygon(45% 0, 45.5% 0, 0.5% 100%, 0% 100%)" }}
        />

        <div
          className="absolute left-0 top-0 flex h-full w-[16rem] flex-col justify-center gap-[1.13rem] ps-[0.87rem] text-left text-[1.125rem]"
          style={{ clipPath: "" }}
        >
          <span>
            <ReadHtmlRaw html={text} />
          </span>
        </div>
      </div>
    </MainFrameSide>
  );
};

const Item_2_R = ({ title, text }) => {
  return (
    <MainFrameSide>
      <div className="relative h-full w-full">
        <div
          className="absolute left-0 top-0 h-full w-[10.9645rem] scale-[1.01] bg-[#24A0E380]"
          style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" }}
        />
        <div
          className="absolute left-0 top-0 flex h-full w-[11.962rem] scale-[1.01] items-center justify-end bg-[#24A0E3cc]"
          style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)" }}
        >
          <b className=" mr-[2.27rem] text-wrap ps-[1.25rem] text-start text-[1.25rem] text-white">
            <ReadHtmlRaw html={title} />
          </b>
        </div>
        <div
          className="absolute left-0 top-0 h-full w-[13.065rem] scale-[1.01] bg-[#FF3162]"
          style={{ clipPath: "polygon(99.5% 0, 100% 0, 60% 100%, 59.5% 100%)" }}
        />

        <div
          className="absolute right-0 top-0 flex h-full w-[16rem] flex-col justify-center gap-[1.13rem] ps-[0.87rem] text-left text-[1.125rem]"
          style={{ clipPath: "" }}
        >
          <span>
            <ReadHtmlRaw html={text} />
          </span>
        </div>
      </div>
    </MainFrameSide>
  );
};
