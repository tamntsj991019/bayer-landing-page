// Ưu thế
import React from "react";
import { Color } from "../../../utils/contanst";
import { Banner } from "../../../assets";
import { RightArrow } from "../../../components";

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
      <div className="flex items-center justify-center">
        <svg
          className="mr-[1rem]"
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="38"
          viewBox="0 0 61 38"
          fill="none"
        >
          <path
            d="M60.9681 0L52.9091 38H51.1253L59.1843 0H60.9681ZM53.6418 0L45.5828 38H43.799L51.858 0H53.6418ZM46.3154 0L38.2564 38H36.4726L44.5316 0H46.3154ZM39.1483 0L31.0893 38H29.3055L37.3645 0H39.1483ZM31.8219 0L23.7629 38H21.9791L30.0381 0H31.8219ZM24.4956 0L16.4366 38H14.6527L22.7118 0H24.4956ZM17.1692 0L9.11018 38H7.32637L15.3854 0H17.1692ZM9.84282 0L1.76789 38H0L8.05901 0H9.84282Z"
            fill={Color.Primary}
          />
        </svg>
        <span
          className="text-[3.25rem] font-light"
          style={{ color: Color.PrimaryText }}
        >
          <b>Ưu thế</b>
        </span>
      </div>
      <div className="lg:container-center mt-[1.31rem] grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex items-center justify-end">
          <div className="relative">
            <img
              src={Banner}
              alt="banner"
              className="h-[23.25rem] w-[41.3125rem]"
            />
            <svg
              className=" absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2"
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="140"
              viewBox="0 0 140 140"
              fill="none"
            >
              <path
                d="M69.9999 117.6C43.6799 117.6 22.3999 96.32 22.3999 70C22.3999 43.68 43.6799 22.4 69.9999 22.4C96.3199 22.4 117.6 43.68 117.6 70C117.6 96.32 96.3199 117.6 69.9999 117.6ZM69.9999 28C46.7599 28 27.9999 46.76 27.9999 70C27.9999 93.24 46.7599 112 69.9999 112C93.2399 112 112 93.24 112 70C112 46.76 93.2399 28 69.9999 28Z"
                fill="white"
              />
              <path
                d="M56 94.36V45.64L98 70L56 94.36ZM61.6 55.16V84.56L86.8 69.72L61.6 55.16Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div>
          <div
            className="flex-col border p-[1.5rem] text-xl font-medium xl:w-full 2xl:w-1/2"
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
    </div>
  );
};

export default Dominance;

const Detail = ({ title, content }) => {
  return (
    <div className="" style={{ color: Color.PrimaryText }}>
      <div className="flex">
        <RightArrow size={28} color={Color.Primary} />
        <b className="ms-[0.5rem] text-xl">{title}</b>
      </div>
      <div className="flex">
        <span className="text-justify text-lg font-light">{content}</span>
      </div>
    </div>
  );
};
