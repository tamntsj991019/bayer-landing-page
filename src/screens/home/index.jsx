import React from "react";
import { Banner } from "../../assets";
import MenuItem from "./components/MenuItem";
import useHook from "./hooks/useHook";
import Dominance from "./components/Dominance";

const Home = (props) => {
  const { setSelectedMenu, listMenu, selectedMenu } = useHook(props);

  return (
    <div className="w-full">
      <img src={Banner} alt="banner" className="w-full" />

      <div className="relative mt-4 flex items-center py-3.5">
        <div className="h-[3.75rem] w-full bg-[#443247]"></div>
        <div className="absolute right-[9.05rem] flex items-center">
          {listMenu?.map((x, i) => (
            <MenuItem
              label={x.label}
              key={i}
              className="ml-[27px]"
              selected={selectedMenu == i}
              onClick={() => setSelectedMenu(i)}
            />
          ))}
        </div>
      </div>

      <Dominance />
    </div>
  );
};

export default Home;
