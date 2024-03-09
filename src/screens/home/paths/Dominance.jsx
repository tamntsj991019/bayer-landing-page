// Ưu thế
import React from "react";
import { Color } from "../../../utils/contanst";
import { Banner } from "../../../assets";
import { RightArrow } from "../../../components";
import Title from "../components/Title";
import Video from "../components/Video";

const Dominance = (props) => {
  const listDetail = [
    {
      title: "Tiện lợi",
      content:
        "Phun tóe khi mặt ruộng có nước 2-3cm mà không cần tháo nước và bơm nước vào.",
    },
    {
      title: "Hiệu quả phổ rộng",
      content:
        "Nhiều loại cỏ lúa quan trọng kể cả các loại cỏ khó trị như chác lác, lồng vực, đuôi phụng.",
    },
    {
      title: "Nhẹ công",
      content: "Giảm 50% công lao động, cách sử dụng đơn giản.",
    },
    {
      title: "Phù hợp với hầu hết các giống lúa",
      content:
        "Nhờ công nghệ loang trãi và hòa tan mạnh, nên khi phun tóe thuốc sẽ ít tiếp xúc lúa và kiểm soát cỏ hiệu quả.",
    },
  ];
  return (
    <div className="mt-[3.6rem]">
      <Title text="Ưu thế" />
      <div className="mt-[21px] flex items-center justify-center gap-[25px] px-3 max-lg:flex-col">
        <div className="h-auto w-auto sm:h-[372px] sm:w-[661px]">
          <Video />
        </div>
        <div
          className="w-auto flex-col border p-[1.5rem] text-xl font-medium max-sm:text-base sm:w-[466px]"
          style={{ borderColor: Color.Primary }}
        >
          <div className="" style={{ color: Color.Primary }}>
            <b>Những ưu thế VƯỢT TRỘI và KHÁC BIỆT</b>
          </div>
          <div className="mt-[0.31rem]" style={{ color: Color.PrimaryText }}>
            <b>của COUNCIL COMPLETE 300SC</b>
          </div>
          <div className="my-[1rem] w-full border-t" />
          <div className="grid grid-cols-1 gap-4">
            {listDetail?.map((x, i) => (
              <Detail title={x.title} content={x.content} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dominance;

const Detail = ({ title, content }) => {
  return (
    <div className="" style={{ color: Color.PrimaryText }}>
      <div className="flex">
        <RightArrow size={28} color={Color.Primary} />
        <b className="ms-[0.5rem] text-xl max-sm:text-base">{title}</b>
      </div>
      <div className="flex">
        <span className="text-justify text-lg  font-light max-sm:text-sm">
          {content}
        </span>
      </div>
    </div>
  );
};
