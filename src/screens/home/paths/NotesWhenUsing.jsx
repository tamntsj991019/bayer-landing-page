// Những lưu ý khi sử dụng
import React, { useState } from "react";
import Title from "../components/Title";
import { Color } from "../../../utils/contanst";
import {
  NWU_1,
  NWU_1a_L,
  NWU_1a_R,
  NWU_2,
  NWU_2a_L,
  NWU_2a_R,
  NWU_3,
  NWU_4,
  NWU_5,
  NWU_6,
} from "../imgs";

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

      <div className="grid w-auto grid-cols-2 gap-5 max-xl:hidden">
        <div className="flex w-full flex-col items-end gap-3 sm:w-auto">
          <Note_1a
            srcImgL={NWU_1a_L}
            srcImgR={NWU_1a_R}
            text="Trường hợp phun béc mịn hoặc chồng lối... sẽ có vệt trắng (nơi tiếp xúc thuốc)"
          />

          <Note_2a
            srcImg={NWU_3}
            label_L="COUNCIL® COMPLETE 300 SC"
            label_R="THUỐC KHÁC"
            text="Lúa hồi phục 10 ngày sau khi phun Council® Complete 300 SC, Cầu Kè, Trà Vinh (trong điều kiện chăm sóc bình thường)."
          />
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto">
          <Note_1b
            srcImgL_Sub={NWU_1a_L}
            srcImgL={NWU_2a_L}
            srcImgR={NWU_2a_R}
            text="Lúa sẽ phục hồi trở lại bình thường 7 ngày sau khi xử lý (chăm sóc bình thường)"
          />
          <Note_2b
            srcImg={NWU_4}
            label_L="COUNCIL® COMPLETE 300 SC"
            label_R="THUỐC KHÁC"
          />
        </div>
      </div>
      <div className="hidden flex-col items-center justify-center gap-[1.25rem] max-xl:flex max-sm:gap-0">
        <div className="max-sm:scale-75">
          <Note_1a
            srcImgL={NWU_1a_L}
            srcImgR={NWU_1a_R}
            text="Trường hợp phun béc mịn hoặc chồng lối... sẽ có vệt trắng (nơi tiếp xúc thuốc)"
          />
        </div>
        <div className=" max-sm:scale-[.65]">
          <Note_1b
            srcImgL_Sub={NWU_1a_L}
            srcImgL={NWU_2a_L}
            srcImgR={NWU_2a_R}
            text="Lúa sẽ phục hồi trở lại bình thường 7 ngày sau khi xử lý (chăm sóc bình thường)"
          />
        </div>
        <div className=" max-sm:scale-[.65] max-sm:p-0">
          <Note_2a
            srcImg={NWU_3}
            label_L="COUNCIL® COMPLETE 300 SC"
            label_R="THUỐC KHÁC"
            text="Lúa hồi phục 10 ngày sau khi phun Council® Complete 300 SC, Cầu Kè, Trà Vinh (trong điều kiện chăm sóc bình thường)."
          />
        </div>
        <div className=" max-sm:scale-[.65]">
          <Note_2b
            srcImg={NWU_4}
            label_L="COUNCIL® COMPLETE 300 SC"
            label_R="THUỐC KHÁC"
          />
        </div>
      </div>

      <div className="mt-[2rem] flex flex-wrap items-center justify-center gap-[1.5rem]">
        <div>
          <Note_5_6
            imgSrc={NWU_5}
            description="Lúa bị trắng 7 ngày sau khi phun lặp lại Council Complete, Tháp Mười, Đồng Tháp"
          />
        </div>
        <div>
          <Note_5_6
            imgSrc={NWU_6}
            description="Nước không ngập cỏ (cỏ lớn >4 lá) sẽ không chết."
          />
        </div>
      </div>

      <ShouldOrNot listShould={listShould} listShouldNot={listShouldNot} />

      <LastNote label="Phun toé" notes={listLastNote} />
    </div>
  );
};

export default NotesWhenUsing;

const Note_1a = ({ srcImgL, srcImgR, text }) => {
  const [isHover, setIsHover] = useState(false);
  const cssScale = isHover ? "scale-[1.2]" : "scale-[1]";
  const cssImgDiv = `absolute top-0 h-full overflow-hidden`;
  const cssImg = `h-full w-full ${cssScale}`;
  const trans = "all .3s linear";
  return (
    <div
      className="relative h-[16.5rem] w-[29.125rem] overflow-hidden"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`${cssImgDiv} -left-0 w-[20.52975rem]`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
        }}
      >
        <img
          src={srcImgL}
          alt="src-img-l"
          className={`${cssImg}`}
          style={{
            transition: trans,
          }}
        />
      </div>
      <div
        className={`${cssImgDiv} -right-0 w-[11.99631rem]`}
        style={{
          clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <img
          src={srcImgR}
          alt="src-img-r"
          className={`${cssImg}`}
          style={{
            transition: trans,
          }}
        />
      </div>
      <div
        className="absolute left-0 top-0 h-full w-[13.53125rem] bg-[#2b66384d]"
        style={{
          width: isHover ? 0 : "13.53125rem",
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
          transition: trans,
        }}
      />
      <div
        className="absolute left-0 top-0 flex h-full w-[12.25rem] items-center justify-center bg-[#2b6638cc]"
        style={{
          width: isHover ? 0 : "12.25rem",
          clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
          transition: trans,
        }}
      >
        <span className="pe-[2.5rem] ps-[0.75rem] text-white">{text}</span>
      </div>

      <div
        className={`absolute left-0 top-0 h-full  bg-[#00BBFE]`}
        style={{
          width: isHover ? 0 : "13.188rem",
          clipPath: isHover
            ? "polygon(99% 1%, 100% 0, 100% 100%, 99% 100%)"
            : "polygon(99% 1%, 100% 0, 69% 100%, 68% 100%)",
          transition: trans,
        }}
      />
    </div>
  );
};

