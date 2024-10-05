import React from "react";
import Button from './Button'
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const {t, i18n} = useTranslation();
  const language = localStorage.getItem('i18nextLng')
  const handleChange = (event) => {
    const selectLanguage = event.target.value;
    i18n.changeLanguage(selectLanguage);
  }
  return (
    <div className="py-[15px] pr-[40px] flex justify-between w-full fixed top-0 bg-white z-50">
      <div>
        <img className="w-[300px] h-[90px]" src="/logo.png" alt="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex items-center gap-7">
          <li>
            <a href="#main" className="text-[20px] text-[#00000098] font-normal">
              {t('asosiy')}
            </a>
          </li>
          <li>
            <a href="#us" className="text-[20px] text-[#00000098] font-normal">
            {t('biz')}
            </a>
          </li>
          <li>
            <a href="#serviceses" className="text-[20px] text-[#00000098] font-normal">
            {t('xizmatlar')}
            </a>
          </li>
          <li>
            <a href="#feedback" className="text-[20px] text-[#00000098] font-normal">
            {t('fikrlar')}
            </a>
          </li>
          <li>
            <a href="#questions" className="text-[20px] text-[#00000098] font-normal">
            {t('savollar')}
            </a>
          </li>
          <li className="mr-10">
            <select onChange={handleChange} value={language} className="text-[20px] text-[#000000a6] border-solid border-2 border-[#0000007a] rounded-[10px] py-[3px] px-[7px] font-bold">
              <option value="uz">{t("o'zbekcha")}</option>
              <option value="ru">{t('ruscha')}</option>
            </select>
          </li>
          <li>
            <Button />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
