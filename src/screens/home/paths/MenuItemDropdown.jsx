import React, { useEffect, useRef, useState } from "react";
import { Color } from "../../../utils/contanst";

const MenuItemDropdown = (props) => {
  const { listMenu, onClickMenuItem } = props;
  const commonStyle = {
    transition: "all .25s linear",
  };
  const [hover, setHover] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(-1);
  const [openMenu, setOpenMenu] = useState(false);

  const clickOutsideRef = useRef(null);
  const useClickOutside = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setHover(false);
          setHoverMenu(-1);
          setOpenMenu(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  useClickOutside(clickOutsideRef);

  const iconColor = openMenu
    ? Color.PinkPrimary_Menu
    : hover
      ? Color.GreenPrimary_Menu
      : "white";

  return (
    <div className="relative hidden h-full w-[3.75rem] items-center justify-center text-[22px] max-md:flex">
      <div
        className="rounded-lg border-2 px-2.5 py-0.5"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setOpenMenu(!openMenu)}
        style={{
          ...commonStyle,
          borderColor: iconColor,
        }}
      >
        <i
          className="fa-solid fa-bars "
          style={{
            ...commonStyle,
            color: iconColor,
          }}
        />
      </div>
      <div
        ref={clickOutsideRef}
        className={`absolute right-2 flex flex-col items-center justify-center gap-1 overflow-hidden rounded-lg bg-[#443247] text-center text-[18px] text-white shadow-lg`}
        style={{
          ...commonStyle,
          bottom: openMenu ? "-13rem" : 0,
          width: openMenu ? "10rem" : 0,
          height: openMenu ? "12rem" : 0,
          padding: openMenu ? "" : 0,
          opacity: openMenu ? 1 : 0,
          visibility: openMenu ? "visible" : "hidden",
        }}
      >
        {listMenu?.map((x, i) => (
          <div
            className="w-full text-nowrap py-0.5"
            key={i}
            onClick={() => onClickMenuItem(x.value)}
            onMouseEnter={() => setHoverMenu(i)}
            onMouseLeave={() => setHoverMenu(i)}
            style={{
              ...commonStyle,
              backgroundColor: hoverMenu == i ? Color.PinkPrimary_Menu : "",
              cursor: "pointer",
            }}
          >
            {x.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItemDropdown;
