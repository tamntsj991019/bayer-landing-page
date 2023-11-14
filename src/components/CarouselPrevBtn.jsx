import CarouselNextBtn from "./CarouselNextBtn";

const CarouselPrevBtn = (props) => {
  return (
    <div className="abc" style={{ transform: "rotateY(180deg)" }}>
      <CarouselNextBtn {...props} />
      {/* <div className=" relative h-[52px] w-[68.5px]">
        <svg
          className="absolute right-0"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="52"
          viewBox="0 0 14 52"
          fill="none"
        >
          <path d="M0.5 0L11.9628 52H14.5L3.03722 0H0.5Z" fill={Color.Primary} />
        </svg>
        <svg
          className="absolute right-[7px]"
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="52"
          viewBox="0 0 62 52"
          fill="none"
        >
          <path
            d="M50.574 6.8873e-06L0 0V52L61.5 52L50.574 6.8873e-06Z"
            fill={Color.Primary}
          />
        </svg>

        <LeftArrow className="absolute left-[9.5px] top-[8px]" color="white" />
      </div> */}
    </div>
  );
};

export default CarouselPrevBtn;
