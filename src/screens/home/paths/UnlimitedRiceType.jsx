// Không giới hạn giống lúa sử dụng
import React from "react";
import Title from "../components/Title";
import { URT_1, URT_2 } from "../imgs";

const UnlimitedRiceType = (props) => {
  return (
    <div className="mt-[3.6rem]">
      <Title text="Không giới hạn giống lúa sử dụng" />
      <div className="mt-[2rem] grid grid-cols-1 gap-5 px-3 sm:grid-cols-2 ">
        <div className="flex justify-end">
          <img src={URT_1} alt="URT_1" />
        </div>
        <div>
          <img src={URT_2} alt="URT_2" />
        </div>
        {/* <div className="hidden  lg:inline"></div>
        <div className="hidden  xl:inline"></div>
        <div className="col-span-1  md:col-span-2 xl:col-span-1">
          <img src={URT_1} alt="URT_1" className="w-full" />
        </div>
        <div className="col-span-1 md:col-span-2 xl:col-span-1">
          <img src={URT_2} alt="URT_2" className="w-full" />
        </div>
        <div className="hidden  lg:inline"></div>
        <div className="hidden  xl:inline"></div> */}
        {/* <Block
          className="col-span-1 xl:col-span-2"
          imgSrc={URT_1}
          label="COUNCIL® COMPLETE 300 SC"
          labelClassName="bg-[#2B6636]"
        >
          <div className="relative flex items-center">
            <svg
              width="216"
              height="350"
              viewBox="0 0 216 350"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M154.5 350.017H0V1.01685H174.273L154.5 350.017Z"
                fill="#2B6638"
                fillOpacity="0.3"
              />
              <path
                d="M136.5 350.017L0.000152588 350.017V1.01669L195.882 1.01685L136.5 350.017Z"
                fill="#2B6638"
                fillOpacity="0.7"
              />
              <line
                x1="115.522"
                y1="350"
                x2="214.873"
                y2="0.853275"
                stroke="#00BBFE"
              />
            </svg>
            <div className="absolute left-[25%] top-[50%] w-[130px] -translate-x-1/4 -translate-y-1/2 text-xl font-medium text-white">
              Lúa vẫn phát triển bình thường
            </div>
          </div>
        </Block>
        <Block
          className="col-span-1 xl:col-span-2"
          imgSrc={URT_2}
          label="THUỐC KHÁC"
          labelClassName="bg-[#ED5F31]"
        >
          <div className="relative flex items-center">
            <svg
              width="291"
              height="350"
              viewBox="0 0 291 350"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M231.5 350H-0.00247192V1H251.341L231.5 350Z"
                fill="#FF3162"
                fillOpacity="0.3"
              />
              <path
                d="M209 350H0.00360107V1H268.382L209 350Z"
                fill="#FF3162"
                fillOpacity="0.7"
              />
              <line
                x1="190.522"
                y1="350"
                x2="289.722"
                y2="0.995384"
                stroke="#10394F"
              />
            </svg>
            <div className="absolute left-[25%] top-[50%] w-[200px] -translate-x-1/4 -translate-y-1/2 text-xl font-medium text-white">
              Hiện tượng se đọt 16 ngày sau khi phun thuốc khác trên giống Đài
              Thơm 8.
            </div>
          </div>
        </Block> */}
      </div>
    </div>
  );
};

export default UnlimitedRiceType;

// const Block = ({ className, imgSrc, label, labelClassName, children }) => {
//   const getLabelClassName = () =>
//     `${labelClassName || ""} px-[1.8rem] py-[0.5rem] text-white`;

//   return (
//     <div className={className}>
//       <div className="relative">
//         <img
//           src={imgSrc}
//           alt={label}
//           className="h-[350px]"
//           width="100%"
//           style={{
//             objectFit: "cover",
//           }}
//         />
//         <div className="absolute left-0 top-0 h-[300px]">{children}</div>
//       </div>

//       <div className={`mt-[1.2rem] flex justify-center text-center`}>
//         <b className={getLabelClassName()}>{label}</b>
//       </div>
//     </div>
//   );
// };
