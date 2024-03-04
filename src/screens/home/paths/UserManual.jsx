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

      <div className="mt-[32px] flex justify-center">
        <TableGuild />
      </div>
    </div>
  );
};

export default UserManual;

const TableGuild = () => {
  const cssHeader = "h-[90px] flex items-center justify-center p-0";
  const clipPathStyle = {
    clipPath: "polygon(15% 0%, 100% 0, 100% 100%, 0% 100%)",
  };
  return (
    <table className="w-[1150px]">
      <thead className="h-[90px] text-white">
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
            <div className="bg-[#2B6638]">
              <div
                className={`${cssHeader} bg-[#67B514]`}
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
                Mức nước và thời gian giữ nước
              </div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="">
        <tr>
          <td className="bg-[#DDD2DB] text-center">
            <div className="">
              <span>Lúa sạ thẳng</span>
            </div>
          </td>
          <td className="bg-[#F0EDF0] text-center">
            1. Nhóm chác lác: chác (lông heo); cỏ cháo (lác rận); u du (lác
            cơm); lác. 2. Nhóm hoà bản: lồng vực (cỏ gạo); đuôi phụng (lông
            công, cỏ bay). 3. Nhóm lá rộng: rau mương; mác bao; cỏ chân vịt; rau
            bợ; cỏ xà bông...
          </td>
          <td className="bg-[#DDD2DB] text-center">7-9 ngày sau sạ</td>
          <td className="bg-[#F0EDF0] text-center">
            0.25 Lít/ha. Không cần cộng thêm thuốc cỏ khác
          </td>
          <td className="bg-[#DDD2DB] text-center">
            <span>Phun thường. Đất bảo hoà nước</span>
            <span>Phun toé. Đất có mực nước 2-3cm</span>
          </td>
          <td className="bg-[#F0EDF0] text-center">
            <span>400 lít/HA</span>
            <span>125 lít/HA</span>
          </td>
          <td className="bg-[#DDD2DB] text-center">
            <span>
              • Mặt ruộng bão hòa nước. • Sau khi phun từ 1 - 2 ngày thì đưa
              nước vào và giữ nước theo tập quán của nông dân.
            </span>
            <span>
              • Mặt ruộng có mức nước 2 - 3 cm. • Giữ nước từ 2 - 3 ngày sau
              phun.
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
