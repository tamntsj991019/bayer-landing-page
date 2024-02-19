import React, { useState } from "react";
import { Color } from "../../../utils/contanst";

const MenuItem = (props) => {
  const { className, label, selected, onClick = () => {} } = props;
  const commonStyle = {
    transition: "all .25s linear",
  };
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`relative flex h-[72px] w-[163px] cursor-pointer items-center ${className}`}
      onClick={onClick}
    >
      <div
        className=" absolute left-0 m-[-10px] h-full w-[20px]"
        style={{
          ...commonStyle,
          clipPath: `polygon(80% 0%, 100% 0%, 20% 100%, 0% 100%)`,
          backgroundColor: Color.PinkPrimary_Menu,
          opacity: selected || hover ? "1" : "0",
        }}
      />

      <div
        className="relative h-full w-[163px]"
        style={{
          ...commonStyle,
          clipPath: `polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)`,
        }}
      >
        <div
          className="menu-item-bg1 absolute right-0 top-0 h-full w-full"
          style={{
            ...commonStyle,
            backgroundColor: Color.GreenPrimary_Menu,
            clipPath: `polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)`,
          }}
        />
        <div
          className="absolute right-0 top-0 h-full"
          style={{
            ...commonStyle,
            backgroundColor: Color.PinkPrimary_Menu,
            width: selected || hover ? "100%" : 0,
            clipPath: `polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)`,
          }}
        />
        <div
          className="menu-item absolute right-0 top-0 flex h-full w-full items-center text-center text-[24px] font-light tracking-[0] text-white"
          style={{ ...commonStyle }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <span className=" w-full">{label}</span>
        </div>
      </div>

      {/* <div
        className="menu-item-bg2 absolute right-0 top-0 h-full w-[163px]"
        style={{
          clipPath: `polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)`,
          backgroundColor: Color.PinkPrimary_Menu,
          transition: "all .3s linear",
          width: 0,
        }}
      />

      <div className="menu-item absolute top-0  h-full w-[163px] items-center text-center text-[24px] font-light tracking-[0] text-white">
        {label}
      </div> */}

      {/* {selected && (
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
      </div> */}
    </div>
  );
};
export default MenuItem;
