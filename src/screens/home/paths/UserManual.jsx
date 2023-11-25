// Hướng dẫn sử dụng
import React from "react";
import Title from "../components/Title";
import { Color } from "../../../utils/contanst";

const UserManual = (props) => {
  return (
    <div className="mt-[3.6rem] bg-[#DDD2DBB2] py-[1.31rem]">
      <Title text="Hướng dẫn sử dụng" />
      <div
        className="mt-[0.5rem] flex justify-center uppercase"
        style={{ color: Color.PrimaryText }}
      >
        <b>TÊN SẢN PHẨM: COUNCIL® COMPLETE 300 SC</b>
      </div>
    </div>
  );
};

export default UserManual;
