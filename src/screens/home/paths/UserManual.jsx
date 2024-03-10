// Hướng dẫn sử dụng
import React from "react";
import Title from "../components/Title";
import { Color } from "../../../utils/contanst";
import Video from "../components/Video";

const h_HeaderTbl = "h-[5.625rem]";

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

      <div className="mb-[4.25rem] mt-[32px] flex flex-col items-center justify-center">
        <TableGuild />
        <div className="mt-[47px] h-auto w-auto md:h-[428px] md:w-[760px]">
          <Video />
        </div>
      </div>
    </div>
  );
};

export default UserManual;

const TableGuild = () => {
  const cssChild =
    "px-[1rem] py-[2.13rem] h-auto sm:min-h-[25rem] max-xl:w-full";
  const cssChild1 = `${cssChild} bg-[#DDD2DB]`;
  const cssChild2 = `${cssChild} bg-[#F0EDF0]`;
  return (
    <div className="flex max-xl:flex-wrap">
      <TableCol hLabel="Cây trồng" hBgColor1="#2B6638">
        <div className={`w-[9.625rem] ${cssChild1}`}>
          <span>Lúa sạ thẳng</span>
        </div>
      </TableCol>
      <TableCol hLabel="Đối tượng" hBgColor1="#2B6638" hBgColor2="#67B514">
        <div className={`w-[11.6875rem] ${cssChild2}`}>
          <div className="flex flex-col text-start">
            <span>
              1. Nhóm chác lác: chác (lông heo); cỏ cháo (lác rận); u du (lác
              cơm); lác.
            </span>
            <span>
              2. Nhóm hoà bản: lồng vực (cỏ gạo); đuôi phụng (lông công, cỏ
              bay).
            </span>
            <span>
              3. Nhóm lá rộng: rau mương; mác bao; cỏ chân vịt; rau bợ; cỏ xà
              bông...
            </span>
          </div>
        </div>
      </TableCol>
      <TableCol hLabel="Thời điểm phun" hBgColor1="#67B514" hBgColor2="#FF3162">
        <div className={`w-[10.5rem] ${cssChild1}`}>
          <span>7-9 ngày sau sạ</span>
        </div>
      </TableCol>
      <TableCol hLabel="Liều lượng" hBgColor1="#FF3162" hBgColor2="#E4004B">
        <div className={`w-[9.4375rem] ${cssChild2}`}>
          <div className="text-start">
            <div className="mb-8">0.25 Lít/ha.</div>

            <div>Không cần cộng thêm thuốc cỏ khác</div>
          </div>
        </div>
      </TableCol>
      <TableCol hLabel="Cách phun" hBgColor1="#E4004B" hBgColor2="#88516E">
        <div className={`w-[10.875rem] ${cssChild1}`}>
          <SplitTwo
            alignStart={true}
            css1="h-auto sm:min-h-[12.5rem] py-[2.13rem]"
            child1={
              <>
                <div>Phun thường.</div>
                <div>Đất bảo hoà nước</div>
              </>
            }
            css2="h-auto sm:min-h-[12.5rem] py-[20px]"
            child2={
              <>
                <div>Phun toé.</div>
                <div>Đất có mực nước 2-3cm</div>
              </>
            }
          />
        </div>
      </TableCol>
      <TableCol hLabel="Lượng nước" hBgColor1="#88516E" hBgColor2="#481B38">
        <div className={`w-[8.0625rem] ${cssChild2}`}>
          <SplitTwo
            alignStart={true}
            css1="h-auto sm:min-h-[12.5rem] py-[2.13rem]"
            child1={<div>400 lít/HA</div>}
            css2="h-auto sm:min-h-[12.5rem] py-[1.25rem]"
            child2={<div>125 lít/HA</div>}
          />
        </div>
      </TableCol>
      <TableCol
        hLabel={
          <>
            Mức nước và <br /> thời gian giữ nước
          </>
        }
        hBgColor1="#481B38"
      >
        <div className={`w-[11.75rem] ${cssChild1}`}>
          <SplitTwo
            alignStart={true}
            css1="h-auto sm:min-h-[15.75rem] py-[2.13rem]"
            child1={
              <>
                <div>• Mặt ruộng bão hòa nước.</div>
                <div>
                  • Sau khi phun từ 1 - 2 ngày thì đưa nước vào và giữ nước theo
                  tập quán của nông dân.
                </div>
              </>
            }
            css2="h-auto sm:min-h-[9.25rem] py-[0.56rem]"
            child2={
              <>
                <div>• Mặt ruộng có mức nước 2 - 3 cm.</div>
                <div>• Giữ nước từ 2 - 3 ngày sau phun.</div>
              </>
            }
          />
        </div>
      </TableCol>
    </div>
  );
};

const TableCol = ({ children, hLabel, hBgColor1, hBgColor2 }) => {
  return (
    <div className="m-0 flex-col p-0 max-xl:w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="m-0 h-[5.625rem] p-0 max-lg:h-[3.6rem]">
        <div
          className={`m-0 h-full w-full p-0`}
          style={{
            backgroundColor: hBgColor1,
            boxShadow: `-1px 0 0 0 ${hBgColor1}, 1px 0 0 0 ${hBgColor2 || hBgColor1}`,
          }}
        >
          <div
            className={`m-0 flex h-full w-full flex-wrap items-center justify-center border-0 ps-2 max-xl:hidden`}
            style={{
              clipPath: "polygon(15% 0%, 100% 0, 100% 100%, 0% 100%)",
              backgroundColor: hBgColor2,
            }}
          >
            <b className="text-wrap p-0 text-center text-white">{hLabel}</b>
          </div>
          <div
            className={`m-0 hidden h-full w-full flex-wrap items-center justify-center border-0 ps-2 max-xl:flex`}
            style={{
              backgroundColor: hBgColor2,
            }}
          >
            <b className="text-wrap p-0 text-center text-white">{hLabel}</b>
          </div>
        </div>
      </div>
      <div className="sm:text-center">{children}</div>
    </div>
  );
};

const SplitTwo = ({ child1, child2, css1, css2, alignStart }) => {
  const wrapperCss = [
    "-mx-[16px] -my-[34px] h-[100%]",
    alignStart ? "text-start" : "",
  ];
  const childCss = `px-[16px] border-[#e3dee3]`;
  return (
    <div className={wrapperCss.join(" ")}>
      <div className={`${childCss} border-b-2 ${css1}`}>{child1}</div>
      <div className={`${childCss} border-t-2 ${css2}`}>{child2}</div>
    </div>
  );
};
