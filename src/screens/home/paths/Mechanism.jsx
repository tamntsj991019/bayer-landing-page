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
  return (
    <div
      className="mt-[3.6rem] bg-[#66B51233] pb-14 pt-[1.31rem] text-center"
      style={{ color: Color.PrimaryText }}
    >
      <Title text="Cơ chế" />
      <b className="pt-2 text-[18px]">
        TÊN SẢN PHẨM: COUNCIL® COMPLETE 300 SC
      </b>
      <div className="flex justify-center">
        <div className="max-w-lg">
          <Carousel autoSlide>
            {/* {[...lstImg.map((s) => <img src={s} />)]} */}
            {[
              ...listItems.map((x, i) => (
                // <img src={x.SrcImg_L} alt={`srcImg-L-${i}`} />
                <div>
                  <CarouselItem
                    item={x}
                    index={i}
                    key={`Carousel-Item-${i}`}
                    active={currentCarouselIndex == i}
                    currentIndex={currentCarouselIndex}
                  />
                </div>
              )),
            ]}
          </Carousel>
        </div>
      </div>

      {/* <div className="relative z-10 mt-8 flex min-h-[333px] justify-center bg-red-500">
        <div className="left-50 absolute top-0 ">
          <div className="overflow-hodden relative">
            <div className="">
              {listItems?.map((x, i) => (
                <CarouselItem
                  item={x}
                  index={i}
                  key={`Carousel-Item-${i}`}
                  active={currentCarouselIndex == i}
                  currentIndex={currentCarouselIndex}
                />
              ))}
            </div>

            <div className="absolute -left-[94px] top-1/2 -translate-y-1/2">
              <CarouselLeftBtn
                onClick={() => {
                  if (currentCarouselIndex > 0) {
                    setCurrentCarouselIndex(currentCarouselIndex - 1);
                  }
                }}
              />
            </div>

            <div className="absolute -right-[94px] top-1/2 -translate-y-1/2">
              <CarouselRightBtn
                onClick={() => {
                  if (currentCarouselIndex < listItems.length - 1) {
                    setCurrentCarouselIndex(currentCarouselIndex + 1);
                  }
                }}
              />
            </div>

            <div className="absolute -bottom-[67px] flex w-full justify-center gap-[24px]">
              {Array(listItems?.length || 0)
                .fill()
                .map((x, i) => i)
                .map((num) => (
                  <Indicator active={num == currentCarouselIndex} />
                ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Mechanism;
const CarouselItem = ({ item, index, active, currentIndex }) => {
  return (
    // <div
    //   className={`flex transform gap-[24px] transition-transform duration-300 ${
    //     active ? "translate-x-0" : "-z-[50]  "
    //   } ${currentIndex < index ? "-translate-x-full" : "translate-x-full"}`}
    // >
    <div className="flex gap-[24px]">
      <span>
        <img src={item.SrcImg_L} alt={`srcImg-L-${index}`} />
      </span>
      <span>
        <img src={item.SrcImg_R} alt={`srcImg-R-${index}`} />
      </span>
    </div>
  );
};

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

const Indicator = ({ active }) => {
  const style = {
    width: 20,
    height: 15,
    clipPath: `polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)`,
    backgroundColor: active ? "#624963" : "#D0C9D1",
  };
  return <div style={style}></div>;
};

const Carousel = ({
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
      <div className="relative  overflow-hidden">
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
