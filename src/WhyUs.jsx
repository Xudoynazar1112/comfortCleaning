import React from "react";
import Button from './Button'
import "animate.css";
import lightning from "/lightning.svg";
import medal from "/medal.svg";
import { useTranslation } from "react-i18next";

const Superiority = ({ icon, title, description }) => {
  return (
    <div className="w-96 animate__animated animate__bounceInLeft">
      <img src={icon} alt="title" />
      <h3 className="font-unbounded text-black text-[24px] mb-5">{title}</h3>
      <p className="w-3/4">{description}</p>
    </div>
  );
};

const WhyUs = () => {
  const {t, i18n} = useTranslation();
  return (
    <div className="mt-32 px-10" id="us">
      <h1 data-aos="fade-down">
        {t("negaBiz")}
      </h1>
      <hr className="h-[2px] bg-[#CCC] my-10" />
      <div className="grid grid-cols-1 gap-10 md:grid md:grid-cols-3" data-aos="fade-right">
        <Superiority
          icon={lightning}
          title={t('tezYuv')}
          description={
            t("tezYuvBody")
          }
        />
        <Superiority
          icon={medal}
          title={t("mutaxasis")}
          description={
            t("mutaxasisBody")
          }
        />
        <Superiority
          icon={medal}
          title={t("qulay")}
          description={
            t("qulayBody")
          }
        />
      </div>
      <div className="bg-gilamFon bg-cover bg-center h-screen mt-20 rounded-3xl md:relative">
        <h2 data-aos="fade-right" className="p-5 text-4xl md:absolute text-white md:text-[40px] md:w-1/2 md:top-12 md:left-12 font-unbounded font-bold">
          {t("chegirmaTitle")}
        </h2>
        <p data-aos="fade-left" className="px-5 md:absolute md:left-12 md:top-60 text-white md:w-1/4">
        {t("chegirmaBody")}
        </p>
        <a data-aos="fade-right" href="tel:+998950003080" className="p-5 text-4xl inline-block md:absolute text-white md:text-[40px] md:w-1/2 md:bottom-[40%] md:left-12 font-unbounded font-bold">998-95-000-30-80</a>
        <a data-aos="fade-right" href="tel:+998990603080" className="p-5 text-4xl inline-block md:absolute text-white md:text-[40px] md:w-1/2 md:bottom-[33%] md:left-12 font-unbounded font-bold">998-99-060-30-80</a>
        <div data-aos="fade-up" className="p-5 mt-10 md:absolute md:left-12 md:bottom-28"><Button /></div>
      </div>
    </div>
  );
};

export default WhyUs;
