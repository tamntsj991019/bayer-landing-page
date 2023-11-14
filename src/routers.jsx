// import { Home } from "../screens";

import { Home } from "./screens";

export const EPath = {
  Home: "/",
};

export const AppRoutes = [
  // home
  {
    key: EPath.Home,
    path: EPath.Home,
    label: "Trang chủ",
    element: <Home />,
    visible: false,
  },
];
