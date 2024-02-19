import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "../routers";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <RouterProvider router={createBrowserRouter(AppRoutes)} />
      <Footer />
    </>
  );
};

export default App;
