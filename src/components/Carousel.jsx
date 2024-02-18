import React from "react";
import CarouselRightBtn from "./CarouselRightBtn";
import CarouselLeftBtn from "./CarouselLeftBtn";
import CarouselItem from "./CarouselItem";
const Carousel = () => {
  return (
    <div className="flex-col">
      <div className="flex items-center justify-center">
        <div className="flex w-full items-center justify-center lg:w-8/12">
          <CarouselLeftBtn />
          <div className="mx-6 flex gap-6 max-lg:mx-4 max-lg:flex-col xl:mx-8">
            <CarouselItem side="left" />
            <CarouselItem side="right" />
          </div>

          <CarouselRightBtn />
        </div>
      </div>
      <div className="mt-12 flex justify-center gap-4">
        <Indicator active />
        <Indicator />
      </div>
    </div>
  );
};
export default Carousel;

const Indicator = ({ active }) => {
  const style = {
    width: 20,
    height: 15,
    clipPath: `polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)`,
    backgroundColor: active ? "#624963" : "#D0C9D1",
  };
  return <div style={style}></div>;
};
