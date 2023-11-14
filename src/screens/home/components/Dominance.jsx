// Ưu thế
import React from "react";
import { Color } from "../../../utils/contanst";
import { Banner } from "../../../assets";

const Dominance = (props) => {
  return (
    <div className="mt-[3.6rem]">
      <div className="flex items-center justify-center">
        <svg
          className="mr-[1rem]"
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="38"
          viewBox="0 0 61 38"
          fill="none"
        >
          <path
            d="M60.9681 0L52.9091 38H51.1253L59.1843 0H60.9681ZM53.6418 0L45.5828 38H43.799L51.858 0H53.6418ZM46.3154 0L38.2564 38H36.4726L44.5316 0H46.3154ZM39.1483 0L31.0893 38H29.3055L37.3645 0H39.1483ZM31.8219 0L23.7629 38H21.9791L30.0381 0H31.8219ZM24.4956 0L16.4366 38H14.6527L22.7118 0H24.4956ZM17.1692 0L9.11018 38H7.32637L15.3854 0H17.1692ZM9.84282 0L1.76789 38H0L8.05901 0H9.84282Z"
            fill={Color.Primary}
          />
        </svg>
        <span
          className="text-[3.25rem] font-light"
          style={{ color: Color.PrimaryText }}
        >
          Ưu thế
        </span>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-auto">
          <div className="relative mr-[1.56rem] flex items-center justify-center">
            <img
              src={Banner}
              alt="banner"
              className="h-[23.25rem] w-[41.3125rem]"
            />
            <svg
              className="absolute "
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
            >
              <path
                d="M69.9999 117.6C43.6799 117.6 22.3999 96.32 22.3999 70C22.3999 43.68 43.6799 22.4 69.9999 22.4C96.3199 22.4 117.6 43.68 117.6 70C117.6 96.32 96.3199 117.6 69.9999 117.6ZM69.9999 28C46.7599 28 27.9999 46.76 27.9999 70C27.9999 93.24 46.7599 112 69.9999 112C93.2399 112 112 93.24 112 70C112 46.76 93.2399 28 69.9999 28Z"
                fill="white"
              />
              <path
                d="M56 94.36V45.64L98 70L56 94.36ZM61.6 55.16V84.56L86.8 69.72L61.6 55.16Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div
          className="flex-col border p-[1.5rem]"
          style={{ borderColor: Color.Primary }}
        >
          <div
            className="text-[1.25rem] font-medium"
            style={{ color: Color.Primary }}
          >
            Những ưu thế VƯỢT TRỘI và KHÁC BIỆT
          </div>
          <div
            className="text-[1.25rem] font-medium"
            style={{ color: Color.PrimaryText }}
          >
            của COUNCIL COMPLETE 300SC
          </div>
          <div className="m-y-[1rem] w-full border-t" />
        </div>
      </div>
    </div>
  );
};

export default Dominance;
