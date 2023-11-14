// Ưu thế
import React from "react";
import { Color } from "../../../utils/contanst";

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
    </div>
  );
};

export default Dominance;
