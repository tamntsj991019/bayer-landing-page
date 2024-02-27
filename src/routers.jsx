// import { Home } from "../screens";

import { Home, Page2 } from "./screens";

export const EPath = {
  Home: "/",
  Page2: "/p2",
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
  {
    key: EPath.Page2,
    path: EPath.Page2,
    label: "Page2",
    element: <Page2 />,
    visible: false,
  },
];