const Note_1b = ({ srcImgL_Sub, srcImgL, srcImgR, text }) => {
  const [isHover, setIsHover] = useState(false);
  const cssImgDiv = `absolute top-0 h-full overflow-hidden`;
  const cssImg = `h-full w-full`;
  const trans = "all .3s linear";
  return (
    <div
      className="relative h-[20rem] w-[35.25rem] overflow-hidden"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`${cssImgDiv} relative left-0 w-[24.84713rem]`}
        style={{
          clipPath: "polygon(0 0, 100% 0, 81% 100%, 0% 100%)",
        }}
      >
        <img
          src={srcImgL_Sub}
          alt="src-img-l"
          className={`absolute left-0 top-0 h-full`}
          style={{
            transition: trans,
          }}
        />
        <img
          src={srcImgL}
          alt="src-img-l"
          className={`${cssImg} absolute top-0 ${isHover ? "ml-0 scale-[1.2]" : "ml-20"}`}
          style={{
            transition: trans,
          }}
        />
      </div>
      <div
        className={`${cssImgDiv} -right-0 w-[14.51913rem]`}
        style={{
          clipPath: "polygon(33% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        <img
          src={srcImgR}
          alt="src-img-r"
          className={`${cssImg} ${isHover ? "-ml-10 scale-[1.6]" : "ml-5  scale-[1.2]"}`}
          style={{
            transition: trans,
          }}
        />
      </div>
      <div
        className="absolute left-0 top-0 h-full bg-[#ff31624d]"
        style={{
          width: isHover ? 0 : "17.0625rem",
          clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)",
          transition: trans,
        }}
      />
      <div
        className="absolute left-0 top-0 flex h-full items-center justify-center bg-[#ff3162cc]"
        style={{
          width: isHover ? 0 : "14.8125rem",
          clipPath: "polygon(0 0, 100% 0, 83% 100%, 0% 100%)",
          transition: trans,
        }}
      >
        <span className="pe-[2.5rem] ps-[0.75rem] text-white">{text}</span>
      </div>

      <div
        className={`absolute left-0 top-0 h-full  bg-[#00BBFE]`}
        style={{
          width: isHover ? 0 : "15.985rem",
          clipPath: isHover
            ? "polygon(99% 1%, 100% 0, 100% 100%, 99% 100%)"
            : "polygon(99% 1%, 100% 0, 69% 100%, 68% 100%)",
          transition: trans,
        }}
      />
    </div>
  );
};

const Note_2a = ({ srcImg, text, label_L, label_R }) => {
  const [isHover, setIsHover] = useState(false);
  const cssImgDiv = `absolute top-0 h-full overflow-hidden`;
  const cssImg = `h-full w-full`;
  const trans = "all .3s linear";
  const cssML = isHover ? "ml-0 " : "ml-36";
  const cssLabel = "text-white text-[0.75rem]";
  return (
    <div
      className="relative h-[20rem] w-[35.25rem] overflow-hidden"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={`${cssImgDiv} relative left-0`}>
        <img
          src={srcImg}
          alt="src-img"
          className={`${cssImg} ${cssML}`}
          style={{ transition: trans }}
        />
        <div
          className={`absolute left-0 top-0 flex h-full ${cssML}`}
          style={{ transition: trans }}
        >
          <div className="flex h-full w-[15.5rem] items-center justify-end pr-6">
            <b
              className={`${cssLabel} w-[8.5625rem] px-[0.69rem] pb-[0.44rem] pt-[0.37rem]`}
              style={{ backgroundColor: Color.GreenPrimary }}
            >
              {label_L}
            </b>
          </div>
          <div className="flex h-full w-[20.5rem] items-center pl-6">
            <b
              className={`${cssLabel} px-[1.25rem] py-[0.69rem]`}
              style={{ backgroundColor: Color.OrangePrimary }}
            >
              {label_R}
            </b>
          </div>
        </div>
      </div>
      <div
        className="absolute left-0 top-0 h-full bg-[#10394F4d]"
        style={{
          width: isHover ? 0 : "17.0625rem",
          clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)",
          transition: trans,
        }}
      />
      <div
        className="absolute left-0 top-0 flex h-full items-center justify-center bg-[#10394Fcc]"
        style={{
          width: isHover ? 0 : "14.8125rem",
          clipPath: "polygon(0 0, 100% 0, 83% 100%, 0% 100%)",
          transition: trans,
        }}
      >
        <span className="pe-[2.5rem] ps-[0.75rem] text-white">{text}</span>
      </div>

      <div
        className={`absolute left-0 top-0 h-full  bg-[#00BBFE]`}
        style={{
          width: isHover ? 0 : "15.985rem",
          clipPath: isHover
            ? "polygon(99% 1%, 100% 0, 100% 100%, 99% 100%)"
            : "polygon(99% 1%, 100% 0, 69% 100%, 68% 100%)",
          transition: trans,
        }}
      />
    </div>
  );
};

