import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("i18nextLng");
  const handleChange = (event) => {
    const selectLanguage = event.target.value;
    i18n.changeLanguage(selectLanguage);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="py-[15px] px-[40px] flex justify-between items-center w-full fixed top-0 bg-white z-40">
        <div>
          <a href="/">
            <img className="w-[200px] md:w-[300px] md:h-[90px]" src="/logo.png" alt="logo" />
          </a>
        </div>
        <div>
          <ul className="hidden md:flex md:items-center md:gap-7">
            <li>
              <a
                href="#main"
                className="text-[20px] text-[#00000098] font-normal"
              >
                {t("asosiy")}
              </a>
            </li>
            <li>
              <a
                href="#us"
                className="text-[20px] text-[#00000098] font-normal"
              >
                {t("biz")}
              </a>
            </li>
            <li>
              <a
                href="#serviceses"
                className="text-[20px] text-[#00000098] font-normal"
              >
                {t("xizmatlar")}
              </a>
            </li>
            <li>
              <a
                href="#feedback"
                className="text-[20px] text-[#00000098] font-normal"
              >
                {t("fikrlar")}
              </a>
            </li>
            <li>
              <a
                href="#questions"
                className="text-[20px] text-[#00000098] font-normal"
              >
                {t("savollar")}
              </a>
            </li>
            <li className="mr-10">
              <select
                onChange={handleChange}
                value={language}
                className="text-[20px] text-[#000000a6] border-solid border-2 border-[#0000007a] rounded-[10px] py-[3px] px-[7px] font-bold"
              >
                <option value="uz">{t("o'zbekcha")}</option>
                <option value="ru">{t("ruscha")}</option>
              </select>
            </li>
            <li>
              <Button />
            </li>
          </ul>
          <div className="md:hidden">
            <button className="text-4xl" onClick={toggleNavbar}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <ul className="flex flex-col basis-full items-center gap-10 fixed right-0 pt-[20%] w-80 h-full bg-white z-20 md:hidden">
          <li>
            <a href="#main" className="text-3xl text-[#00000098] font-normal">
              {t("asosiy")}
            </a>
          </li>
          <li>
            <a href="#us" className="text-3xl text-[#00000098] font-normal">
              {t("biz")}
            </a>
          </li>
          <li>
            <a
              href="#serviceses"
              className="text-4xl text-[#00000098] font-normal"
            >
              {t("xizmatlar")}
            </a>
          </li>
          <li>
            <a
              href="#feedback"
              className="text-4xl text-[#00000098] font-normal"
            >
              {t("fikrlar")}
            </a>
          </li>
          <li>
            <a
              href="#questions"
              className="text-4xl text-[#00000098] font-normal"
            >
              {t("savollar")}
            </a>
          </li>
          <li className="mr-10">
            <select
              onChange={handleChange}
              value={language}
              className="text-[20px] text-[#000000a6] border-solid border-2 border-[#0000007a] rounded-[10px] py-[3px] px-[7px] font-bold"
            >
              <option value="uz">{t("o'zbekcha")}</option>
              <option value="ru">{t("ruscha")}</option>
            </select>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
