import React, { useState } from "react";
import { Color } from "../../../utils/contanst";

const MenuItem_Lg = (props) => {
  const { className, label, selected, onClick = () => {} } = props;
  const commonStyle = {
    transition: "all .25s linear",
  };
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative hidden h-full w-[8rem] max-lg:flex max-md:hidden"
      style={{
        backgroundColor: Color.GreenPrimary_Menu,
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div
        className={`absolute right-0 top-0 h-full ${selected || hover ? "w-full" : "w-0"}`}
        style={{
          ...commonStyle,
          backgroundColor: Color.PinkPrimary_Menu,
        }}
      ></div>
      <div
        className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-center text-[18px] text-white"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {label}
      </div>
    </div>
  );
};
export default MenuItem_Lg;
