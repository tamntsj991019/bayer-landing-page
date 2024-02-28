import { Home } from "./screens";
import Page2 from "./screens/page2";

export const EPath = {
  Home: "/",
  P2: "/p2",
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
    key: EPath.P2,
    path: EPath.P2,
    label: "P 2",
    element: <Page2 />,
    visible: false,
  },
];
