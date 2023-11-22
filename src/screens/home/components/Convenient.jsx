// Tiện lợi
import React from "react";
import Title from "./Title";
import { Color } from "../../../utils/contanst";

const Convenient = (props) => {
  return (
    <div className="mt-[3.6rem]">
      <Title text="Tiện lợi" />
      <div
        className="mb-[2.2rem] mt-[0.5rem] flex justify-center text-lg"
        style={{ color: Color.PrimaryText }}
      >
        <span className="">
          <b className="">Phun tóe</b>{" "}
          <span className="font-light">
            khi mặt ruộng có mức nước 2 - 3 cm, không cần tháo nước ra và bơm
            nước vào. Giảm 50% thời gian phun và 50% lượng nước phun.
          </span>
        </span>
      </div>
    </div>
  );
};

export default Convenient;
