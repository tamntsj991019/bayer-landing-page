// Cơ chế
import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { Color } from "../../../utils/contanst";
import { RightArrow } from "../../../components";
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

  const listItems = [
    {
      SrcImg_L: Mechanism_1_L,
      SrcImg_R: Mechanism_1_R,
    },
    {
      SrcImg_L: Mechanism_2_L,
      SrcImg_R: Mechanism_2_R,
    },
  ];
  const lstImg = [Mechanism_1_L, Mechanism_1_R, Mechanism_2_L, Mechanism_2_R];

  const prev = () => {
    if (currentCarouselIndex == 0) {
      setCurrentCarouselIndex(listItems.length - 1);
    } else {
      setCurrentCarouselIndex(currentCarouselIndex - 1);
    }
  };
  const next = () => {
    if (currentCarouselIndex == listItems.length - 1) {
      setCurrentCarouselIndex(0);
    } else {
      setCurrentCarouselIndex(currentCarouselIndex + 1);
    }
  };

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
            <div onClick={prev}>
              <CarouselLeftBtn />
            </div>
            <div className="flex h-[16.625rem] w-[59.75rem] justify-between">
              <Item_1_L />
            </div>
            <div onClick={next}>
              <CarouselRightBtn />
            </div>
          </div>
          <div className="mt-[3.25rem] flex justify-center gap-[1rem]">
            {listItems?.map((x, i) => (
              <Indicator
                active={currentCarouselIndex == i}
                onClick={() => setCurrentCarouselIndex(i)}
              />
            ))}
          </div>
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

const MainFrame_1 = ({ textL, textR }) => {
  return (
    <div className="flex h-[16.625rem] w-[59.75rem] justify-between">
      <MainFrameSide text={textL} />
      <MainFrameSide text={textR} />
    </div>
  );
};
const MainFrame_2 = ({ textL, textR }) => {
  return (
    <div className="flex h-[16.625rem] w-[59.75rem] justify-between">
      <MainFrameSide text={textL} />
      <MainFrameSide text={textR} />
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

const Item_1_L = () => {
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
          <b className="mr-[3.62rem] text-[1.25rem] text-white">HOẠT CHẤT</b>
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
            100g triafamone <br /> (Suffonanilides, <b>HRAC 2</b>)
          </span>
          <span>
            200g tefuryltrione <br /> (Triketones, <b>HRAC 27</b>)
          </span>
        </div>
      </div>
    </MainFrameSide>
  );
};

const Carousel = () => {
  return <div className="h-[16.625rem] w-[59.75rem]"></div>;
};

const CarouselTest = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="flex">
      <div onClick={prev}>
        <CarouselLeftBtn />
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides}
        </div>
      </div>

      <div onClick={next}>
        <CarouselRightBtn />
      </div>
      {/* <div className=" inset-0 flex items-center justify-between p-4"></div> */}
      {/* <div className=" bottom-4 right-0 left-0">
				<div className="flex items-center justify-center gap-2">
					{slides.map((s, i) => (
						<div
							key={i}
							className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${
								curr === i ? "p-0.5" : "bg-opacity-50"
							}`}
						/>
					))}
				</div>
			</div> */}
    </div>
  );
};
