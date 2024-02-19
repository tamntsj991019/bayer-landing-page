import { useState } from "react";

const useHook = (props) => {
  const constMenu = {
    Dominance: 1,
    Mechanism: 2,
    Convenient: 3,
    BroadSpectrumEffectiveness: 4,
    UserManual: 5,
  };

  const listMenu = [
    { value: constMenu.Dominance, label: "Ưu thế" },
    { value: constMenu.Mechanism, label: "Cơ chế" },
    { value: constMenu.Convenient, label: "Tiện lợi" },
    { value: constMenu.BroadSpectrumEffectiveness, label: "Hiệu quả" },
    { value: constMenu.UserManual, label: "Hướng dẫn" },
  ];

  const [selectedMenu, setSelectedMenu] = useState(constMenu.Dominance);
  return { setSelectedMenu, listMenu, selectedMenu, constMenu };
};

export default useHook;
