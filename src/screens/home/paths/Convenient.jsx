// Tiện lợi
import React from "react";
import Title from "../components/Title";
import { Color } from "../../../utils/contanst";
import { Convenient_PhunThuongPng, Convenient_PhunToePng } from "../imgs";
import ConvenientShape1 from "../components/ConvenientShape1";

const Convenient = (props) => {
  return (
    <div className="mt-[3.6rem]">
      <Title text="Tiện lợi" />
      <div className="px-3">
        <div
          className="mb-[2.2rem] mt-[0.5rem] px-3 text-center text-[1.5rem] max-sm:text-sm"
          style={{ color: Color.PrimaryText }}
        >
          <b className="mr-[0.5rem]">Phun tóe</b>
          <span className="font-light">
            khi mặt ruộng có mức nước 2 - 3 cm, không cần tháo nước ra và bơm
            nước vào. Giảm 50% thời gian phun và 50% lượng nước phun.
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 px-5 md:grid-cols-4 lg:grid-cols-6 lg:px-20">
          <div className="hidden lg:inline"></div>
          <div className="md:col-span-2">
            <img
              src={Convenient_PhunToePng}
              alt="Tiện lợi - Phun toé"
              className="w-full"
            />
            <ConvenientShape1
              text="Phun Toé"
              textFill="white"
              textClassName="font-bold"
              shapeFill="#2B6636"
              shapeClassName="w-1/3"
            />
          </div>
          <div className="md:col-span-2">
            <img
              src={Convenient_PhunThuongPng}
              alt="Tiện lợi - Phun thường"
              className="w-full"
            />
            <ConvenientShape1
              text="Phun Thường"
              textFill="white"
              textClassName="font-bold"
              shapeFill="#D30F4B"
              shapeClassName="w-1/3"
            />
          </div>
          <div className="hidden lg:inline"></div>
        </div>
      </div>
    </div>
  );
};

export default Convenient;
