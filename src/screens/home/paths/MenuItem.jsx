import React from "react";
import { Color } from "../../../utils/contanst";

const MenuItem = (props) => {
  const { className, label, selected, onClick = () => {} } = props;
  return (
    <div
      className={`flex cursor-pointer items-center ${className}`}
      onClick={onClick}
    >
      {selected && (
        <svg
          className="m-[-9px]"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="72"
          viewBox="0 0 20 72"
          fill="none"
        >
          <path
            d="M19.2116 0L3.48171 72H0L15.7299 0H19.2116Z"
            fill={selected ? Color.PinkPrimary_Menu : Color.GreenPrimary_Menu}
          />
        </svg>
      )}
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="163"
          height="72"
          viewBox="0 0 163 72"
          fill="none"
        >
          <path
            d="M1.34945 71L16.6409 1.00002L160.922 1L145.8 71L1.34945 71Z"
            fill={selected ? Color.PinkPrimary_Menu : Color.GreenPrimary_Menu}
            stroke={selected ? Color.PinkPrimary_Menu : Color.GreenPrimary_Menu}
            strokeWidth="2"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center ">
          <span className="text-[24px] font-light tracking-[0] text-white">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;
