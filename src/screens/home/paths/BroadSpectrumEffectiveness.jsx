// Hiệu quả phổ rộng
import React from "react";
import Title from "../components/Title";
import { BSE_1, BSE_2, BSE_3 } from "../imgs";
import { Color } from "../../../utils/contanst";

const BroadSpectrumEffectiveness = (props) => {
  const translates = [
    "-translate-y-8 translate-x-6",
    "min-[460px]:-translate-y-14 min-[460px]:translate-x-10",
    "sm:-translate-y-12 sm:translate-x-8",
    "md:-translate-y-14 md:translate-x-10",
    "lg:-translate-y-12 lg:translate-x-8",
    "xl:-translate-y-16 xl:translate-x-16",
    "2xl:-translate-y-24 2xl:translate-x-20",
  ];

  const texts = [
    "2xl:ms-[2rem] 2xl:mt-[1.35rem] 2xl:text-[1.5rem]",
    "xl:ms-[1.8rem] xl:mt-[1.2rem] xl:text-[1.2rem]",
    "",
  ];

  return (
    <div className="mt-[3.6rem] bg-[#66B51233] py-[1.31rem] ">
      <Title text="Hiệu quả phổ rộng" />

      <div className="px-3">
        <div className="mb-3 text-center text-sm lg:hidden">
          Hiệu quả phổ rộng nhiều loại cỏ lúa quan trọng kể cả các loại cỏ khó
          trị như chác lác, lồng vực, đuôi phụng.
        </div>
        <div className="ms-[10vw] max-sm:ms-[5vw]">
          <div className="relative flex h-auto items-start">
            <div className="w-[30vw] sm:w-[20vw] lg:w-[15vw]">
              <svg
                className="h-auto"
                width="100%"
                // width="257"
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
            </div>
            <div className={`hidden lg:inline ${texts.join(" ")}`}>
              Hiệu quả phổ rộng nhiều loại cỏ lúa quan trọng kể cả các loại cỏ
              khó trị như chác lác, lồng vực, đuôi phụng.
            </div>
          </div>

          <div className={`flex h-[15vw] w-auto ${translates.join(" ")}`}>
            <div className="w-[20vw] [clip-path:polygon(0%_0%,100%_0%,80%_100%,0%_100%)]">
              <img src={BSE_1} alt="" className="h-[15vw] w-[20vw]" />
            </div>
            <div className="-ml-[3vw] w-[25vw] [clip-path:polygon(16%_0%,100%_0%,84%_100%,0%_100%)]">
              <img src={BSE_2} alt="" className="h-[15vw] w-[25vw]" />
            </div>
            <div className="relative -ml-[3vw] w-[35vw] [clip-path:polygon(11%_0%,100%_0%,100%_100%,0%_100%)] ">
              <img src={BSE_3} alt="" className="h-[15vw] w-[35vw]" />
              <div className="absolute right-0 top-0 flex w-[100%] justify-end text-right font-bold text-white">
                <div className="h-[15vw] w-[58%] border-e-2 text-center">
                  <div className={`bg-[${Color.GreenPrimary}]  py-2`}>
                    COUNCIL® COMPLETE 300 SC
                  </div>
                </div>
                <div className="h-[15vw] w-[35%] border-s-2 text-center">
                  <div className={`bg-[${Color.OrangePrimary}] py-2`}>
                    THUỐC KHÁC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BroadSpectrumEffectiveness;
