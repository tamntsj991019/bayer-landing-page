import React from "react";
import { Color } from "../../utils/contanst";

const Footer = (props) => {
  return (
    <div className="mt-[4.06rem] bg-[#624963] text-white">
      <div className="flex justify-center px-[70px] pb-5">
        <div className="container grid grid-cols-1 pt-[58px] md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col px-3">
            <span className="mb-4 text-[26px]">Liên hệ chúng tôi</span>
            <MenuItemFooter iconFa="fa-solid fa-phone" text="1800 1775" />
            <MenuItemFooter
              iconFa="fa-solid fa-location-dot"
              text="Tòa nhà CentrePoint, Lầu 3, 106 Nguyễn Văn Trỗi, phường 8, quận Phú Nhuận, TP. Hồ Chí Minh"
            />
          </div>
          <div className="flex flex-col px-3">
            <span className="mb-4 text-[26px]">Hỗ trợ nhà nông</span>
            <MenuItemFooter
              iconFa="fa-solid fa-angle-right"
              text="Đồng hành cùng nông gia"
              url="https://bayerkhoahoccaytrong.com/dong-hanh-ng/"
            />
          </div>
          <div className="flex flex-col px-3">
            <span className="mb-4 text-[26px]">Truy cập nhanh</span>
            <MenuItemFooter
              iconFa="fa-solid fa-angle-right"
              text="Tin nhà nông"
              url="https://bayerkhoahoccaytrong.com/ban-tin-nha-nong/"
            />
            <MenuItemFooter
              iconFa="fa-solid fa-angle-right"
              text="Thư viện"
              url="https://bayerkhoahoccaytrong.com/thu-vien/"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#624963]">
        <div
          className=" flex justify-center bg-[#51455f] px-[70px] pt-5"
          style={{
            clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <div className="container">
            <div className="mt-10 flex flex-col">
              <span className="mb-4 text-center text-[26px]">Follow Us</span>
              <div className="flex justify-center">
                <SocialIconFooter
                  iconFA="fa-brands fa-facebook-f"
                  url="https://www.facebook.com/Bayer4CropsVN"
                />
                <SocialIconFooter
                  iconFA="fa-brands fa-youtube"
                  url="https://www.youtube.com/user/bayercropscienceviet"
                />
              </div>
            </div>
            <small className="mb-4 mt-9 flex w-full items-center border-t border-[#616161] pb-[18px] pt-[40px]">
              <span>Copyright</span>
              <i className="fa-regular fa-copyright mx-1.5"></i>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const MenuItemFooter = ({ iconFa, text, url }) => {
  return (
    <div className="flex pb-4">
      <i className={`${iconFa} mr-2`} />

      <span className="text-[15px]">
        {url ? (
          <a href={url} target="-blank" className="cursor-pointer">
            {text}
          </a>
        ) : (
          text
        )}
      </span>
    </div>
  );
};

const SocialIconFooter = ({ iconFA, url }) => {
  return (
    <div
      style={{ backgroundColor: Color.PinkPrimary_Menu }}
      className="mx-[10px] flex h-[40px] w-[40px] items-center justify-center pt-1 text-white"
    >
      {url ? (
        <a href={url} target="_blank">
          <i className={`${iconFA} text-[20px]`} />
        </a>
      ) : (
        <i className={`${iconFA} text-[20px]`} />
      )}
    </div>
  );
};
