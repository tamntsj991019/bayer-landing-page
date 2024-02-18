import { useState } from "react";

const useHook = (props) => {
  const listMenu = [
    { label: "Ưu thế" },
    { label: "Cơ chế" },
    { label: "Tiện lợi" },
    { label: "Hiệu quả" },
    { label: "Hướng dẫn" },
  ];

  const [selectedMenu, setSelectedMenu] = useState(0);
  return { setSelectedMenu, listMenu, selectedMenu };
};

export default useHook;
