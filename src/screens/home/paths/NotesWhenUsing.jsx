// Những lưu ý khi sử dụng
import React from "react";
import Title from "../components/Title";
import { Color } from "../../../utils/contanst";
import { NWU_1, NWU_2, NWU_3, NWU_4, NWU_5, NWU_6 } from "../imgs";
import RightArrow from "../../../components/RightArrow";

const NotesWhenUsing = (props) => {
  const listLastNote = [
    "Chỉnh béc phun để ra tia/tóe (phun xa) để đảm bảo giọt thuốc phân bố đều trên mặt ruộng.",
    "Mặt ruộng có nước 2-3cm.",
    "Có thể phun với lượng nước 125L/ha.",
    "Giữ nước từ 2-3 ngày sau phun.",
  ];
  const listShould = [
    "Đảm bảo ruộng bằng phẳng đồng đều.",
    "Sử dụng thuốc diệt mầm (trước đó).",
    "Thời điểm phun thuốc 7-9 ngày sau sạ (cỏ 2-3 lá)",
  ];
  const listShouldNot = [
    "Không để nước ngập đỉnh sinh trưởng của lúa (ngập cỏ không ngập lúa)",
    "Với béc phun thường, khi phun chồng lối (đối với lúa mẫn cảm) có thể bị vết trắng lá nhẹ. Lúa trở lại bình thường sau 5-7 ngày.",
  ];
  return (
    <div className="mt-[3.6rem]">
      <Title text="Những lưu ý khi sử dụng" />

      <div className="grid w-full grid-cols-1 gap-5 sm:w-auto sm:grid-cols-2">
        <div className="flex w-full flex-col items-end gap-3 sm:w-auto">
          <div>
            <img src={NWU_1} alt="NWU_1" className="w-full sm:w-auto" />
          </div>
          <div>
            <img src={NWU_3} alt="NWU_3" className="w-full sm:w-auto" />
          </div>
          <div>
            <Wrapper
              imgSrc={NWU_5}
              description="Lúa bị trắng 7 ngày sau khi phun lặp lại Council Complete, Tháp Mười, Đồng Tháp"
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto">
          <div>
            <img src={NWU_2} alt="NWU_2" className="w-full sm:w-auto" />
          </div>
          <div>
            <img src={NWU_4} alt="NWU_4" className="w-full sm:w-auto" />
          </div>
          <div>
            <Wrapper
              imgSrc={NWU_6}
              description="Nước không ngập cỏ (cỏ lớn >4 lá) sẽ không chết."
            />
          </div>
        </div>
      </div>

      <ShouldOrNot listShould={listShould} listShouldNot={listShouldNot} />

      <div className="mt-[31px] flex justify-center ">
        <div
          className="grid w-full grid-cols-1 gap-2 border py-[22px] text-[18px] sm:w-auto sm:px-[105px]"
          style={{ color: Color.PrimaryText, borderColor: Color.PrimaryText }}
        >
          <b>Phun toé:</b>
          {listLastNote.map((x, i) => (
            <span className="flex" key={i}>
              <i
                className="fa-solid fa-chevron-right me-2"
                style={{ color: Color.PinkPrimary_Menu }}
              />
              <span className="text-wrap">{x}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotesWhenUsing;

const Wrapper = ({ imgSrc, description }) => {
  return (
    <div
      className="max-w-[466px] border px-[40px] pb-[43px] pt-[22px]"
      style={{ color: Color.PrimaryText, borderColor: Color.PrimaryText }}
    >
      <img src={imgSrc} alt="imgSrc" className="h-[218px] w-[386px]" />
      <div className="mt-[22px] flex items-start text-[18px]">
        <i className="fa-solid fa-chevron-right me-2 text-[22px]" />
        <span className="text-[18px]">{description}</span>
      </div>
    </div>
  );
};

const ShouldOrNot = ({ listShould, listShouldNot }) => {
  const Label = ({ text, bgColor, borderB }) => {
    return (
      <div
        className={`col-span-1 flex items-center justify-center border-e ${borderB && "sm:border-b"}`}
        style={{ borderColor: Color.PrimaryText }}
      >
        <div
          className="flex h-[49px] w-[172px] items-center justify-center border-e border-[#D1E0E7] text-[20px] text-white"
          style={{ backgroundColor: bgColor }}
        >
          <span>{text}</span>
        </div>
      </div>
    );
  };

  const Description = ({ listDesc, borderB }) => {
    return (
      <div
        className={`col-span-1 px-16 py-[27px] sm:col-span-2 ${borderB && "sm:border-b"}`}
        style={{ borderColor: Color.PrimaryText }}
      >
        <div className="flex flex-col">
          {listDesc?.map((x, i) => (
            <span className="text-wrap border-b-2 py-2" key={`desc-${i}`}>
              {x}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-[54px] flex justify-center">
      <div className="grid grid-cols-1 gap-0 sm:w-[960px] sm:grid-cols-3">
        <Label text="NÊN" bgColor={Color.PrimaryText} borderB />
        <Description listDesc={listShould} borderB />
        <Label text="KHÔNG NÊN" bgColor={Color.PinkPrimary_Menu} />
        <Description listDesc={listShouldNot} />
      </div>
    </div>
  );
};
