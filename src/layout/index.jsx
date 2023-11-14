import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "../routers";

const App = () => {
  return <RouterProvider router={createBrowserRouter(AppRoutes)} />;
};

export default App;
