import React, { useRef } from "react";
import { Banner } from "../../assets";
import MenuItem from "./paths/MenuItem";
import useHook from "./hooks/useHook";
import Dominance from "./paths/Dominance";
import Mechanism from "./paths/Mechanism";
import Convenient from "./paths/Convenient";
import BroadSpectrumEffectiveness from "./paths/BroadSpectrumEffectiveness";
import UnlimitedRiceType from "./paths/UnlimitedRiceType";
import UserManual from "./paths/UserManual";
import NotesWhenUsing from "./paths/NotesWhenUsing";

const Home = (props) => {
  const { setSelectedMenu, listMenu, selectedMenu, constMenu } = useHook(props);
  const refDominance = useRef();
  const refMechanism = useRef();
  const refConvenient = useRef();
  const refBroadSpectrumEffectiveness = useRef();
  const refUserManual = useRef();
  const commonHeight = 100;

  const onClickMenuItem = (value) => {
    setSelectedMenu(value);
    let top = 0;
    switch (value) {
      case constMenu.Dominance:
        top = refDominance?.current?.offsetTop;
        break;
      case constMenu.Mechanism:
        top = refMechanism?.current?.offsetTop;
        break;
      case constMenu.Convenient:
        top = refConvenient?.current?.offsetTop;
        break;
      case constMenu.BroadSpectrumEffectiveness:
        top = refBroadSpectrumEffectiveness?.current?.offsetTop;
        break;
      case constMenu.UserManual:
        top = refUserManual?.current?.offsetTop;
        break;
      default:
        break;
    }

    window.scrollTo({
      top: top - commonHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full ">
      <img src={Banner} alt="banner" className="w-full" />
      <div className="sticky top-0 z-[999] mt-4 flex items-center bg-white py-3.5">
        <div className="h-[3.75rem] w-full bg-[#443247]"></div>
        <div className="absolute right-[9.05rem] flex items-center">
          {listMenu?.map((x, i) => (
            <MenuItem
              label={x.label}
              key={i}
              className="ml-[27px]"
              selected={selectedMenu == x.value}
              onClick={() => onClickMenuItem(x.value)}
            />
          ))}
        </div>
      </div>

      <div ref={refDominance}>
        <Dominance />
      </div>
      <div ref={refMechanism}>
        <Mechanism />
      </div>
      <div ref={refConvenient}>
        <Convenient />
      </div>
      <div ref={refBroadSpectrumEffectiveness}>
        <BroadSpectrumEffectiveness />
      </div>
      <UnlimitedRiceType />
      <div ref={refUserManual}>
        <UserManual />
      </div>
      <NotesWhenUsing />
    </div>
  );
};

export default Home;
