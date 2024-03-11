import React, { Children, useEffect, useRef, useState } from "react";
import { Color } from "../../../utils/contanst";

const MenuItemDropdown = (props) => {
  const { children, onClick } = props;
  const refMD = useRef();
  const commonStyle = {
    transition: "all .25s linear",
  };
  const [hover, setHover] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [cssBottom, setCssBottom] = useState("");
  useEffect(() => {
    setCssBottom(``);
  }, [refMD?.current]);
  return (
    <div className="relative hidden h-full w-[3.75rem] items-center justify-center text-[22px] max-md:flex">
      <div
        className="rounded-lg border-2 px-2.5 py-0.5"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setOpenMenu(!openMenu)}
        style={{
          ...commonStyle,
          borderColor: hover ? Color.GreenPrimary_Menu : "white",
        }}
      >
        <i
          className="fa-solid fa-bars "
          style={{
            ...commonStyle,
            color: hover ? Color.GreenPrimary_Menu : "white",
          }}
        />
      </div>
      <div
        ref={refMD}
        className={`absolute right-2 w-[11rem] overflow-hidden rounded-lg border-2 border-[#443247] bg-white px-3 pb-2 pt-1`}
        style={{
          ...commonStyle,
          bottom: -refMD?.current?.clientHeight - 16,
          // height: openMenu ? "auto" : 0,
          padding: openMenu ? "" : 0,
          display: openMenu ? "inline" : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MenuItemDropdown;
