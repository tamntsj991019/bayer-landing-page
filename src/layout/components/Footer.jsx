import React from "react";
import { Color } from "../../utils/contanst";

const Footer = (props) => {
  return (
    <div className="mt-5 bg-black pb-5 pt-20 text-white">
      <div className="grid grid-cols-1 gap-4 px-10 sm:grid-cols-2 md:grid-cols-4 lg:px-28 2xl:px-56">
        <div className="mb-5">
          <MenuFooter
            title="Our Business"
            items={[
              { link: undefined, label: "Phamaceuticals" },
              { link: undefined, label: "Consumer Health" },
              { link: undefined, label: "Crop Science" },
              { link: undefined, label: "Out Products" },
              { link: undefined, label: "Bayer Worldwide" },
            ]}
          />
        </div>
        <div className="mb-5">
          <MenuFooter
            title="Magagines & Reports"
            items={[{ link: undefined, label: "News and Stories" }]}
          />
        </div>
        <div className="mb-5">
          <MenuFooter
            title="Stay Tuned"
            items={[
              { link: undefined, label: "Jobs Postings" },
              { link: undefined, label: "Latest News" },
              { link: undefined, label: "Newsletter" },
              { link: undefined, label: "Bayer Share Price" },
            ]}
          />
        </div>
        <div className="mb-5">
          <MenuFooter title="Get in Touch">
            <span>Do you have any queries or comments?</span>
          </MenuFooter>
        </div>
      </div>

      <div className="mt-10  grid  grid-cols-1 justify-center">
        <span className="text-center text-[20px] sm:text-[24px] xl:text-[26px]">
          Follow Us
        </span>
        <div className="mt-3 flex justify-center gap-4">
          <SocialIconFooter iconFA="fa-brands fa-facebook-f" />
          <SocialIconFooter iconFA="fa-brands fa-x-twitter" />
          <SocialIconFooter iconFA="fa-brands fa-youtube" />
          <SocialIconFooter iconFA="fa-brands fa-linkedin-in" />
          <SocialIconFooter iconFA="fa-brands fa-instagram" />
          <SocialIconFooter iconFA="fa-solid fa-wifi" />
        </div>
      </div>

      <small className="mt-16 grid grid-cols-1 px-10 sm:grid-cols-4 lg:px-28 2xl:px-56">
        <div>
          <span>Copyright</span>
          <i className="fa-regular fa-copyright mx-1.5"></i>
          <span>Bayer AG</span>
        </div>
        <div className="text-center sm:col-span-2">
          <span className="me-5">Global:</span>
          <span>Conditions of Use</span>
          <span className="mx-1">/</span>
          <span>Privacy Statement</span>
          <span className="mx-1">/</span>
          <span>Cookie Settings</span>
          <span className="mx-1">/</span>
          <span>Imprint</span>
        </div>
        <div className="text-end">Sitemap</div>
      </small>
    </div>
  );
};

export default Footer;

const MenuFooter = ({ title, items, children }) => {
  return (
    <div className="grid grid-cols-1">
      <span className="h-[80px] text-[20px] sm:text-[24px] xl:text-[26px]">
        {title}
      </span>
      {children
        ? children
        : items?.map((x, i) => {
            return (
              <span className="flex" key={i}>
                <i className="fa-solid fa-angle-right me-2"></i>
                <a href={x.link}>{x.label}</a>
              </span>
            );
          })}
    </div>
  );
};

const SocialIconFooter = ({ iconFA }) => {
  return (
    <div
      style={{ backgroundColor: Color.PinkPrimary_Menu }}
      className="flex h-[45px] w-[45px] items-center justify-center text-white sm:h-[50px] sm:w-[50px]"
    >
      <i className={`${iconFA}  mt-1 text-[20px]`} />
    </div>
  );
};
