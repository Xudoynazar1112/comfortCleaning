import React from "react";
import location from "/location.svg";
import phone from "/phone.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="my-10 px-10">
      <hr className="h-[1px] bg-black my-20" />
      <div className="mx-5 md:flex md:justify-between">
        <a href="#main">
          <img src="./logo.png" alt="photo" className="object-cover h-[90px]" />
        </a>
        <ul className="flex flex-col gap-3 mt-5">
          <li>
            <img
              src={location}
              alt="location"
              className="w-10 border border-[#CCC] p-2 rounded-lg inline mr-5 text-[#242825cc] text-xl"
            />
            {t("location")} <span className="text-3xl font-bold ml-5">↗</span>
          </li>
          <li>
            <img
              src={phone}
              alt="phone"
              className="w-10 border border-[#CCC] p-2 rounded-lg inline mr-5 text-[#242825cc] text-xl"
            />
            <a
              data-aos="fade-right"
              href="tel:+998950003080"
              className="text-2xl text-black md:text-4xl font-unbounded font-bold"
            >
              998-95-000-30-80
            </a>

            <span className="text-3xl font-bold ml-5">↗</span>
          </li>
          <li>
            <img
              src={phone}
              alt="phone"
              className="w-10 border border-[#CCC] p-2 rounded-lg inline mr-5 text-[#242825cc] text-xl"
            />
            <a
              data-aos="fade-right"
              href="tel:+998990603080"
              className="text-2xl text-black md:text-4xl font-unbounded font-bold"
            >
              998-99-060-30-80
            </a>
            <span className="text-3xl font-bold ml-5">↗</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
