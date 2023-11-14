import { Color } from "../utils/contanst";
import RightArrow from "./RightArrow";

const CarouselNextBtn = (props) => {
  return (
    <div className="" {...props}>
      <div className=" relative h-[52px] w-[68.5px]">
        <svg
          className="absolute left-0"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="52"
          viewBox="0 0 14 52"
          fill="none"
        >
          <path d="M14 0L2.53722 52H0L11.4628 0H14Z" fill={Color.Primary} />
        </svg>
        <svg
          className="absolute left-[7px]"
          xmlns="http://www.w3.org/2000/svg"
          width="62"
          height="52"
          viewBox="0 0 62 52"
          fill="none"
        >
          <path
            d="M10.926 6.8873e-06L61.5 0V52L0 52L10.926 6.8873e-06Z"
            fill={Color.Primary}
          />
        </svg>
        <RightArrow
          className="absolute right-[9.5px] top-[8px]"
          color="white"
        />
      </div>
    </div>
  );
};

export default CarouselNextBtn;
