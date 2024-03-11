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
      className={`relative flex h-[4.5rem] w-[10.81588rem] cursor-pointer items-center ${className}`}
      onClick={onClick}
    >
      <div
        className="absolute left-0 m-[-10px] h-full w-[20px]"
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
    </div>
  );
};
export default MenuItem;
