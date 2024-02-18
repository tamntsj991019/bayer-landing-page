// Cơ chế
import React, { useState } from "react";
import Title from "../components/Title";
import Carousel from "../../../components/Carousel";
import { Color } from "../../../utils/contanst";

const Mechanism = (props) => {
  return (
    <div
      className="mt-[3.6rem] bg-[#66B51233] pb-14 pt-[1.31rem] text-center"
      style={{ color: Color.PrimaryText }}
    >
      <Title text="Cơ chế" />
      <b className="pt-2 text-[18px]">
        TÊN SẢN PHẨM: COUNCIL® COMPLETE 300 SC
      </b>
      <div className="pt-8">
        <CarouselTest />
      </div>
    </div>
  );
};

export default Mechanism;
const slides = [
  { id: 1, content: "Slide 1", color: "bg-gray-300" },
  { id: 2, content: "Slide 2", color: "bg-blue-300" },
  { id: 3, content: "Slide 3", color: "bg-green-300" },
];
const CarouselTest = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <div className="relative h-64 w-8/12 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute h-full w-full transform transition-transform duration-300 ${
            index === currentSlide ? "" : "translate-x-full"
          } ${slide.color} flex items-center justify-center`}
        >
          {slide.content}
        </div>
      ))}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 transform bg-gray-800 px-4 py-2 text-white"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 transform bg-gray-800 px-4 py-2 text-white"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};
