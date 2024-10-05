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
    <div className="mt-32" id="us">
      <h1 className="animate__animated animate__flipInX ">
        {t("negaBiz")}
      </h1>
      <hr className="h-[2px] bg-[#CCC] my-10" />
      <div className="grid grid-cols-3">
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
      <div className="bg-gilamFon bg-cover bg-center h-screen mt-20 rounded-3xl relative">
        <h2 className="absolute text-white text-[40px] w-1/2 top-12 left-12 font-unbounded font-bold">
          {t("chegirmaTitle")}
        </h2>
        <p className="absolute left-12 top-60 text-white w-1/4">
        {t("chegirmaBody")}
        </p>
        <h2 className="absolute text-white text-[40px] w-1/2 bottom-[40%] left-12 font-unbounded font-bold">998-95-000-30-80</h2>
        <h2 className="absolute text-white text-[40px] w-1/2 bottom-[33%] left-12 font-unbounded font-bold">998-99-060-30-80</h2>
        <div className="absolute left-12 bottom-28"><Button /></div>
      </div>
    </div>
  );
};

export default WhyUs;
