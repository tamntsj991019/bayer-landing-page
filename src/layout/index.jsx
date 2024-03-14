import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "../routers";
import Footer from "./components/Footer";
import { ScrollTop } from "../screens/home/imgs";

const App = () => {
  const [isHover, setIsHover] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
    };
  }, []);

  return (
    <div className="relative">
      <RouterProvider router={createBrowserRouter(AppRoutes)} />
      <Footer />
      <div
        className="fixed bottom-10 right-5"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{
          transition: "all .3s linear",
          transform: isHover ? "scale(1.2)" : "scale(1)",
          opacity: scrollY >= 500 ? 1 : 0,
          visibility: scrollY >= 500 ? "visible" : "hidden",
        }}
      >
        <img
          src={ScrollTop}
          alt="Cuộn lên trên"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
    </div>
  );
};

export default App;
