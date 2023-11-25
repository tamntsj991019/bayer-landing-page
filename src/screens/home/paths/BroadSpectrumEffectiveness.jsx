// Hiệu quả phổ rộng
import React from "react";
import Title from "../components/Title";
import { BSE_1, BSE_2, BSE_3 } from "../imgs";

const BroadSpectrumEffectiveness = (props) => {
  return (
    <div className="mt-[3.6rem] bg-[#66B51233] py-[1.31rem] ">
      <Title text="Hiệu quả phổ rộng" />
      <div className="ms-[10vw] max-sm:ms-[3vw]">
        <div className="relative flex">
          <svg
            width="257"
            height="142"
            viewBox="0 0 257 142"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M231.393 0.5L208.05 120.5H0.5V0.5H231.393Z"
              stroke="#24A0E3"
            />
            <path d="M233.462 142H25V21H257L233.462 142Z" fill="#FF3162" />
          </svg>
          <div className="ms-[1.56rem] mt-[1.31rem] text-[0.8rem] md:text-sm xl:text-lg">
            Hiệu quả phổ rộng nhiều loại cỏ lúa quan trọng kể cả các loại cỏ khó
            trị như chác lác, lồng vực, đuôi phụng.
          </div>
        </div>

        <div className="flex h-[15vw] w-auto -translate-y-20 translate-x-12">
          <div className="w-[15vw] [clip-path:polygon(0%_0%,100%_0%,80%_100%,0%_100%)]">
            <img src={BSE_1} alt="" className="h-[15vw] w-[15vw]" />
          </div>
          <div className="-ml-[2vw] w-[20vw] [clip-path:polygon(15%_0%,100%_0%,85%_100%,0%_100%)]">
            <img src={BSE_2} alt="" className="h-[15vw] w-[20vw]" />
          </div>
          <div className="-ml-[2vw] w-[50vw] [clip-path:polygon(6%_0%,100%_0%,100%_100%,0%_100%)]">
            <img src={BSE_3} alt="" className="h-[15vw] w-[45vw]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadSpectrumEffectiveness;
