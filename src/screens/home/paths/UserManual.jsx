// Hướng dẫn sử dụng
import React from "react";
import Title from "../components/Title";
import { Color } from "../../../utils/contanst";
import Video from "../components/Video";

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
  const cssHeader =
    "h-[90px] flex items-center justify-center p-0 ps-2 border-0";
  const clipPathStyle = {
    clipPath: "polygon(15% 0%, 100% 0, 100% 100%, 0% 100%)",
  };

  const cssTd = "td-top text-center h-[400px]";
  const cssTdEven = `${cssTd} bg-[#DDD2DB]`;
  const cssTdOdd = `${cssTd} bg-[#F0EDF0]`;
  return (
    <table className="w-[1150px]">
      <thead className="min-h-[90px] text-white">
        <tr>
          <th className="w-[154px] p-0">
            <div>
              <div
                className={`${cssHeader} bg-[#2B6638]`}
                style={{ zIndex: 1 }}
              >
                Cây trồng
              </div>
            </div>
          </th>
          <th className="w-[187px] p-0">
            <div className=" bg-[#2B6638] ">
              <div
                className={`${cssHeader} bg-[#67B514] `}
                style={{ ...clipPathStyle, zIndex: 2 }}
              >
                Đối tượng
              </div>
            </div>
          </th>
          <th className="w-[168px] p-0">
            <div className="bg-[#67B514]">
              <div
                className={`${cssHeader} bg-[#FF3162]`}
                style={{ ...clipPathStyle, zIndex: 3 }}
              >
                Thời điểm phun
              </div>
            </div>
          </th>
          <th className="w-[151px] p-0">
            <div className="bg-[#FF3162]">
              <div
                className={`${cssHeader} bg-[#E4004B]`}
                style={{ ...clipPathStyle, zIndex: 4 }}
              >
                Liều lượng
              </div>
            </div>
          </th>
          <th className="w-[174px] p-0">
            <div className="bg-[#E4004B]">
              <div
                className={`${cssHeader} bg-[#88516E]`}
                style={{ ...clipPathStyle, zIndex: 5 }}
              >
                Cách phun
              </div>
            </div>
          </th>
          <th className="w-[129px] p-0">
            <div className="bg-[#88516E]">
              <div
                className={`${cssHeader} bg-[#481B38]`}
                style={{ ...clipPathStyle, zIndex: 6 }}
              >
                Lượng nước
              </div>
            </div>
          </th>
          <th className="w-[188px] p-0">
            <div>
              <div
                className={`${cssHeader} bg-[#481B38]`}
                style={{ zIndex: 7 }}
              >
                Mức nước và <br /> thời gian giữ nước
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={`${cssTdEven}`}>
            <div>
              <span>Lúa sạ thẳng</span>
            </div>
          </td>
          <td className={`${cssTdOdd}`}>
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
          </td>
          <td className={`${cssTdEven}`}>7-9 ngày sau sạ</td>
          <td className={`${cssTdOdd}`}>
            <div className="text-start">
              <div className="mb-8">0.25 Lít/ha.</div>

              <div>Không cần cộng thêm thuốc cỏ khác</div>
            </div>
          </td>
          <td className={`${cssTdEven}`}>
            <SplitTwo
              alignStart={true}
              css1="h-[200px] pt-[34px]"
              child1={
                <>
                  <div>Phun thường.</div>
                  <div>Đất bảo hoà nước</div>
                </>
              }
              css2="h-[200px] pt-[20px]"
              child2={
                <>
                  <div>Phun toé.</div>
                  <div>Đất có mực nước 2-3cm</div>
                </>
              }
            />
          </td>
          <td className={`${cssTdOdd}`}>
            <SplitTwo
              alignStart={true}
              css1="h-[200px] pt-[34px]"
              child1={<div>400 lít/HA</div>}
              css2="h-[200px] pt-[20px]"
              child2={<div>125 lít/HA</div>}
            />
          </td>
          <td className={`${cssTdEven}`}>
            <SplitTwo
              alignStart={true}
              css1="h-[250px] pt-[34px]"
              child1={
                <>
                  <div>• Mặt ruộng bão hòa nước.</div>
                  <div>
                    • Sau khi phun từ 1 - 2 ngày thì đưa nước vào và giữ nước
                    theo tập quán của nông dân.
                  </div>
                </>
              }
              css2="h-[145px] pt-[10px]"
              child2={
                <>
                  <div>• Mặt ruộng có mức nước 2 - 3 cm.</div>
                  <div>• Giữ nước từ 2 - 3 ngày sau phun.</div>
                </>
              }
            />
          </td>
        </tr>
      </tbody>
    </table>
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