const Note_2b = ({ srcImg, text, label_L, label_R }) => {
  const [isHover, setIsHover] = useState(false);
  const cssImgDiv = `absolute top-0 h-full overflow-hidden`;
  const trans = "all .3s linear";
  const cssHover = isHover ? "scale-[1.2] w-full" : "scale-[1] w-[26.375rem]";
  const cssLabel = "text-white text-[0.75rem]";
  return (
    <div
      className={`relative h-[16.5rem] w-[35.3125rem] overflow-hidden`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={`${cssImgDiv} relative left-0 h-full w-full`}>
        <img
          src={srcImg}
          alt="src-img"
          className={`h-full  ${cssHover}`}
          style={{ transition: trans }}
        />
        <div
          className={`absolute left-0 top-0 flex h-full w-full `}
          style={{ transition: trans }}
        >
          <div
            className={`${isHover ? "w-[20rem] pr-20" : "w-[14rem] pr-10"} flex h-full items-center justify-end`}
            style={{ transition: trans }}
          >
            <b
              className={`${cssLabel} w-[8.5625rem] px-[0.69rem] pb-[0.44rem] pt-[0.37rem]`}
              style={{ backgroundColor: Color.GreenPrimary }}
            >
              {label_L}
            </b>
          </div>
          <div
            className={`${isHover ? "w-[16rem] pl-14" : "w-[12.375rem] pl-10"} flex h-full  items-center`}
            style={{ transition: trans }}
          >
            <b
              className={`${cssLabel} px-[1.25rem] py-[0.69rem]`}
              style={{ backgroundColor: Color.OrangePrimary }}
            >
              {label_R}
            </b>
          </div>
        </div>
      </div>
      <div
        className="absolute right-0 top-0 h-full bg-[#0091DF4d]"
        style={{
          width: isHover ? 0 : "13.53125rem",
          clipPath: "polygon(45% 0%, 100% 0%, 100% 100%, 0% 100%)",
          transition: trans,
        }}
      />
      <div
        className="absolute right-0 top-0 flex h-full items-center justify-center bg-[#443346cc]"
        style={{
          width: isHover ? 0 : "12.25rem",
          clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)",
          transition: trans,
        }}
      >
        <span className="pe-[2.5rem] ps-[0.75rem] text-white">{text}</span>
      </div>

      <div
        className={`absolute right-0 top-0 h-full  bg-[#4433464d]`}
        style={{
          width: isHover ? 0 : "13.15rem",
          clipPath: isHover
            ? "polygon(99% 1%, 100% 0, 100% 100%, 99% 100%)"
            : "polygon(38% 0, 39% 0, 1% 100%, 0% 100%)",
          transition: trans,
        }}
      />
    </div>
  );
};

const Note_5_6 = ({ imgSrc, description }) => {
  const [isHover, setIsHover] = useState(false);
  const trans = "all .3s linear";
  return (
    <div
      className="flex w-full flex-col items-center border sm:h-[22.8125rem] sm:w-[29.125rem]"
      style={{ color: Color.PrimaryText, borderColor: Color.PrimaryText }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div
        className={`w-full sm:h-[13.625rem] sm:w-[24.125rem] sm:pt-[1.38rem] ${isHover ? "sm:scale-x-[1.21] sm:scale-y-[1.265]" : "scale-[1]"}`}
        style={{
          transition: trans,
        }}
      >
        <img src={imgSrc} alt="imgSrc" className="h-full w-full" />
      </div>
      <div
        className={`flex items-start pe-[2.75rem] ps-[2.38rem] text-[18px] ${isHover ? "mt-[1.38rem] sm:mt-[2.6rem]" : "mt-[1.38rem]"}`}
        style={{
          transition: trans,
        }}
      >
        <i className="fa-solid fa-chevron-right me-2 text-[1.5rem]" />
        <span className="text-[1.125rem]">{description}</span>
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

const LastNote = ({ label, notes }) => {
  return (
    <div className="mt-[31px] flex justify-center ">
      <div
        className="grid w-full grid-cols-1 gap-2 border py-[22px] text-[18px] sm:w-auto sm:px-[105px]"
        style={{ color: Color.PrimaryText, borderColor: Color.PrimaryText }}
      >
        <b>{label}:</b>
        {notes.map((x, i) => (
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
  );
};
